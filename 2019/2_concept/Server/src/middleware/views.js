const requestIp = require('request-ip');
const db = require('../../db/models');
const moment = require('moment')
const {error500} = require('../helpers/response')

module.exports = {
    async createViewProduct(req, res, next) {
        await db.View.create({
            productId: req.params.productId,
            view: 1,
            ip: requestIp.getClientIp(req),
            created: moment().format('YYYY/MM/DD HH:mm:ss')
        })
            .then(() => next())
            .catch(err => error500(res, err))
    },
    async listViewsProduct(req, res, next) {

        await db.View.count({
            where: {
                productId: req.params.productId
            }
        })
            .then((views) => {
                req.views = views
            })
            .catch(err => error500(res, err))

        await db.View.count({
            where: {productId: req.params.productId},
            group: ['view', 'ip']
        })
            .then((unique) => {
                req.uniqueViews = unique.length
                next()
            })
            .catch(err => error500(res, err))
    }
}