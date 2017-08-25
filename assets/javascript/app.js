///////////
// Trivia Game:
//  - Create a trivia form with multiple choice or true/false options (your choice)
//  - Player has a limited amount of time to answer each question.
//  - The game ends when the time runs out! At that point the page will reveal the number of questions that player has answered correctly and incorrectly
/////////
// Create a trivia game that shows only one question until the player answers it or their time runs
//  out.


$( document ).ready(function() {

    // Timer
$(".testQuestions, #submit, .resultsDisplay, .banner").hide();

    // $(".testQuestions").html("<h3>" + quizQuestions.questions[0] + "</h3>").append(displayQuiz(quizQuestions.answersOne));
$(".startButton").click(function(){
  $(".testQuestions, #submit, .banner").show();
  $(".start").hide();
  $(countdownTimer.run);
});

    //Display Divs
    var testQuestions = ".testQuestions";
    var resultsDisplay = ".resultsDisplay";
    var submitButton = "#submit";
    //Variable that will hold our interval ID when we execture "run" function
    var intervalID;

  // Declare Triva Game Array of Questions
    var quizQuestions = [
      {
        question: '<h3>How many licks does it take to get to the center of a tootsie roll pop?</h3>',
        answers: {
          a: '50',
          b: '100',
          c: '1,000',
          d: '50,000',
          e: 'The world may never know...'
        },
        correctAnswer: 'e'
      },
      {
        question: '<h3>When will then be now?</h3>',
        answers: {
          a: 'Soon',
          b: 'Sometime in the near future',
          c: 'Tomorrow',
          d: 'What does it matter',
          e: 'What kind of stupid question is this?'
        },
        correctAnswer: 'a'
      },
      {
        question: '<h3>Where in the world is Carmen San Diego?</h3>',
        answers: {
          a: 'San Diego',
          b: 'Portugal',
          c: 'Madagascar',
          d: 'Mongolia',
          e: 'What are you talking about?'
        },
        correctAnswer: 'c'
      }
    ];

    //Generate Quiz
    generateQuiz(quizQuestions, testQuestions, resultsDisplay, submitButton);

    function generateQuiz(questions, testQuestions, resultsDisplay, submitButton){
    // Display Quiz Questions
    function displayQuiz(questions, testQuestions) {
      //Store output and answers
      var output = [];
      var answers;
      //Loop through the different questions
      for (i = 0; i < questions.length; i++) {
        //clear out the answers
        answers = [];
          //Loop through the answers with For In loop Good for Objects!
          for(letter in questions[i].answers) {
            answers.push(
              '<p>'
                + '<input type="radio" name="question' + i + '"value ="' + letter + '">'
                + questions[i].answers[letter]
              +'</p>'
            );
          }
        // add the question and the Correct Answer to ouput
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
      //Combine Output list into one string to place on the page
      $(testQuestions).append(output);
    }

    /////////////
    //Display Quiz
    /////////////

    displayQuiz(quizQuestions, testQuestions);
    //Display Answers with Submit
    function displayResults(questions, testQuestions, resultsDiv) {
      //Retrieve Answers For the results
      var answerDisplay = $(testQuestions).hasClass('answers');
      // testQuestions.querySelector('.answers');
      var radio
      //Keep track of the Users Pick
      var userAnswer = '';
      var numberCorrect = 0;

      for(var i=0; i<questions.length; i++){
        userAnswer = $('input:checked').val();
        // userAnswer = $('answerDisplay').is(':checked');
        //if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          numberCorrect++;
          answerDisplay;
        }
      }
      //Display the number of correct answers
      $(resultsDisplay).html(numberCorrect + ' out of ' + questions.length);
      if($(resultsDisplay).html(numberCorrect + ' out of ' + questions.length) ==''){
        $(resultsDisplay).html('None of the answers were correct!');
      }
    }

    $(submitButton).click(function(){
        displayResults(questions, testQuestions, resultsDisplay)
        clearInterval(intervalID);
        $(".resultsDisplay").show();
        $(".banner").find("h2").html('Check out Your Results!');
        $("#submit").hide();
        $(".testQuestions").hide();
    });
  } // End of Quiz

    ///////////////////////
    //Countdown Timer Object
    ///////////////////////
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
        clearInterval(intervalID);
        //Alert the user that time is up!
        $(".banner").find("h2").html('Game Over Man!');
        $("#submit").hide();
        $(".testQuestions").hide();
        $(".resultsDisplay").show();
        }
      },
    }

});
