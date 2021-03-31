const db = require('../../../db/models')
const {error500} = require('../../helpers/response')

module.exports = {
    async onRegister(req, res, next) {
        const products = []
        await db.Cart.create({
            products: products,
            userId: req.user.userId || req.params.userId || req.query.userId
        })
            .then((data) => {
                console.log('CART WAS CREATED SUCCESSFULLY')
                req.cart = data
                next()
            })
            .catch(err => error500(res, err))
    }
}