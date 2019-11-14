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
eval(fs.readFileSync('./js/card.js')+'');
eval(fs.readFileSync('./js/episode.js')+'');
eval(fs.readFileSync('./js/header_footer.js')+'');



app.get('/', function (req, res) {

  res.render('index', {
    header: headers,
	index: index_page,
	footer: footers,
	card_h: card_head,
	card_p: card_paragraph,
	workflow_1: workflow1,
    episode: episodes,
    ep001: ep001,
  });
});


app.get('/episode', function (req, res) {

  res.render('episode', {
    episode: episodes,
    ep001: ep001,
  });
});




// Tell app to listen (super important)
app.listen(process.env.PORT || 4500, process.env.IP, function(){
	console.log("Server has started on PORT 4500!");
});
