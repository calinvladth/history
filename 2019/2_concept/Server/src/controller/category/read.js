const db = require('../../../db/models')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index(req, res, next) {
        await db.Category.findAll({
            include: [{
                model: db.Subcategory
            }]
        })
            .then(data => {
                req.data = data
                next()
            })
            .catch(err => error500(res, err))
    },
    async onProduct(req, res, next) {
        await db.Category.findAll({include: [{model: db.Subcategory}]})
            .then((data) => {
                const validCategory = data.filter(category => category.name === req.body.category)
                if(validCategory.length > 0){
                    req.category = JSON.parse(JSON.stringify(validCategory))[0];
                    next()
                }
                if(validCategory.length === 0) {
                    error500(res, validCategory.length)
                }
            })
            .catch(err => error500(res, err))
    }
}