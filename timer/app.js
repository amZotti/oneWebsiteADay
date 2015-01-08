var startClock = function() {
  seconds++;
  if (seconds  === 59) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 59) {
    hours++;
    minutes = 0;
  }
  updateTimer();
};

var updateTimer = function() {
  $("#seconds").text(addLeadingZeros(seconds));
  $("#minutes").text(addLeadingZeros(minutes));
  $("#hours").text(addLeadingZeros(hours));
};


var addLeadingZeros = function(num) {
  if (((num + "").length) == 1)
    return "0" + num;
  else
    return num;
}

var resetTimer = function() {
  window.seconds = 0;
  window.minutes = 0;
  window.hours = 0;
}

$(document).ready(function() {
  var intervalID = setInterval(startClock, 1000);
  resetTimer()

  $("#stop").click(function() {
    clearInterval(intervalID);
  });

  $("#start").click(function() {
    clearInterval(intervalID);
    intervalID = setInterval(startClock, 1000);
  });

  $("#reset").click(function() {
    resetTimer();
    updateTimer();
  });
});
