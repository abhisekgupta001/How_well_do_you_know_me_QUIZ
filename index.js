var readlineSync = require('readline-sync');
const chalk = require('chalk');

//reading user name
var userName = readlineSync.question(chalk.bgRed.black.bold("Enter your name : "));
var retry = "";
//runs atleast once, unless user want to replay again
do{
console.log(chalk.bgYellow.black.bold.italic("\n<<<<<< WELCOME " + userName.toUpperCase() + " >>>>>>>>") + chalk.bgRed.black.bold("\n\nLets check How well do you Know Me?"));

var userScore = 0; //score tracker

//highscore list
  var highscore = [
    {
      name: "Abhisek",
      score: 9
    },
    {
      name: "Akash",
      score: 8
    },
    {
      name: "Ajeet",
      score:6
    },
  ]
  //play function
  function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green.bold("\nCorrect Answer\n"));
      userScore = userScore + 1;
    }
    else {
      console.log(chalk.red.bold("\nWrong Answer\n"));
    }
  }

  var questionList = [
    {
      questions: "\n1. What is my favourite movie?\n a)Masaan\n b)Gangs of Wasseypur 1 & 2\n c)Sairat\n ",
      answer: "c"
    },
    {
      questions: "\n2. Who is my favourite superhero?\n a)Iron Man\n b)Spider Man\n c)Captain America\n ",
      answer: "b"
    },
    {
      questions: "\n3. Which is my favourite Superhero Movie?\n a)Avengers: Endgame \n b)Avengers:Infinity War\n c)Avengers:Civil war\n ",
      answer: "b"
    },
    {
      questions: "\n4. Which is my favourite superhero web series?\n a)The Boys\n b)Wanda-Vision\n c)Falcon and Winter Soldier\n",
      answer: "c"
    },
    {
      questions: "\n5. Which is my favourite comedy sitcom?\n a)F.R.I.E.N.D.S.\n b)Big Bang Theory\n c)How I Met Your Mother\n ",
      answer: "a"
    },
    {
      questions: "\n6. Which is my favourite web series of all time? \n a)D A R K\n b)Money Heist\n c)F.R.I.E.N.D.S.\n ",
      answer: "a"
    },
    {
      questions: "\n7. Who is my Favourite character on FRIENDS?\n a)Phoebe\n b)Joey\n c)Chandler\n ",
      answer: "c"
    },
    {
      questions: "\n8. What do I like more?\n a)Tea\n b)Coffee\n c)Shake\n ",
      answer: "c"
    },
    {
      questions: "\n9. What would I prefer for a vacation? \n a)Mountains\n b)Beach\n ",
      answer: "b"
    },
    {
      questions: "\n10. How many Girls have I dated so far? \n a)0\n b)1\n c)2\n d)3\n ",
      answer: "a"
    },
  ];


//calling function using a loop and passing from question array
  for (var i = 0; i < questionList.length; i++) {
    play(questionList[i].questions, questionList[i].answer);
  }

  console.log(chalk.bold.yellow("------------------- WELL PLAYED "+userName.toUpperCase()+ " --------------------"));
  console.log(chalk.bgRed.black.bold.italic("\n" + userName + ", Your final score is : " + userScore+"  "));

  if(userScore> highscore[0].score)
  {
    console.log(chalk.bgGreen.black.bold.italic("Congratulation on  beating the Highscore\n"));
    console.log(chalk.bold.yellow("-------------------------------------"));
    console.log(chalk.red.italic("\n**Since you have beaten the highscore, send me a screensot and I have rewards waiting for you...** "));
    console.log(chalk.bold.yellow("-------------------------------------"));
  }

  highscore.push({ name: userName, score: userScore, });



  if (readlineSync.keyInYN('\nDo you want to check Scoreboard?')) {
    console.log(chalk.bold.yellow("\n----------- SCORES ----------- \n"));
    for (var j = 0; j < highscore.length; j++) {
      console.log(chalk.bgMagenta.bold.yellow(highscore[j].name + " : " + highscore[j].score));
    }
  }
  else {
    console.log(chalk.bgRed.bold.black("Thank you for playing"));
  }


  retry = readlineSync.question("\nPress Y to replay the Quiz\nPress N to exit the Quiz.\n")

}while(retry === "y" || retry === "Y");