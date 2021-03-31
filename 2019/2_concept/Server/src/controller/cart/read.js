const db = require('../../../db/models')
const {error500} = require('../../helpers/response')
const test = require('../../../test')

module.exports = {
    async index(req, res, next) {
        await db.Cart.findOne({
            where: {
                userId: req.query.userId
            }
        })
            .then((cart) => {
                console.log('cart', cart)
                req.data = cart
                next()
            })
            .catch(err => error500(res, err))
    }
    // async index(req, res, next) {
    //     let total = 0;
    //     test.data.forEach(product => {
    //         console.log('********', parseFloat(product.price))
    //         total += parseFloat(product.price)
    //         console.log('total', total)
    //     })
    //
    //     req.data = {total: total, products: test.data}
    //
    //     next()
    // }
}