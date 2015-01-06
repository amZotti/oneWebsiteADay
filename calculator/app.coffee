getDisplayValue =  ->
  parseInt $('th').text()

setDisplayValue = (value) ->
  $('th').text value

parseCalculation = (num1, num2, operator) ->
  switch operator
    when '+'
      num1 + num2
    when '-'
      num1 - num2
    when 'X'
      num1 * num2
    when '/'
      num1 / num2
    when ''
      0

$(document).ready ->
  displayValue = ""
  num1 = 0
  num2 = 0
  operator = ""

  $('.num').click ->
    displayValue += $(@).text()
    setDisplayValue displayValue

  $('.operation').click ->
    num1 = parseInt displayValue
    operator = $(@).text()
    displayValue = ""
    setDisplayValue displayValue

  $('#equals').click ->
    num2 = parseInt displayValue
    displayValue = parseCalculation(num1, num2, operator)
    setDisplayValue displayValue
    num1 = displayValue
    operator = ""

  $('#clear').click ->
    displayValue = ""
    num1 = 0
    num2 = 0
    operator = ''
    setDisplayValue displayValue
