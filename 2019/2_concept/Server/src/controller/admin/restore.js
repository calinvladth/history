const db = require('../../../db/models')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const{error404, error400, success200} = require('../../helpers/response')

function jwtDecode (token) {
    return jwt.decode(token, config.authentication.jwtSecret)
}

module.exports = {
    async index(req, res) {
        // Restore password from here
        const token = req.query.token
        const pass = req.body.pass
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 > Date.now()) {
            // Next if token is valid
            const admin = await db.Admin.findOne({where: {email:decodedToken.email}})
            admin.update({pass: pass})
                .then(data => {
                    success200(res, data)
                })
                .catch(err => error404(res, err))

        } else {
            error400(res, 'Your token is expired')
        }

    }
}