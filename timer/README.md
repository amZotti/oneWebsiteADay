<h1>Timer Description</h1>
<p>Timer keeps track of elapsed time since starting time. Timer allows users to
start the clock, stop the clock, and reset the clock.</p>

<h2>Lessons Learned</h2>
<p>Timer uses the setInterval method to keep track of time. I learned that when
you initiate the setInterval method, an interval ID is returned. If you retain
that interval ID in a variable, you can later pass it into clearInterval() to
stop the interval</p>

<h3>Example:</h3>
<pre>
  var intervalID = setInterval(startClock, 1000);
  resetTimer()

  $("#stop").click(function() {
    clearInterval(intervalID);
  });
</pre>

