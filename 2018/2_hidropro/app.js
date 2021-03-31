var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

const port = 4000
    
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){  
    res.render("index")
});

app.get("/", function(req, res){
    res.render("index")   
});


app.get("/hidroizolatii-terase", function(req, res){
      res.render("hterase")    
});

app.get("/hidroizolatii-lichide", function(req, res){
    res.render("hlichide")  
});

app.get("/hidroizolatii-lichide", function(req, res){
    res.render("hlichide")   
});

app.get("/hidroizolatii-beciuri", function(req, res){
    res.render("hbeciuri")  
});

app.get("/hidroizolatii-bai", function(req, res){
    res.render("hbai")   
});


app.get("/hidroizolatii-balcoane", function(req, res){
    res.render("hbalcoane")    
});

app.get("/hidroizolatii-piscine", function(req, res){
    res.render("hpiscine")  
});

app.get("/hidroizolatii-poliuree", function(req, res){
    res.render("hpoliuree")  
});

app.get("/hidroizolatii-poduri", function(req, res){
    res.render("hpoduri")  
});

app.get("/hidroizolatii-fundatii", function(req, res){
    res.render("hfundatii")  
});

app.get("/hidroizolatii-tabla", function(req, res){
    res.render("htabla")  
})

app.get("/covoare-piatra", function(req, res){
    res.render("covoarepiatra")  
});

// SEO start
app.get("/google26326d5593e05cb3.html", function(req, res){
    res.render("google26326d5593e05cb3")    
});

app.get("/sitemap.xml", function(req, res){
    res.render("sitemap")   
});

// Starting the server in production mode

app.set('env', 'production')

app.listen(port, () => {
 	console.log('HTTP Server running on port: ' + port);
});

