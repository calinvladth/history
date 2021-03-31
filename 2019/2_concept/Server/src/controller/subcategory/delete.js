const db = require('../../../db/models')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        await db.Subcategory.destroy({
            where: {
                name: req.query.subcategoryName
            }
        })
            .then(data => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    }
}