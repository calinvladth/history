var mongoose = require("mongoose");

var roomSchema = new mongoose.Schema({
    roomName: String,
    virtualLinkRoom: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },

});



module.exports = mongoose.model("Room", roomSchema); 