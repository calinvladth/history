const db = require('../../../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const{error500, error400} = require('../../helpers/response')

function jwtSignAdmin (admin) {
    return jwt.sign(admin, config.authentication.jwtSecret, {
        expiresIn: config.authentication.expiresIn
    })
}

module.exports = {
    async index(req, res, next) {
        let admin;
        await db.Admin.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((data) => {
                admin = data
                bcrypt.compare(req.body.pass, data.pass)
                    .then(async (data) => {
                        console.log('DDDDDDDD', data)
                        if(data === false) {
                            error400(res, data)
                        } else {
                            req.data = {admin: admin, token: jwtSignAdmin(admin.toJSON())}
                            req.message = `Welcome ${admin.fname} ${admin.lname}`
                            next()
                        }
                    })
                    .catch(err => error400(res, err))
            })
            .catch(err => error500(res, err))
    }
}