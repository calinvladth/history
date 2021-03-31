const db = require('../../../db/models')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        let text = req.body.text ? req.body.text : ''

        await db.Detail.create({
            adminId: req.query.adminId,
            productId: req.product,
            text: text
        })
            .then((data) => {
                req.data = {productId: req.product, quantity: req.quantity, detail: data}
                next()
            })
            .catch(err => error500(res, err))
    }
}