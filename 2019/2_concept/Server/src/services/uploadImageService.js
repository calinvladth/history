const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },

    filename: function(req, file, callback) {
        console.log('%%%%%', path.extname(file.originalname))
        if(path.extname(file.originalname) !== '.jpg' && path.extname(file.originalname) !== '.png') return callback(new Error('Only images are allowed'))
        var fname = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        callback(null, fname);
    }
});
const upload = multer({
    storage: storage
})

module.exports = {upload}
