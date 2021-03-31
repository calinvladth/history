const {error404, error500, success200} = require('../../helpers/response');

const db = require('../../../db/models')
const fs = require('fs')

module.exports = {
    async delete(req, res) {
        fs.unlink(`./uploads/${req.query.filePath}`, async (err) => {
            if(err) error404(res, err)
            if(!err) {
                await db.Image.destroy({
                    where: {
                        imageId: req.query.imageId
                    }
                })
                    .then((data) => {
                        success200(res, data)
                    })
                    .catch(err => error500(res, err))
            }
        })
    }
}