var path = require("path");
var peeps = require('../data/friends');

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'));
  });

  // app.post("/api/friends", function(req, res) {
  //   res.sendFile(path.join(__dirname, '../data/friends.js'));
  // });

  app.post('/api/friends', function(req, res) {
    //push new user data to array of users
    peeps.push(req.body);
  });
}

module.exports = apiRoutes;