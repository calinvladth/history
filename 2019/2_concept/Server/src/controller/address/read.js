const db = require('../../../db/models')
const{error500} = require('../../helpers/response')
module.exports = {
    async onLogin(req, res, next) {
        await db.Address.findOne({
            where: {
                userId: req.user.userId
            }
        })
            .then(data => {
                req.data = {user: req.user, token: req.token, address: data}
                next()
            })
            .catch(err => error500(res, err))
    }
}