
(function test2() {

var Question = function (name,options,correctanswer){
  this.name = name;
  this.options=options;
  this.correctanswer = correctanswer;
}

var Question1 = new Question("What is your favorite food ?",['Biriyani','Dosa','Idli'],"0")
var Question2 = new Question("What is your favorite phone ?",['Oneplus7','RealmeX2pro','Iphone'],"1")
var Question3 = new Question("Which is your place ?",['Berlin','Hamburg','Magdeburg'],"2")


var questions = [Question1,Question2,Question3]

var questiontimer = true;

var counter = 1;
var currentscore = 0;

function askquestion(){
  var random = Math.floor(Math.random() * questions.length);
  var questionasked = questions[random];
  console.log(counter + " " + questionasked.name);
  console.log("0:" + questionasked.options[0]);
  console.log("1:" + questionasked.options[1]);
  console.log("2:" + questionasked.options[2]);
  var answer =  prompt("Enter your answer");
  if (answer===questionasked.correctanswer){
    console.log("Correct answer");
    currentscore++;
  }

  else if (answer==="exit"){
    questiontimer = false;
    console.log("Gamed ended");
    console.log("Resetting Scores");
    counter = 1;
    currentscore = 0;
  }

  else {
    console.log("Wrong answer");
    console.log("Better luck next time");
  }

  console.log("Your current score is " + currentscore);
  counter++;
}


while (questiontimer) {
  askquestion();
}


})();
