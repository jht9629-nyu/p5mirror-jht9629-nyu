let x = 185;
function setup() {
  createCanvas(400, 600);
}

function draw() {
  // Percentage RGBA notation.
  background("rgba(60%, 5%, 70%, 0.5)");

  fill(255, 204, 100);
  // circle(200, 335, 195);

  fill(255, 204, 100);
  circle(200, 200, 200);

  fill("#121113");
  circle(150, 200, 25);

  fill("#121113");
  circle(240, 200, 25);

  fill("#FCFAFF");
  circle(150, 200, 23);

  fill("#F9F7FC");
  circle(240, 200, 23);

  fill("#121113");
  circle(145, 200, 10);

  fill("#121113");
  circle(235, 200, 10);

  fill("#E6185D(100%, 0%, 10%)");
  // rect(x, y, w, h)
  rect(x,210, 25, 30, 10);
  // rect(185, 210, 25, 30, 10);
  x = x + 1;

  stroke("rgb(7,1,7)");
  strokeWeight(5);

  line(30, -1000, 100, 1000);
}
