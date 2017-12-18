app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/survey.html'));
  // res.send("survey is loaded");
});

// app.post("/api/add", function(req, res) {
//   res.send("return");
// });