var readlineSync=require('readline-sync')
var userName=readlineSync.question("What is your name?")

console.log("Welcome "+userName+ " to the Yajat Quiz")

var score=0;



var questionList=[
  {
  question: "How old is Yajat at the time of making this quiz?",
  answer: "18",
  
  },
  {
  question: "Did Yajat have a Colombian friend named Gabriella on a cruise ship?",
  answer: "Yes"
  
  },
  {
  question: "Does Yajat like eating bhindi?",
  answer: "No",

  },
  {
  question: "What was Yajat's childhood dream profession?",
  answer: "Astronaut",
  },
  {
  question: "Has Yajat ever won a medal in a recognised sports event?",
  answer: "Yes"
  }]

var highScores=[
  {
    name: "Yajat",
    score: 5
  }
]

function play(question, answer)
  {
    var userAnswer=readlineSync.question(question)
    if(userAnswer==answer)
    {
      console.log("Correct Answer")
      score=score+1;
      console.log("Score "+score)
    }
    else{
      console.log("Wrong Answer")
      score=score-1;
      console.log("Score "+score)
    }
    
  }
for(var i=0; i<questionList.length; i++)
  {
    var currentQuestion=questionList[i]
    play(currentQuestion.question, currentQuestion.answer)
  }

console.log("Thanks for playing the Yajat Quiz")
console.log("Your final score is "+ score)
console.log("---------")
console.log("Check out the scores till now")
console.log("Name Score")
var highScore=highScores[0].score
highScores[highScores]
for(var i=0;i<highScores.length;i++)
{
  console.log(highScores[i].name+ " "+ highScores[i].score)
  if(highScores[i]>=highScore)
  {
    highScore=highScores[i];
  }
}
if(highScore>=score)
{
  console.log("You have achieved the highest score, please send a screenshot to verify the same")
}else{
  console.log("You have not achieved the highest score, please try again")
}
