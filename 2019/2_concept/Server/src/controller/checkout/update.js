const db = require('../../../db/models')
const moment = require('moment')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res) {
        const user = req.query.userId
        const order = req.params.orderId
        const {products, total, address} = req.body
        await db.Order.update({
            products: products,
            total: total,
            address: address,
            updated: moment().format('YYYY/MM/DD HH:mm:ss')
        }, {
            where: {
                orderId: order,
                userId: user
            }
        })
            .then((data) => success200(res, data))
            .catch(err => error500(res, err))
    }
}