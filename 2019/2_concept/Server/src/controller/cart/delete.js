const db = require('../../../db/models')
const {error500} = require('../../helpers/response')

module.exports = {
    async removeProduct(req, res, next) {
        // This happens when a product is completely removed for the cart
        const product = req.product

        await db.Cart.findOne({
            where: {
                userId: req.query.userId
            }
        })
            .then(cartData => {
                let productRemovedFromCart
                let total = 0
                const products =
                    typeof cartData.products === 'string' ?  JSON.parse(cartData.products) : cartData.products
                productRemovedFromCart = products.filter(data => data.productId !== product.productId)

                productRemovedFromCart.forEach(prod => {
                    total += prod.price
                })

                return {total: total, products: productRemovedFromCart}

            })
            .then(async (data) => {
                await db.Cart.update({
                    products: data.products,
                    total: data.total
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
            })
            .catch(err => error500(res, err))
    }
}