var generateRandomNumber = function() {
  return Math.floor(Math.random() * 9);
};

var attemptGuess = function(num, answer) {
  if (num == answer)
    correctAnswer();
  else if (num <= answer + 2 && num >= answer - 2)
    close(); 
  else if (num <= answer + 5 && num >= answer - 5)
    far();
  else
    completelyWrong();
}

var correctAnswer = function() {
 $('body').animate({backgroundColor: "yellow"}, 'slow');
 $('p').text("Correct");
};

var close = function() {
  $('body').animate({backgroundColor: "red"}, 'slow');
  $('p').text("Close");
};

var far = function() {
  $('body').animate({backgroundColor: "blue"}, 'slow');
  $('p').text("Far off");
};

var completelyWrong = function() {
  $('body').animate({backgroundColor: "white"}, 'slow');
  $('p').text("Totally wrong");
};

$(document).ready(function() {
  var answer = generateRandomNumber();
  $('button').click(function() {
    var value = parseInt($('input').val());
    attemptGuess(value, answer);
  });
});
