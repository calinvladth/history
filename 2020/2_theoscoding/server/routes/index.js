const MailService = require('../routes/mail_service')


module.exports = (app) => {
    app.use('/', MailService)
}
