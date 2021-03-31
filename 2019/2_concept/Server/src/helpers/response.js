module.exports = {
    index(req, res) {
        let data;
        let message;
        if(req.data) {
            data = {data: req.data};
        }
        if(req.message) {
            message = {message: req.message}
        }
        res.status(200).send({success: true, ...message, ...data})
    },
    success(res, send) {
        res.status(200).send({success: true, message: send.message, data: send.data})
    },
    success200(res, data) {
        res.status(200).send({success: true, message: 'OK', data: data})
    },
    error(res, send) {
        res.status(send.status).send({success: false, message: send.message, data: send.data})
    },
    error400(res, err) {
        res.status(400).send({success: false, message: 'Bad request', data: err})
    },
    error404(res, err) {
        res.status(404).send({success: false, message: 'Not Found', data: err})
    },
    error500(res, err) {
        res.status(500).send({success: false, message: 'Internal Server Error', data: err})
    }
}