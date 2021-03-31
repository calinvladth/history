const db = require('../../../db/models')
const moment = require('moment')
const {error500} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        let quantity = {}
        if(req.body.quantity) {
            quantity = {quantity: req.body.quantity}
        }
        await db.Quantity.create({
            ...quantity,
            created: moment().format('YYYY/MM/DD HH:mm:ss'),
            updated: moment().format('YYYY/MM/DD HH:mm:ss'),
            productId: req.product,
        })
            .then((data) => {
                req.quantity = data
                next()
            })
            .catch(err => {
                error500(res, err)
            })
    }
}