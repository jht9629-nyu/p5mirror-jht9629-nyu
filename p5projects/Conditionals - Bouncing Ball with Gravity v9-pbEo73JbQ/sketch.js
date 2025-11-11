// https://editor.p5js.org/jht9629-nyu/sketches/pbEo73JbQ
// Conditionals - Bouncing Ball with Gravity v9
// use wind algorithm from yh6371
/*
  if (tool === "wind") {
    // Push nearby dots along the mouse delta, with distance falloff
    const dx = mouseX - pmouseX;
    const dy = mouseY - pmouseY;
    const windScale = 0.06,
      radius = 120;
    for (const d of dots) {
      const dd = dist(mouseX, mouseY, d.x, d.y);
      if (dd < radius) {
        const falloff = (radius - dd) / radius;
        d.applyForce(dx * windScale * falloff, dy * windScale * falloff);
      }
    }
  } else if (tool === "erase") {
*/
let useMousePressed = false;
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  // console.log('mouseDragged');
  useMousePressed = false;
  // ball.x = mouseX;
  // ball.y = mouseY;
  // apply velocity based on mouse drag direction and speed
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;

  let windScale = 0.06;
  let radius = 120;
  // for (const d of dots) {
  //   const dd = dist(mouseX, mouseY, d.x, d.y);
  //   if (dd < radius) {
  //     const falloff = (radius - dd) / radius;
  //     d.applyForce(dx * windScale * falloff, dy * windScale * falloff);
  //   }
  // }
  for (let ball of balls) {
    let dd = dist(mouseX, mouseY, ball.x, ball.y);
    if (dd < radius) {
      let falloff = (radius - dd) / radius;
      dx = dx * windScale * falloff;
      dy = dy * windScale * falloff;
      add_velocity_ball(ball, dx, dy);
    }
  }
}

function mousePressed() {
  // console.log('mousePressed');
  useMousePressed = true;
}

function mouseReleased() {
  // console.log('mouseReleased');
  if (! useMousePressed) return;
  let ball = {};
  init_ball(ball, mouseX, mouseY);
  balls.push(ball);
}

// https://p5js.org/reference/p5/mouseReleased/

function init_ball(ba, x, y) {
  // Air resistance
  ba.drag = 0.995;
  // Energy retained on edge bounce
  ba.bounce = 0.88;
  
  // Begin with random velocity
  // ba.vx = random(-4, 4);
  // ba.vy = random(-4, 4);
  
  // Begin at rest
  ba.vx = 0;
  ba.vy = 0;
  
  // position of ball
  ba.x = x;
  ba.y = y;
  ba.radius = 25;
  // random color with alpha
  ba.color = [random(255), random(255), random(255), 100];
}

function add_velocity_ball(ba, dx, dy) {
  set_velocity_ball(ba, ba.vx + dx, ba.vy + dy)
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

// https://editor.p5js.org/jht9629-nyu/sketches/aipAPmiUT
// Conditionals - Bouncing Ball with Gravity v8
// array of balls with random colors
