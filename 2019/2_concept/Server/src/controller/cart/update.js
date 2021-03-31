const db = require('../../../db/models')
const {error500} = require('../../helpers/response')

module.exports = {
    async addProduct(req, res, next) {
        // Calculate product price based on quantity number
        // productId | product.quantity | userId
        const product = req.product
        const price = req.product.basePrice * req.product.quantity
        product.price = price

        await db.Cart.findOne({
            where: {
                userId: req.query.userId
            }
        })
            .then(cartData => {
                const products =
                    typeof cartData.products === 'string' ?  JSON.parse(cartData.products) : cartData.products

                const checkProductInCart = products.filter(data => data.productId === product.productId)
                if (!checkProductInCart[0]) {
                    products.push(product)
                    return products
                }
                else {
                    products.forEach((prod, i) => {
                        if (prod.productId === req.product.productId) {
                            products[i].price = products[i].basePrice  * req.product.quantity
                            products[i].quantity = req.product.quantity
                        }
                    })
                    return products
                }
            })
            .then(async (products) => {
                if (products) {
                    // Calculate total
                    // For each product with price formatted based on the product quantity
                    let total =  0
                    products.forEach(product => {
                        total += product.price
                    })
                    await db.Cart.update({
                        products: products,
                        total: total
                    }, {
                        where: {
                            userId: req.query.userId
                        }
                    })
                        .then((data) => {
                            req.data = data
                            next()
                        })
                        .catch(err => error500(res, err))
                }
            })
            .catch(err => {
                console.log('EEEE', err)
                error500(res, err)
            })
    }
}