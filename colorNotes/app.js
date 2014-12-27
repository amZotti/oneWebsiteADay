$(document).ready(function() {
  $(".inner").hover(fadeOut, fadeIn);
});

var fadeOut = function(e) {
  var element = $(e.target);
  element.fadeTo('slow', 0.5);
};

var fadeIn = function(e) {
  playAudio(e);
  var element = $(e.target);
  element.fadeTo('slow', 1);
};

var playAudio = function(e) {
  var audioElement = document.createElement('audio');
  switch(e.target.id) {
    case "yellow1":
      audioElement.setAttribute('src', 'sounds/1.wav');
      break;
    case "yellow2":
      audioElement.setAttribute('src', 'sounds/2.wav');
      break;
    case "yellow3":
      audioElement.setAttribute('src', 'sounds/3.wav');
      break;
    case "yellow4":
      audioElement.setAttribute('src', 'sounds/4.wav');
      break;
    case "red1":
      audioElement.setAttribute('src', 'sounds/5.wav');
      break;
    case "red2":
      audioElement.setAttribute('src', 'sounds/6.wav');
      break;
    case "red3":
      audioElement.setAttribute('src', 'sounds/7.wav');
      break;
    case "red4":
      audioElement.setAttribute('src', 'sounds/8.wav');
      break;
    case "blue1":
      audioElement.setAttribute('src', 'sounds/9.wav');
      break;
    case "blue2":
      audioElement.setAttribute('src', 'sounds/10.wav');
      break;
    case "blue3":
      audioElement.setAttribute('src', 'sounds/11.wav');
      break;
    case "blue4":
      audioElement.setAttribute('src', 'sounds/12.wav');
      break;
  };
  audioElement.play();
};
