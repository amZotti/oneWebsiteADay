$(document).ready(function(){ 
  var today = $("#" + new Date().getDay());
  today.attr("id", "today");
  var day = today.html();
  $("#center").html("BAM! " + day);
  today.html("")
});
