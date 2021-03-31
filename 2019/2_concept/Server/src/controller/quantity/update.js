
const db = require('../../../db/models')
const moment = require('moment')
const {success200, error500, error404} = require('../../helpers/response')

module.exports = {
    // If Quantity has more => quantity + | Will be modified
    // If Quantity has less => quantity - | Will be modified
    // If only Quantity => Quantity Will be changed
    async index(req, res, next) {
        let value
        await db.Quantity.findOne({
            where: {
                productId: req.query.productId || req.params.productId
            }
        })
            .then((data) => {
                if(req.body.more) {
                    value = data.quantity + req.body.quantity
                }
                if(req.body.less) {
                    value = data.quantity - req.body.quantity < 0 ? 0 : data.quantity - req.body.quantity
                }
                if(!req.body.more && !req.body.less) {
                    console.log('WILL BE CHANGED!')
                    value = req.body.quantity
                }
            })
            .catch(err => error404(res, err))
        await db.Quantity.update({
            quantity: value,
            updated: moment().format('YYYY/MM/DD HH:mm:ss')
        }, {
            where: {productId: req.query.productId || req.params.productId}
        })
            .then((data) => {
                req.quantity = data
                next()
            })
            .catch(err => error500(res, err))
    }
}