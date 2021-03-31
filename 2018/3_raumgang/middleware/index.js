var Scan = require("../models/scan");
var User = require("../models/user")
// var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkScanOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Scan.findById(req.params.id, function(err, foundScan){
           if(err){
               req.flash("error", "Scan nicht gefunden");
               res.redirect("back");
           }  else {
               // does user own the Scan?
            if(foundScan.author.id.equals(req.user._id) || req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "Sie haben dazu keine Ermächtigung");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "Sie müssen dazu angemeldet sein");
        res.redirect("back");
    }
}



// Check Curent user ownership of user page

middlewareObj.checkUserOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
           User.findById(req.params.id, function(err, foundUser){
              if(err){
                  req.flash("error", "Benutzer nicht gefunden");
                  res.redirect("back");
              }  else {
                  // does user own the User?
               if(foundUser._id.equals(req.user._id) || req.user.isAdmin) {
                   next();
               } else {
                   req.flash("error", "Sie haben dazu keine Ermächtigung");
                   res.redirect("back");
               }
              }
           });
       } else {
           req.flash("error", "Sie müssen dazu angemeldet sein");
           res.redirect("back");
       }
   }


middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Sie müssen dazu angemeldet sein");
    res.redirect("/login");
}

// middlewareObj.isAdmin = function(req, res, next) {
//     if(req.user.isAdmin){
//         return next();
//     }
//     req.flash("error", "You need to be Admin to do that");
//     res.redirect("/login");
// }

module.exports = middlewareObj;