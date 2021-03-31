var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4000;

app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// 1
app.get('/home', function(req, res) {
    res.render('app.html');
});
app.get('/', function(req, res) {
    res.render('landing.html'); 
});
app.get('/about-us', function(req, res) {
    res.render('about.html');
});
app.get('/services', function(req, res) {
    res.render('services.html');
});
// 2
app.get('/presentation/cruise', function(req, res) {
    res.render('cruise/index.html');
});
app.get('/presentation/restaurant', function(req, res) {
    res.render('restaurant/demo.ejs');
});
app.get('/presentation/fashion', function(req, res) {
    res.render('pdf/fashion.html'); 
});
app.get('/presentation/nova', function(req, res) {
    res.render('pdf/nova.html'); 
});

// Sitemap
app.get('/sitemap', function(req, res) {
    res.render('sitemap/sitemap.ejs'); 
});


app.listen(port, function() {
    console.log('A for C is listening to you, don\'t be a bad human');
})