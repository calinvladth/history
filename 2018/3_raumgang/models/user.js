var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    // email: {type: String, unique: true, required: true},
    email: String,
    avatar: String,
    companyLogo: String,
    websiteUrl: String,
    companyName: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: {type:Boolean, default: true}
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);