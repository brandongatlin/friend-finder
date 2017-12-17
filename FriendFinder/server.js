var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nosniff = require('dont-sniff-mimetype');

var app = express();

app.use(nosniff());


var dirname = "localhost:";
var PORT = 3000;

app.use('/static', express.static(__dirname + '/static'));

app.listen(PORT, function() {
  console.log("listening on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
  // res.send("survey is laded");
});

// app.post("/api/add", function(req, res) {
//   res.send("return");
// });