const moment = require('moment')
const db = require('../../../db/models')
const {success200, error500} = require('../../helpers/response')

module.exports = {
    async update(req, res, next) {
        const productId = req.params.productId
        const {name, price} = req.body

        await db.Product.update({
            name: name,
            category: req.category.name,
            price: price,
            updated: moment().format('YYYY/MM/DD HH:mm:ss')
        },{
            where: {
                productId: productId
            }
        })
            .then((data) => {
                req.product = data
                next()
            })
            .catch(err => error500(res, err))
    }
}