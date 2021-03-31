const db = require('../../../db/models')
const{error500, error400} = require('../../helpers/response')

module.exports = {
    async onRegister(req, res, next) {
        if(req.body.address1 && req.body.address2 && req.body.city) {
            await db.Address.create({
                userId: req.user.userId,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city
            })
                .then((data) => {
                    req.message = `Hello ${req.user.fname} ${req.user.lname}! Your account was created!`
                    next()
                })
                .catch(async err => {
                    await db.User.destroy({
                        where: {
                            userId: req.user.userId
                        }
                    }).then((data) => {
                        error500(res, data)
                    })

                })
        } else {
            // req.data = req.user
            // req.message = `Hello ${req.user.fname} ${req.user.lname}! Your account was created!`
            // next()
            await db.User.destroy({where: {userId: req.user.userId}})
                .then(() => {
                    const message = `You must enter your address in order to create an account`
                    error400(res, message)
                })
        }
    }
}