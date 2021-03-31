var express = require("express");
var router  = express.Router();
var Scan = require("../models/scan");
// var Room = require("../models/room");
var middleware = require("../middleware"); 


//CREATE - add new Scan to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to Scans array
    var propertyName = req.body.propertyName;
    var propertyImage = req.body.propertyImage;
    var propertyCustomName = req.body.propertyCustomName;
    var propertyMap = req.body.propertyMap;
    var customImageName = req.body.customImageName;
    var customImageLink = req.body.customImageLink;
    var customPdfName = req.body.customPdfName;
    var customPdfLink = req.body.customPdfLink;
    var customPdfName1 = req.body.customPdfName1;
    var customPdfLink1 = req.body.customPdfLink1;
    var streetViewMap = req.body.streetViewMap;
    var streetView = req.body.streetView;
    var logo = req.body.logo;
    var virtualName = req.body.virtualName;
    var virtualLink = req.body.virtualLink;
    var roomName1 = req.body.roomName1;
    var virtualLinkRoom1 = req.body.virtualLinkRoom1;
    var roomName2 = req.body.roomName2;
    var virtualLinkRoom2 = req.body.virtualLinkRoom2;
    var roomName3 = req.body.roomName3;
    var virtualLinkRoom3 = req.body.virtualLinkRoom3;
    var roomName4 = req.body.roomName4;
    var virtualLinkRoom4 = req.body.virtualLinkRoom4;
    var roomName5 = req.body.roomName5;
    var virtualLinkRoom5 = req.body.virtualLinkRoom5;
    var roomName6 = req.body.roomName6;
    var virtualLinkRoom6 = req.body.virtualLinkRoom6;
    var roomName7 = req.body.roomName7;
    var virtualLinkRoom7 = req.body.virtualLinkRoom7;
    var roomName8 = req.body.roomName8;
    var virtualLinkRoom8 = req.body.virtualLinkRoom8;
    var roomName9 = req.body.roomName9;
    var virtualLinkRoom9 = req.body.virtualLinkRoom9;
    var roomName10 = req.body.roomName10;
    var virtualLinkRoom10 = req.body.virtualLinkRoom10;
    var roomName11 = req.body.roomName11;
    var virtualLinkRoom11 = req.body.virtualLinkRoom11;

    var roomName12 = req.body.roomName12;
    var virtualLinkRoom12 = req.body.virtualLinkRoom12;
    var roomName13 = req.body.roomName13;
    var virtualLinkRoom13 = req.body.virtualLinkRoom13;
    var roomName14 = req.body.roomName14;
    var virtualLinkRoom14 = req.body.virtualLinkRoom14;
    var roomName15 = req.body.roomName15;
    var virtualLinkRoom15 = req.body.virtualLinkRoom15;

    var roomName16 = req.body.roomName16;
    var virtualLinkRoom16 = req.body.virtualLinkRoom16;
    var roomName17 = req.body.roomName17;
    var virtualLinkRoom17 = req.body.virtualLinkRoom17;
    var roomName18 = req.body.roomName18;
    var virtualLinkRoom18 = req.body.virtualLinkRoom18;
    var roomName19 = req.body.roomName19;
    var virtualLinkRoom19 = req.body.virtualLinkRoom19;
    
    var websiteUrl = req.body.websiteUrl;

    var socialLink1 = req.body.socialLink1;
    var socialLink2 = req.body.socialLink2;
    var socialLink3 = req.body.socialLink3;
    var socialLink4 = req.body.socialLink4;
    var news = req.body.news;
    

    var author = { 
        id: req.user._id,
        username: req.user.username
        // isAdmin: req.body.isAdmin
    }
    var newScan = {
        propertyName: propertyName,
        propertyImage: propertyImage, 
        propertyCustomName: propertyCustomName,
        propertyMap: propertyMap,
        customImageName: customImageName,
        customImageLink: customImageLink,
        customPdfName: customPdfName,
        customPdfLink: customPdfLink,
        customPdfName1: customPdfName1,
        customPdfLink1: customPdfLink1,
        streetViewMap: streetViewMap,
        streetView: streetView, 
        logo: logo, 
        virtualName: virtualName,
        virtualLink: virtualLink, 
        roomName1: roomName1, 
        virtualLinkRoom1: virtualLinkRoom1, 
        roomName2: roomName2, 
        virtualLinkRoom2: virtualLinkRoom2, 
        roomName3: roomName3, 
        virtualLinkRoom3: virtualLinkRoom3, 
        roomName4: roomName4, 
        virtualLinkRoom4: virtualLinkRoom4, 
        roomName5: roomName5, 
        virtualLinkRoom5: virtualLinkRoom5, 
        roomName6: roomName6, 
        virtualLinkRoom6: virtualLinkRoom6, 
        roomName7: roomName7, 
        virtualLinkRoom7: virtualLinkRoom7, 
        roomName8: roomName8, 
        virtualLinkRoom8: virtualLinkRoom8, 
        roomName9: roomName9, 
        virtualLinkRoom9: virtualLinkRoom9, 
        roomName10: roomName10, 
        virtualLinkRoom10: virtualLinkRoom10, 
        roomName11: roomName11, 
        virtualLinkRoom11: virtualLinkRoom11, 
        roomName12: roomName12, 
        virtualLinkRoom12: virtualLinkRoom12, 
        roomName13: roomName13, 
        virtualLinkRoom13: virtualLinkRoom13, 
        roomName14: roomName14, 
        virtualLinkRoom14: virtualLinkRoom14, 
        roomName15: roomName15, 
        virtualLinkRoom15: virtualLinkRoom15, 
        roomName16: roomName16, 
        virtualLinkRoom16: virtualLinkRoom16,
        roomName17: roomName17, 
        virtualLinkRoom17: virtualLinkRoom17, 
        roomName18: roomName18, 
        virtualLinkRoom18: virtualLinkRoom18, 
        roomName19: roomName19, 
        virtualLinkRoom19: virtualLinkRoom19, 
        websiteUrl: websiteUrl, 
        socialLink1: socialLink1, 
        socialLink2: socialLink2, 
        socialLink3: socialLink3,
        socialLink4: socialLink4,
        news: news,
        author:author}

    // Set the page colors
    if(req.body.whitePage === 'yes') {
        newScan.isWhite = true;
        } else if(req.body.whitePage === 'no') {
            newScan.isWhite = false;
        } else {
            newScan.isWhite = false;
        }

        // eval(require('locus'));
    // Create a new Scan and save to DB
    

    Scan.create(newScan, function(err, newlyCreated){
        if(err){
            // console.log(err);
        } else {
            //redirect back to Scans page
            // console.log(newlyCreated);
            res.redirect("/users");
        }
    });
});

