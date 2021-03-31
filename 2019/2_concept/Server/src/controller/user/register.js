const db = require('../../../db/models')
const{error500} = require('../../helpers/response')

module.exports = {
    async register(req, res, next) {
        await db.User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            pass: req.body.pass
        })
            .then(async (data) => {
                req.user = data
                next()
            })
            .catch(err => {
                error500(res, err)
            })
    }
}
