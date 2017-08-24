///////////
// Trivia Game:
//  - Create a trivia form with multiple choice or true/false options (your choice)
//  - Player has a limited amount of time to answer each question.
//  - The game ends when the time runs out! At that point the page will reveal the number of
//       questions that player has answered correctly and incorrectly
/////////


// Create a trivia game that shows only one question until the player answers it or their time runs
//  out.

$( document ).ready(function() {

    //Timer
    $(".timerButton").on("click", countdownTimer.run, countdownTimer.stopTimer);
    // Declare Triva Game Object

    $(".testQuestions").html("<h3>" + quizQuestions.questions[0] + "</h3>").append(displayAnswer(quizQuestions.answersOne));
    $(".testQuestions").append("<h3>" + quizQuestions.questions[1] + "</h3>").append(displayAnswer(quizQuestions.answersTwo));
    $(".testQuestions").append("<h3>" + quizQuestions.questions[2] + "</h3>").append(displayAnswer(quizQuestions.answersThree));

  });



    // Scores//
    var answeredCorrect = 0;
    var answeredWrong = 0;
    //Variable that will hold our interval ID when we execture "run" function
    var intervalID;

    // If the player selects the correct answer, show a screen congratulating the player for choosing the
    // correct answer, wait a few seconds, then display the next question.

    // Do the same for a wrong answer, as well if the player runs out of time on that specfic question.

    // Lastly display the final number of correct and incorrect answeres, and an option to reset the countdownTimer
    //   without reloading the page.

    //Question and Answers

    var quizQuestions = {
      questions : ['How many licks does it take to get to the center of a tootsie roll pop?', 'When will then be now?', 'Where in the World is Carmen San Diego?'],
      answersOne : ['50', '100', '1,000', '50,000', 'The world may never know...' ],
      answersTwo: ['Soon', 'Sometime in the near future', 'Tomorrow', 'What does it matter', 'What kind of stupid question is this?'],
      answersThree: ['San Diego', 'Portugal', 'Madagascar', 'What are you talking about?'],
      correctAnswers: ['The world may never know...', 'Soon', 'Madagascar']
    };


    function displayAnswer(arr) {
      html = '';
      name = 'answers' + 1;
      for (i = 0; i < arr.length; i++) {
        html += '<p class="answerArr">' + '<input type="radio" name=" ' +  name  + ' " >' + arr[i] + '</p>';
      }
      name ++;
      return html
    };



    // function displayAnswer(arr) {
    //   html = '';
    //   for (i = 0; i < arr.length; i++) {
    //     html += '<p class="answerArr">' + arr[i] + '</p>';
    //   }
    //   return html
    // };



    //Countdown Timer Object
    var countdownTimer = {
    //The run function sets an intervalthat runs the decrement function once a seconds

    numberCounter: 20,
    run: function() {
      intervalID = setInterval(countdownTimer.decrement,1000);
    },
    // The decrement function
    decrement: function() {
      // Decrease number by one
      countdownTimer.numberCounter --
      //Display the number in the timer Tag
      $(".timer").html("<h2>" + countdownTimer.numberCounter + "</h2>");
      // Once number hits zero...
      if (countdownTimer.numberCounter === 0) {
        // ...run the stop function
        countdownTimer.timerDone();
        //Alert the user that time is up!
        alert("You have failed your highness!")
      }
    },
    //The timerDone function
    timerDone: function () {
          clearInterval(intervalID);
          countdownRunning = false;
        }

  };
