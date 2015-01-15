getColor = (position) ->
  "##{Math.floor((position/1500) * 16777215).toString(16)}"

$(document).ready ->
  $(document).mousemove (e) ->
    element = $('<div style=\"height:' + "#{e.pageY / 5}px;\"" + '></div>')
    element.css "background-color", getColor e.pageX
    $("main").append element
