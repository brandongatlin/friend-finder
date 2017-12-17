var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var dirname = "localhost:";
var PORT = 3000;

app.listen(PORT, function() {
  console.log("listening on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
});

// app.post("/api/add", function(req, res) {
//   res.send("return");
// });