const db = require('../../../db/models')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const{error404, success200} = require('../../helpers/response')

function jwtSignForgot (admin) {
    return jwt.sign(admin, config.authentication.jwtSecret, {
        expiresIn: config.authentication.forgotExpiresIn
    })
}

module.exports = {
    async index(req, res) {
        // User will receive the token based on email or phone
        const email = req.body.email

        await db.Admin.findOne({
            where: {
                email: email
            },
            attributes: ['fname', 'lname', 'email', 'phone']
        })
            .then(admin => {
                const token = jwtSignForgot(admin.toJSON())
                const decode = jwt.decode(token)
                success200(res, {token: token})
            })
            .catch(err => {
                error404(res, err)
            })
    }
}