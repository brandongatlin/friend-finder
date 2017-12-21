var path = require("path");
var peeps = require('../data/friends');


function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'));
  });

  app.post('/api/friends', function(req, res) {
    peeps.push(req.body);
  });
}

module.exports = apiRoutes;


//for loops to pull out scores and turn into numbers, from strings
for (var i = 0; i < peeps.length; i++) {
  var scoresArr = peeps[i].length;

  scoresArr = peeps[i].scores;

  for (var j = 0; j < scoresArr.length; j++) {
    var number = parseInt(scoresArr[j]);
    console.log(scoresArr[j]);
    // console.log(number);
  } //end for loop j

} // end for loop i