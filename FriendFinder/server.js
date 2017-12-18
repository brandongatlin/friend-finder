var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nosniff = require('dont-sniff-mimetype');

var app = express();

app.use(nosniff());


var dirname = "localhost:";
var PORT = 3000;

app.use('/static', express.static(__dirname + '/static'));

app.listen(process.env.port || PORT, function() {
  console.log("listening on port: " + PORT);
});