var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User        = require("./models/user");
    port        = process.env.PORT || 4000;

//requiring routes
var scanRoutes = require("./routes/scan"),
    indexRoutes      = require("./routes/index");
 
var url = process.env.DATABASEURL || "mongodb://127.0.0.1:27017/raumgang";
mongoose.Promise = global.Promise
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This is an App",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/scans", scanRoutes);


 ////////// EXTRAS

app.get('/datenschutz', function(req, res) {
    res.render('dataprotection');
});
app.get('/impressum', function(req, res) {
    res.render('contact');
});

app.get('/scans/:id/anleitung', function(req, res) {
    res.render('anleitung');
});


// Starting server

app.set('env', 'production');

app.listen(port, () => {
	console.log('Raumgang is running on port ' + port);
});



