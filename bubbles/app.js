var SIZE = 400;
var HEIGHT = 600;
var WIDTH = 1100;
var RGB = 255;

var makeBubble = function() {
  var color = generateColor();//generateColor();
  var size = getRandomValue(SIZE) + "px";
  var bubble = $("<div></div>");
  bubble.width(size);
  bubble.height(size);
  bubble.css("background-color", color);
  bubble.css( 'top', getRandomValue(HEIGHT));
  bubble.css( 'left', getRandomValue(WIDTH));
  return bubble;
};

var getRandomValue = function(maxValue) {
  return Math.floor((Math.random() * maxValue));
}

var generateColor = function() {
  return "rgb(" + getRandomValue(RGB) +
    "," + getRandomValue(RGB) +
    "," + getRandomValue(RGB)
    + ")";
};

var addBubble = function() {
  $('main').append(makeBubble());
};

var removeBubble = function() {
  var div = $("div")[0];
  div && div.remove();
};

$(document).ready(function() {
  $("#create").click(addBubble);
  $("#remove").click(removeBubble);
});
