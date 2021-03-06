var mongoose = require("mongoose");

var scanSchema = new mongoose.Schema({
    logo: String,
    propertyName: String,
    propertyImage: String,
    customImageName: String,
    customImageLink: String,
    customPdfName: String,
    customPdfLink: String,
    customPdfName1: String,
    customPdfLink1: String,
    propertyCustomName: String,
    propertyMap: String,
    streetViewMap: String,
    streetView: String,
    virtualName: String,
    virtualLink: String,
    roomName1: String, 
    virtualLinkRoom1: String,
    roomName2: String,
    virtualLinkRoom2: String,
    roomName3: String,
    virtualLinkRoom3: String,
    roomName4: String,
    virtualLinkRoom4: String,
    roomName5: String, 
    virtualLinkRoom5: String,
    roomName6: String,
    virtualLinkRoom6: String,
    roomName7: String,
    virtualLinkRoom7: String,
    roomName8: String,
    virtualLinkRoom8: String,
    roomName9: String, 
    virtualLinkRoom9: String,
    roomName10: String,
    virtualLinkRoom10: String,
    roomName11: String,
    virtualLinkRoom11: String,
    roomName12: String,
    virtualLinkRoom12: String,
    roomName13: String, 
    virtualLinkRoom13: String,
    roomName14: String,
    virtualLinkRoom14: String,
    roomName15: String,
    virtualLinkRoom15: String,
    roomName16: String,
    virtualLinkRoom16: String,
    roomName17: String, 
    virtualLinkRoom17: String,
    roomName18: String,
    virtualLinkRoom18: String,
    roomName19: String,
    virtualLinkRoom19: String,
    
    websiteUrl: String,
    socialLink1: String,
    socialLink2: String,
    socialLink3: String,
    socialLink4: String,
    news: String,
    isWhite: {type:Boolean, default: false},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    } 
});

module.exports = mongoose.model("Scan", scanSchema); 