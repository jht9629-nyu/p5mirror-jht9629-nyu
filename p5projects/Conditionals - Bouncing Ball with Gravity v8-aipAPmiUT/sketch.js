// https://editor.p5js.org/jht9629-nyu/sketches/aipAPmiUT
// Conditionals - Bouncing Ball with Gravity v8
// array of balls with random colors

let balls = [];

function setup() {
  createCanvas(640, 360);

  let ball1 = {};
  init_ball(ball1, width / 2, height / 2);
  balls.push(ball1);

  let ball2 = {};
  init_ball(ball2, width / 2, height / 2);
  balls.push(ball2);
}

function draw() {
  background(200);
  noStroke();
  for (let ball of balls) {
    draw_ball(ball);
  }
}

function draw_ball(ba) {
  ba.x += ba.vx;
  ba.y += ba.vy;
  ba.vx *= ba.drag;
  ba.vy *= ba.drag;
  if (ba.y < ba.radius || ba.y > height - ba.radius) {
    // reduce the speed each time ball hits floor
    ba.vy *= -ba.bounce;
    ba.y = constrain(ba.y, ba.radius, height - ba.radius);
  }
  if (ba.x < ba.radius || ba.x > width - ba.radius) {
    // reduce the speed each time ball hits wall
    ba.vx *= -ba.bounce;
    ba.x = constrain(ba.x, ba.radius, width - ba.radius);
  }
  fill(ba.color);
  circle(ba.x, ba.y, ba.radius * 2);
}

function mouseDragged() {
  // ball.x = mouseX;
  // ball.y = mouseY;
  // apply velocity based on mouse drag direction and speed
  let dx = mouseX - pmouseX
  let dy = mouseY - pmouseY
  for (let ball of balls) {
    set_velocity_ball(ball, dx, dy);
  }
}

function mousePressed() {
  let ball = {};
  init_ball(ball, mouseX, mouseY);
  balls.push(ball);
}

function init_ball(ba, x, y) {
  // Air resistance
  ba.drag = 0.995;
  // Energy retained on edge bounce
  ba.bounce = 0.88;
  // Begin with random velocity
  ba.vx = random(-4, 4);
  ba.vy = random(-4, 4);
  // position of ball
  ba.x = x;
  ba.y = y;
  ba.radius = 25;
  // random color with alpha
  ba.color = [random(255), random(255), random(255), 100]
}

function set_velocity_ball(ba, vx, vy) {
  ba.vx = vx;
  ba.vy = vy;
}

// https://p5js.org/reference/p5/mouseDragged/
// https://p5js.org/reference/p5/pmouseX/

// https://editor.p5js.org/jht9629-nyu/sketches/dVHK9-Ns7
// Conditionals - Bouncing Ball with Gravity v2
// added friction

// https://editor.p5js.org/codingtrain/sketches/JTIN5dIVB
//
// Bouncing ball with gravity
// The Coding Train / Daniel Shiffman

// https://editor.p5js.org/jht9629-nyu/sketches/BtdFgAST_
// Conditionals - Bouncing Ball with Gravity v3
// Use object literals

// https://editor.p5js.org/jht9629-nyu/sketches/-GzgH4Gnf
// Conditionals - Bouncing Ball with Gravity v4
// added velX bounceX

// https://editor.p5js.org/jht9629-nyu/sketches/250TAeMiE
// Conditionals - Bouncing Ball with Gravity v5
// use drag and bounce from
// https://editor.p5js.org/yh6371/sketches/cl9-Q8POR

// https://editor.p5js.org/jht9629-nyu/sketches/whU0iYX5y
// Conditionals - Bouncing Ball with Gravity v6
// use mouseDragged

// https://editor.p5js.org/jht9629-nyu/sketches/suNS9CAwt
// Conditionals - Bouncing Ball with Gravity v7
// ball funcs
