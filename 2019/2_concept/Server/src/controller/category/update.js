const db = require('../../../db/models')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        await db.Category.update({
            name: req.body.name
        }, {
            where: {
                // name: req.query.categoryName,
                categoryId: req.query.categoryId
            }
        })
            .then(data => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    }
}