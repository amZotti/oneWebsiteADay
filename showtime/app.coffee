endpointURL = (requestType) ->
  "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/#{requestType}.json?apikey=pgdtp25vavmj5fdbu2ynamxc"

@displayMovies = (response) ->
  $("#movies").empty()
  $.each response.movies, (i, movie) ->
    $("#movies").append movieTemplate movie.links.alternate, movie.posters.detailed

movieTemplate = (a, src) ->
  "<a href='#{a}'><img class='movie' src='#{src}'/></a>"

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
