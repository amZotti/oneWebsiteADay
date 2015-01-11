<h1>ShowTime Description</h1>
<p>ShowTime uses RottenTomato API to display movie listings to users. I am
paticular proud of the Coffeescript I wrote for this app. The Coffeescript for
this website is the most sleek I have made yet.</p>

<h2>One Website A Day Progress</h2>
<p>My latest websites mark a shift in my focus. I am stop focusing so
much on design and trying to focus more on scripting, API calls, and using
different libraries.</p>

<h3>Lessons Learned</h3>
<p>During the creation of <a href="https://github.com/amZotti/oneWebsiteADay/tree/master/letsCheckTheWeather">yesterdays weather website I learned about JSONP</a>. I previously
learned how to perform a JSONP request by using a
<code>&lt;script&gt;</code> tag with an embedded callback in it, and then
append it to the DOM. Today I learned a different way to perform a JSONP
request- using AJAX. JSONP can be used in conjunction with ajax. All you need to
do is create a normal ajax get request. On the object you pass into the ajax
method the <code>dataType</code> property should be set to <code>"jsonp"</code> and the <code>jsonpCallback</code>
property should be set to whatever callback you want to use on the response
data.</p>

<h3>Example</h3>
<b>app.coffee</b>
<pre>
request = (requestType) ->
  {
    url: endpointURL requestType
    jsonpCallback: "displayMovies"
    dataType: "jsonp"
  }

$(document).ready ->
  $('#opening').click ->
    $.ajax request "opening"

  $('#now').click ->
    $.ajax request "in_theaters"

  $('#coming').click ->
    $.ajax request "upcoming"
</pre>
