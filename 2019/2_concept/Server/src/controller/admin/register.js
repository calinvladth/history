const db = require('../../../db/models')
const{error500} = require('../../helpers/response')

module.exports = {
    async register(req, res, next) {
        await db.Admin.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            pass: req.body.pass
        })
            .then(async (data) => {
                req.data = data
                req.message = `Hello ${data.fname} ${data.lname}! Your admin account was created!`
                next()
            })
            .catch(err => {
                // res.status(400).send({success: false, data: err})
                error500(res, err)
            })
    },
}