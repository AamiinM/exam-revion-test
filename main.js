document.addEventListener('DOMContentLoaded', function() {
  // select the quiz container
  var quizContainer = document.querySelector('#quiz');

  // create an array of questions and answers
  var questions = [
    {
      question: 'What is the capital of France?',
      answers: [
        'London',
        'Paris (correct answer)',
        'Rome'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the square root of 144?',
      answers: [
        '12',
        '16',
        '18',
        '36 (correct answer)'
      ],
      correctAnswer: 3
    }
  ];

  // create a variable to store the user's score
  var score = 0;

  // create a variable to store the current question
  var currentQuestion = 0;

  // create a function to render the quiz
  function renderQuiz() {
    // create a variable to store the HTML for the quiz
    var quizHTML = '';

    // loop through the questions array
    for (var i = 0; i < questions.length; i++) {
      // get the current question
      var question = questions[i];

      // create a variable to store the HTML for the answers
      var answersHTML = '';

      // loop through the answers array
      for (var j = 0; j < question.answers.length; j++) {
        // create a radio button for each answer
        answersHTML += '<input type="radio" name="question-' + i + '" value="' + j + '"> ' + question.answers[j] + '<br>';
      }

      // add the question and answers to the quiz HTML
      quizHTML += '<p>' + question.question + '</p>' + answersHTML;
    }

    // add the quiz HTML to the page
    quizContainer.innerHTML = quizHTML;
  }

  // call the renderQuiz function to render the quiz
  renderQuiz();

  // create a function to check the user's answers
  function checkAnswers() {
    // loop through the questions array
    for (var i = 0; i < questions.length; i++) {
      // get the current question
      var question = questions[i];

      // get the selected answer for the current question
      var selectedAnswer = document.querySelector('input[name="question-' + i + '"]:checked').value;

      // check if the selected answer is correct
      if (selectedAnswer == question.correctAnswer) {
        // if the answer is correct, increase the score
        score++;
      }
    }

    // show the score
    alert('Your score: ' + score + ' / ' + questions.length);
  }

  // add an event listener to the submit button
  var submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', checkAnswers);
});
