var createElement = function() {
  var text = $("#todo-create-input").val();
  var newElement = "<form class='todo-item'><p class='todo-text'>" + text +
    "</p><button type='submit' class='delete-button'>Completed</button></form>"
    $("main").append(newElement);
};

var displayCongratulations = function(e) {
  e.preventDefault();
  $('img').fadeTo( 'slow', '1');
  $('header').children().remove();
  $('header').append("<h1>Good job! You did something!</h1>");
  this.remove();
};

var bindEventToNewElement = function(e) {
  var target = $(e.target).find('button');
  $(target).on("click", displayCongratulations);
}

$(document).ready(function(){
  $("#todo-create-button").on("click", createElement);
  $("body").on('DOMNodeInserted', bindEventToNewElement);
});