//NEW - show form to create new Scan
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("scans/new"); 
});

// SHOW - shows more info about one Scan
router.get("/:id", function(req, res){
    //find the Scan with provided ID
    Scan.findById(req.params.id).populate("comments").exec(function(err, foundScan){
        if(err){
            // console.log(err);
        } else {
            // console.log(foundScan)
            //render show template with that Scan
            res.render("scans/show", {scan: foundScan});
        }
   
    });
});


// EDIT Scan ROUTE
router.get("/:id/edit", middleware.checkScanOwnership, function(req, res){
    Scan.findById(req.params.id, function(err, foundScan){
        res.render("scans/edit", {scan: foundScan});
    });
});

// UPDATE Scan ROUTE
router.put("/:id",middleware.checkScanOwnership, function(req, res){
    // eval(require('locus'));
    // find and update the correct Scan
    Scan.findByIdAndUpdate(req.params.id, req.body.scan, function(err, updatedScan){
       if(err){
           res.redirect("back");
       } else {
           //redirect somewhere(show page)
           res.redirect("/scans/" + req.params.id);
       }
    });
});

// DESTROY Scan ROUTE
router.delete("/:id",middleware.checkScanOwnership, function(req, res){
   Scan.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("back");
      } else {
          res.redirect("/users"); 
      }
   });
});



module.exports = router;

