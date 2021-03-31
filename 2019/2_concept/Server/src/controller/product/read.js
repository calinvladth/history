const db = require('../../../db/models')
const {error500, error404} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        await db.Product.findAll({
            include: [
                {
                    model: db.Image
                },
                {
                    model: db.Spec
                },
                {
                    model: db.Detail
                },
                {
                    model: db.Quantity
                }
            ]
        })
            .then((data) => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    },
    async listById(req, res, next) {
        await db.Product.findOne({
            where: {
                productId: req.params.productId
            },
            include: [{
                model: db.Image
            },{
                model: db.Detail
            },{
                model: db.Spec
            },{
                model: db.Quantity
            }]
        })
            .then((product) => {
                req.data = {product, views: req.views, uniqueViews: req.uniqueViews}
                next()
            })
            .catch(err => error500(res, err))
    },
    async checkIfValid(req, res, next) {
        const id = req.body.productId || req.query.productId
        const requestQuantity = req.body.quantity || req.query.quantity
        await db.Product.findOne({
            where: {
                productId: id
            },
            attributes: [
                'productId',
                'name',
                'category',
                'basePrice',
                'price'
            ],
            include: [{
                model: db.Quantity,
                attributes: [
                    'quantity'
                ]
            }]
        })
            .then(product => {
                if(req.method === 'PUT') {
                    if (!product) {
                        error404(res)
                    } else {
                        const actualQuantity = product.Quantities[0].quantity
                        if(actualQuantity >= requestQuantity) {
                            let productData = {}
                            productData['productId'] = product.productId
                            productData['name'] = product.name
                            productData['category'] = product.category
                            productData['price'] = product.price
                            productData['basePrice'] = product.basePrice
                            productData['quantity'] = requestQuantity
                            req.product = productData
                            if (product.quantity === 0) {
                                error500(res, `Product quantity can't be 0`)
                            } else if (product.price === 0) {
                                error500(res, `Product price can't be 0`)
                            } else {
                                next()
                            }
                        } else {
                            error404(res, 'Too many products')
                        }
                    }
                }
                if (req.method === 'DELETE') {
                    if (!product) {
                        error404(res)
                    } else {
                        req.product = product
                        next()
                    }
                }
            })
            .catch(err => error500(res, err))
    }
}