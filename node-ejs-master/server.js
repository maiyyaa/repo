// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
	//res.redirect("/pages/index");

});

// wines page 
app.get('/wines', function(req, res) {
	res.render('pages/wines');
	//res.redirect("/");
});


// cuisine page 
app.get('/cuisine', function(req, res) {
	res.render('pages/cuisine');
});


//cookbook page
app.get('/cookbook', function(req, res) {
	res.render('pages/cookbook');
});

//contact page
app.get('/contact', function(req, res) {
	res.render('pages/contact');
});

//reload
app.get('/aa', function(req, res) {
	res.render('pages/aa');
	//res.redirect("/reload");

});


app.listen(8080);
console.log('8080 is the magic port');