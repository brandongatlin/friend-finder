var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var nosniff = require('dont-sniff-mimetype');

var app = express();

//app.use(nosniff());

var dirname = "localhost:";
var PORT = 3000;

app.use(express.static(__dirname + '/app'));

//
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(process.env.port || PORT, function() {
  console.log("listening on port: " + PORT);
});