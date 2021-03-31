const db = require('../../../db/models')
const {error500} = require('../../helpers/response')
const watch = require('../../services/getPrices')

module.exports = {
    async index(req, res, next) {
        db.WatchMarket.findAll()
            .then((data) => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    }
}