const db = require('../../../db/models')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res) {
        const order = req.params.orderId
        await db.Order.destroy({
            where: {
                orderId: order
            }
        })
            .then((data) => success200(res, data))
            .catch(err => error500(res, err))
    }
}