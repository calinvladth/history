const nodemailer = require("nodemailer");

async function SEND_MAIL(name, email, subject) {
    console.log('SENDING ...')
    const setup_email = 'office@theoscoding.com'
    const setup_password = 'Nikeul1q2w3e'
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: setup_email, // generated ethereal user
            pass: setup_password// generated ethereal password
        }
    });

    await transporter.sendMail({
        from: '"me_project 👻" <office@theoscoding.com>', // sender address
        to: setup_email, // list of receivers
        html: `
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <br>
        <h3 style="text-decoration: underline">Subject</h3>
        <p style="white-space: pre-line">${subject}</p>
        `
    })
        .then(() => console.log('SUCCESS'))
        .catch((error) => console.log('ERROR WHILE SENDING THE EMAIL', error))
}

module.exports = {
    index(request, response) {
        const {name, email, subject} = request.body

        SEND_MAIL(name, email, subject)

        response.status(200).send({
            success: true,
            message: 'Thank you for your interest, I will be back shortly.',
            data: {
                email: email,
                subject: subject
            }
        })
    }
}