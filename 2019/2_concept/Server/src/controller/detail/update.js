const db = require('../../../db/models')
const{success200, error500, error404} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        await db.Detail.update({
            text: req.body
        }, {
            where: {detailId: req.params.detailId}
        })
            .then((data) => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    },
    async onProduct(req, res, next) {
        await db.Detail.update({
            text: req.body.detail
        },{where: {productId: req.params.productId}})
            .then((data) => {
                req.detail = data
                next()
            })
            .catch(err => error500(res, err))
    }
}