module.exports = {
    CLIENTURL: process.env.client_url || 'custom.com/',
    SERVERURL: process.env.server_url || 'custom.com/api',
    PORT: process.env.PORT || 8000,
    authentication: {
        jwtSecret: process.env.jWT_SECRET || 'secret',
        expiresIn: process.env.expiresIn || 60 * 60 * 24, // 24 hours
        forgotExpiresIn: process.env.forgotExpiresIn || 60 * 5 // 5 minutes
    },
    // Mail
    FROMMAIL: process.env.FROMMAIL || 'noreply@custom.com',
    MAIL: process.env.MAIL,
    MAILPASSWORD: process.env.MAILPASSWORD,
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILSECURE: process.env.MAILSECURE,

    // Checkout
    checkout: {
        inProgress: 'In Progress',
        processed: 'Processed and sent to deliver',
        canceled: 'Canceled',
        success: 'Delivered'
    }

}
