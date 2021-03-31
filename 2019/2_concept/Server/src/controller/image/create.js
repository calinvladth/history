const db = require('../../../db/models')
const {success200, error500, error404} = require('../../helpers/response')

module.exports = {
    async create(req, res) {
        let images = []
        if(!req.files) error404(res)
        if (req.files) {
            req.files.forEach(file => {
                images.push({image: file.filename, productId: req.query.productId})
            })
            await db.Image.bulkCreate(images)
                .then((data) => {
                    if(data.length > 0) success200(res, data)
                    if(data.length === 0 || !data) error404(res, data)
                })
                .catch(err => error500(res, err))
        }
    }
}