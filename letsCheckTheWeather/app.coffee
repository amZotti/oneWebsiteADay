$(document).ready ->
  $('input').focus()
  $('form').on 'submit', (event) ->
    event.preventDefault();
    query = $('input').val()
    script = document.createElement("script")
    script.src = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=#{query}&format=json&callback=processWeather&key=j8xvysb7t9jp2dvw7pwcbgs3"
    document.body.appendChild(script)

window.processWeather = (weather) ->
  if weather.data.error
    $("#weather").html("<h1>An error has occurred</h1>")
  else
    currentConditions = weather.data.current_condition[0]
    temperature = currentConditions.temp_F
    forecast = currentConditions.weatherDesc[0].value
    displayWeather(temperature, forecast)

displayWeather = (temperature, forecast) ->
  template = _.template("<div> "+
    "<h1><%= temperature %> degrees</h1>" +
    "<h1><%= forecast %></h1>" +
    "</div>")
    $('#weather').html(template({temperature: temperature, forecast: forecast}))
    shiftBackgroundColorToTemperature(temperature);

shiftBackgroundColorToTemperature = (temperature) ->
  climates = 
    supercold: "rgb(20, 105, 234)"
    cold: "rgb(112, 142, 187)"
    meh: "rgb(217, 222, 229)"
    warm: "rgb(247, 236, 129)"
    hot: "rgb(237, 176, 176)"
    superhot: "rgb(242, 1, 1)"
    unknown: "rgb(0, 0, 0"

  switch true
    when temperature < 10 then color = "supercold"
    when temperature < 30 then color = "cold"
    when temperature < 50 then color = "meh"
    when temperature < 70 then color = "warm"
    when temperature < 90 then color = "hot"
    when temperature < 110 then color = "superhot"
    else color = "unknown"

  $('body').animate({backgroundColor: climates[color]}, 'slow');


