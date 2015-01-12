var moves = ["shake", "hop", "spin", "grow", "hooray"];

var pickMove = function() {
  return moves[Math.floor(Math.random() * 6)];
}

$(document).ready(function() {
  $("img").click(function(el) {
    var target = $(el.target);
    var move = pickMove();
    target.addClass(move);
    setTimeout(function(){target.removeClass(move)}, 4000);
  });
});
