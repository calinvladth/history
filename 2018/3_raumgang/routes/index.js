var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Scan = require("../models/scan");
var middleware = require("../middleware"); 
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

// show register form
router.get("/register", function(req, res){
   res.render("register"); 
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({
        username: req.body.username,
        email: req.body.email 
    }); 
    // process.env.ADMIN_CODE
    if(req.body.adminCode === '') {
        newUser.isAdmin = true;
      }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", "E-Mail-Adresse oder Nutzername existiert bereits");
            // return res.render("register");
            res.redirect('/register'); 
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Willkommen bei RAUMGANG " + req.body.username);
           res.redirect("/users"); 
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
   
});

//handling login logic
// router.post("/login", passport.authenticate("local", 
//     {   
//         successRedirect: "/users",
//         failureRedirect: "/login",
//         failureFlash: true,
//         successFlash: 'Willkommen bei RAUMGANG!'
//     }), function(req, res){
// });

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user._id);
      });
    })(req, res, next);
  });


// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Sie sind ausgeloggt!");
   res.redirect("/users");
});

// forgot password
router.get("/forgot", function(req, res) {
    res.render("forgot");
})

router.post("/forgot", function(req, res, next) {
    async.waterfall([
        function(done) {
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.findOne({ email : req.body.email }, function(err, user) {
                if(!user) {
                    req.flash("error", "Es existiert kein Konto mit dieser E-Mail-Adresse");
                    return res.redirect("/forgot");
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function(err) {
                    done(err, token, user);
                });
            });
        },
        function(token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                // host: 'smtp.gmail.com', 
                // port: 465,
                // secure: true,
                auth: {
                    user: 'raumgang.theapp@gmail.com',
                    pass: 'raum#Gang14C'
                }
            });

            // req.header.host at https:// for any ip 
            var mailOptions = {
                to: user.email, 
                from: 'raumgang.theapp@gmail.com',
                subject: 'Raumgang Passwort Reset',
                text: 'Bitte klicken Sie auf den folgenden Link, um Ihr Passwort zurückzusetzen' + '\n\n' +  'https://' + 'www.raumgang.com'+ '/reset/' + token + '\n\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                req.flash('success', 'Eine E-Mail wurde mit weiteren Anweisungen an ' + user.email + ' gesendet.' );
                done(err, 'done');
            });
        } 
    ], function(err) {
        if(err) return next(err);
        res.redirect('/forgot');
    })
});

// reset password 
router.get('/reset/:token', function(req, res) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if(!user) {
            req.flash('error', 'Das Zeichen zum Zurücksetzen des Passworts ist ungültig oder abgelaufen.');
            return res.redirect('/forgot');
        }
        res.render('reset', {token: req.params.token});
    });
});

router.post('/reset/:token', function(req, res) {
    async.waterfall([
        function(done) {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
              if(!user) {
                  req.flash('error', 'Das Zeichen zum Zurücksetzen des Passworts ist ungültig oder abgelaufen...');
                  return res.redirect('back');
              }  
              if(req.body.password === req.body.confirm) {
                  user.setPassword(req.body.password, function(err) {
                      user.resetPasswordToken = undefined;
                      user.resetPasswordExpires = undefined;

                      user.save(function(err) {
                          req.logIn(user, function(err) {
                              done(err, user);
                          });
                      });
                  })
              } else {
                  req.flash('error', 'Passwort stimmt nicht überein.');
                  return res.redirect('back');
              }
            });
        },
        function(user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'raumgang.theapp@gmail.com',
                    pass: 'raum#Gang14C'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'raumgang.theapp@gmail.com',
                subject: 'Ihr Passwort wurde erfolgreich geändert!',
                text: 'Hallo ' + user.username + ', Dies ist eine Bestätigung für die Änderung Ihres Passwortes'
            }; 
            smtpTransport.sendMail(mailOptions, function(err) {
                req.flash('success', 'Ihr Passwort wurde erfolgreich geändert!');
                done(err);
            });
        }
    ], function(err) {
        res.redirect('/users');
    });
});

// USER'S PROFILE
router.get('/users/:id', function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            req.flash('error', 'Etwas ist falsch gelaufen');
            res.redirect("/");
        }
        Scan.find().where('author.id').equals(foundUser._id).exec(function(err, scans) {
            if(err) {
                req.flash('error', 'Etwas ist falsch gelaufen');
                res.redirect("/");
            }
            res.render('users/show', {user: foundUser, scans: scans});
        });
         
    });
});

// THE PAGE OF USERS
router.get('/users', function(req, res) {
    // Get all Users from DB
    User.find({}, function(err, users){
        if(err){
            // console.log(err);
        } else {
           res.render("users/index",{users: users});
        }
     });
})

// EDIT User ROUTE
router.get("/users/:id/edit", middleware.checkUserOwnership, function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        res.render("users/edit", {user: foundUser});
    });
});

// UPDATE User ROUTE
router.put("/users/:id",middleware.checkUserOwnership, function(req, res){
    // find and update the correct user
    User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedUser){
       if(err){
           res.redirect('back');
       } else {
           //redirect somewhere(show page)
           res.redirect("/users/" + req.params.id);
       }
    });
});

module.exports = router;  