const db = require('../../../db/models')
const moment = require('moment')
const{success200, error500} = require('../../helpers/response')

module.exports = {
    async index (req, res, next) {
        const userId = req.query.userId
        await db.User.findByPk(userId, {
            include: [
                {
                    model: db.Address
                },
                {
                    model: db.Cart
                }
            ]
        })
            .then(userData => {
                // Create checkout
                const userId = userData.userId
                const cart = userData.Cart.dataValues
                const address = userData.Address.dataValues
                const products = cart.products
                const total = cart.total
                const now = moment().format("YYYY-MM-DD HH:mm:ss")
                const createCheckoutStatus = 'In progress'

                db.Checkout.create({
                    userId: userId,
                    address: address,
                    products: products,
                    total: total,
                    status: createCheckoutStatus,
                    created: now,
                    updated: now
                })
                    .then(checkout => {
                        db.Cart.update({
                            products: [],
                            total: 0
                        }, {where: {userId: userId}})
                            .then(updated => {
                                req.data = {
                                    cart: updated,
                                    checkout: checkout
                                }
                                next()
                            })
                            .catch(err => {
                                console.log('ERR', err)
                                error500(res, err)
                            })
                    })
                    .catch(err => error500(res, err))

            })
            .catch(err => error500(res, err))
    }
}