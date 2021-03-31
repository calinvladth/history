const db = require('../../../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const{error500, error400} = require('../../helpers/response')

function jwtSignUser (user) {
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: config.authentication.expiresIn
    })
}

module.exports = {
    async login(req, res, next) {
        let user;
        await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((data) => {
                user = data
                bcrypt.compare(req.body.pass, data.pass)
                    .then(async (data) => {
                        if(data){
                            req.user = user
                            req.token = jwtSignUser(user.toJSON())
                            next()
                        }
                        else {
                            error400(res)
                        }
                    })
                    .catch(err => error400(res))
            })
            .catch(err => error500(res, err))
    }
}