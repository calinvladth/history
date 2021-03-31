const passport = require('passport')
const db = require('../../db/models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../../config')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPayload, done) {
        try {
            const admin = await db.Admin.findOne({
                where: {
                    adminId: jwtPayload.adminId
                }
            })
            if (!admin) {
                return done(new Error(), false)
            }
            return done(null, admin)
        } catch (err) {
            return done(new Error(), false)
        }
    })
)

module.exports = null