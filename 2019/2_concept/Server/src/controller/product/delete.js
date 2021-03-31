const db = require('../../../db/models')
const fs = require('fs')
const {success200, error500, error404} = require('../../helpers/response')

module.exports = {
    async delete(req, res, next) {
        const productId = req.params.productId
        const adminId = req.query.adminId

        await db.Product.destroy({
            where: {
                productId: productId
            }
        })
            .then((data) => {
                if(data === 0) {
                    error404(res, data)
                }
                if(data !== 0) {
                    success200(res, data)
                }

            })
            .catch(err => error500(res, err))
    },
    async imagesFromFileSystem(req, res, next) {
        await db.Image.findAll({
            where: {productId: req.params.productId}
        })
            .then((images) => {
                let imagePath = []
                images.forEach(image => {
                    imagePath.push(image.image)
                })

                for(let i = 0; i < imagePath.length; i++) {

                    fs.unlink(`./uploads/${imagePath[i]}`, (err) => {
                        console.log(`${imagePath[i]} was deleted`)
                    });

                    if(i === imagePath.length - 1) {
                        break
                    }
                }
                next()

            })
            .catch(err => error500(res, data))
    }
}