
incrementCircle = ->
  newSize = circle.height() + 2
  circle.height newSize
  circle.width newSize
  circle.css 'visibility',  'visible'
  circle.css 'border-radius', newSize
  circle.css 'margin-top', newSize/-2
  circle.css 'margin-left', newSize/-2
  circle.css 'background-color', randomColor()
  setOpacityOf circle
  incrementCount()

setOpacityOf = (circle) ->
  if circle.css('opacity') is '1'
    circle.css 'opacity', '0.5'
  else
    circle.css 'opacity', '1'

randomColor = ->
  "##{Math.floor(Math.random() * 16777215).toString(16)}"

incrementCount = ->
  number = $("span").text()
  $("span").text((+number) + 1)

$(document).ready ->
  document.getElementById('audiotag1').play()
  window.circle = $("div")
  incrementCircle;
  setInterval(incrementCircle, 1);
