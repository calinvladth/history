const db = require('../../../db/models')
const {error500, error404} = require('../../helpers/response')
const watch = require('../../services/getPrices')

module.exports = {
    async index(req, res, next) {
        await db.WatchMarket.create(req.watch)
            .then((data) => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    },
    async validate(req, res, next) {
        watch.getCompanies(req.body)
            .then((data) => {
                if(data.productPrice) {
                    req.data = data
                    req.watch = data
                    next()
                }
                else(error404(res))
            })
            .catch(err => error500(res, err))
    }
}