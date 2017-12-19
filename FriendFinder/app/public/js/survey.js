$(document).ready(function() {
  surveyLoad();
});

var q1 = "I like to commit crimes";
var q2 = "I Like to drive faster than the speed limit";
var q3 = "I have issues with my father and/or mother";
var q4 = "I got detention many times in high school";
var q5 = "I believe in astrology";
var q6 = "I'm the life of the party";
var q7 = "I'm a hopeless romantic";
var q8 = "I wear socks with sandles";
var q9 = "My wardrobe contains tights";
var q10 = "I like sports";

var qList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var questionId = 0;

//function to load questions from array
function surveyLoad() {
  for (var i = 0; i < qList.length; i++) {
    questionId++;
    $("#surveyDiv").append("<div class='form-group'> <label for = 'exampleFormControlSelect1'><p> Question " + questionId + ": </p></label><p class = 'question-text'>" + qList[i] +
      "</p> <select class = 'form-control q' id =" + "q" + questionId + "><option> 1 Nope! </option> <option> 2 </option> <option> 3 More or Less </option> <option> 4 </option> <option> 5 To the max! </option></select ></div>");
  } //end loop
} //end surveyLoad

// var name;
// var pic;

var newUser;

$("#submit").on("click", function() {
  event.preventDefault();

  newUser = {
    "name": $("#name-input").val().trim(),
    "pic": $("#img-input").val(),
    "scores": [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  console.log(newUser);
  console.log(peeps);

  //push new user data to array of users
  peeps.push(newUser);

  $("#name-input").val("");
  $("#img-input").val("");
  $(".q").val("");

  $.post("/api/friends", newUser, function(data) {});

}); //end submit button on click event