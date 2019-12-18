var PORT = process.env.PORT || 4500;
var express = require("express");
var app = express();
// add package after install
var path = require('path');
app.set('view engine', 'pug');
// SETUP above, don't touch

// js file is included here:
var fs = require('fs');
eval(fs.readFileSync('./js/index.js')+'');
eval(fs.readFileSync('./js/header.js')+'');
eval(fs.readFileSync('./js/episode.js')+'');
eval(fs.readFileSync('./js/event.js')+'');
eval(fs.readFileSync('./js/about.js')+'');

app.get('/', function (req, res) {
  res.render('index', {
    header: headers,
    footer: footers,
    index: index_page,
  });
});

app.get('/episode', function (req, res) {
  res.render('episode', {
      header: headers,
      footer: footers,
  });
});

app.get('/event', function (req, res) {
  res.render('event', {
      header: headers,
      footer: footers,
      event: events,
  });
});

app.get('/about', function (req, res) {
  res.render('about', {
      header: headers,
      footer: footers,
      about: abouts,
  });
});

app.get('/contact', function (req, res) {
  res.render('contact', {
      header: headers,
      footer: footers,
  });
});


// Tell app to listen (super important)
app.listen(process.env.PORT || 4500, process.env.IP, function(){
	console.log("Server has started on PORT 4500!");
});
