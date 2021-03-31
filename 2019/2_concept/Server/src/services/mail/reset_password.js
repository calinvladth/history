const nodemailer = require("nodemailer")
const config = require('../../../config')
const {error500, success200} = require('../../helpers/response')

const restorePasswordTemplate = `
<div style="width: 100%; background-color: #748490; height: 100vh; text-align: center;">
    <h1 style="padding-top: 10%; color: white">Hello</h1>
    <p style="color: white">Here is your link: <a href="/something" style="color: white">https://www.example.com/token</a></p>
</div>
`

module.exports = {
    index(req, res, next) {
        async function main(){

            let transporter = nodemailer.createTransport({
                host: config.MAILHOST,
                port: config.MAILPORT,
                secure: config.MAILSECURE,
                auth: {
                    user: config.MAIL,
                    pass: config.MAILPASSWORD
                }
            });

            await transporter.sendMail({
                from: config.FROMMAIL, // sender address
                to: "vlad.calin.th@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                html: restorePasswordTemplate
            });

            console.log('SUCCESS')
            next()
        }

        main().catch(err => {
            console.log('ERR', err)
            next()
        });
    }
}