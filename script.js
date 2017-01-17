TinyTurtle.apply(window);
var sides = prompt("Please type the number of sides you would like.");
var sideint = Number(sides);
function drawAShape(length) {
  for (var i = 0; i < sideint; i++) {
    forward(length);
    var angle = 360/sideint;
    right(angle);
  }
}
drawAShape(20);
stamp();