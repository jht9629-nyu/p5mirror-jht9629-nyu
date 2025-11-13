// https://editor.p5js.org/jht9629-nyu/sketches/_um4LG0SL
// Conditionals - Bouncing Ball with Gravity v11
// Ball class - wind algorithm - gravity drop

let balls = [];
let useMousePressed = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 80);
  canvas.mousePressed(canvas_mousePressed);
  canvas.mouseReleased(canvas_mouseReleased);
  canvas.touchEnded(canvas_mouseReleased);

  create_ui();

  new Ball(width / 2, height / 2);

  let ball2 = new Ball(width / 2, height / 2);
  ball2.drop();
}

function draw() {
  background(200);
  noStroke();
  for (let ball of balls) {
    ball.draw();
  }
}

function create_ui() {
  createSpan("click to add a ball - shift to paint - drag to apply wind") //
    .style("font-size:28px");
  createButton("clear") //
    .mousePressed(clearAction)
    .style("font-size:28px");
  createButton("drop") //
    .mousePressed(dropAction)
    .style("font-size:28px");
  createButton("stop") //
    .mousePressed(stopAction)
    .style("font-size:28px");
  createButton("random") //
    .mousePressed(randomAction)
    .style("font-size:28px");
}

function randomAction() {
  console.log('Balls randomAction balls.length', balls.length);
  for (let ball of balls) {
    ball.random();
  }
}

function stopAction() {
  for (let ball of balls) {
    ball.stop();
  }
}

function dropAction() {
  for (let ball of balls) {
    ball.drop();
  }
}

function clearAction() {
  balls = [];
}

class Ball {
  //
  constructor(x, y) {
    //
    // initial position
    this.x = x;
    this.y = y;

    // appearance
    this.radius = 25;
    // random color with alpha
    this.color = [random(255), random(255), random(255), 100];

    // x and y velocity. begin at rest
    this.vx = 0;
    this.vy = 0;

    // Air resistance
    this.drag = 0.995;

    // Energy retained on edge bounce
    this.bounce = 0.5;

    // for drop to bottom of canvas behavior
    this.gravityY = 0.1;
    this.isDropping = false;

    // add to list
    balls.push(this);
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    if (this.isDropping) {
      this.vy += this.gravityY;
    }
    if (this.y < this.radius || this.y > height - this.radius) {
      // reduce the speed each time ball hits floor
      // negative to reverse direction
      this.vy *= -this.bounce;
      this.y = constrain(this.y, this.radius, height - this.radius);
    }
    if (this.x < this.radius || this.x > width - this.radius) {
      // reduce the speed each time ball hits wall
      this.vx *= -this.bounce;
      this.x = constrain(this.x, this.radius, width - this.radius);
    }
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  stop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = false;
  }

  // Fall to bottom of canvas using gravityY
  drop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = true;
  }

  add_velocity(dx, dy) {
    this.set_velocity(this.vx + dx, this.vy + dy);
  }

  set_velocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }
  
  random() {
    this.x = random(width);
    this.y = random(height);
    this.stop();
  }
}

function mouseDragged() {
  // console.log('mouseDragged');

  // prevent canvas_mouseReleased actions
  useMousePressed = false;

  // apply velocity based on mouse drag direction and speed
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;

  // wind algorithm
  // from https://editor.p5js.org/yh6371/sketches/cl9-Q8POR
  let windScale = 0.06;
  // only balls within this range are affected
  let range = width * 0.2;
  // for (const d of dots) {
  //   const dd = dist(mouseX, mouseY, d.x, d.y);
  //   if (dd < radius) {
  //     const falloff = (radius - dd) / radius;
  //     d.applyForce(dx * windScale * falloff, dy * windScale * falloff);
  //   }
  // }
  for (let ball of balls) {
    let dd = dist(mouseX, mouseY, ball.x, ball.y);
    if (dd < range) {
      let falloff = (range - dd) / range;
      let ndx = dx * windScale * falloff;
      let ndy = dy * windScale * falloff;
      ball.add_velocity(ndx, ndy);
    }
  }

  if (keyIsDown(SHIFT)) {
    new Ball(mouseX, mouseY);
  }
  
  let inX = mouseX >= 0 && mouseX < width;
  let inY = mouseY >= 0 && mouseY < height;
  let onCanvas = inX && inY;
  // required to prevent touch drag moving canvas on mobile
  return !onCanvas;
}

function canvas_mousePressed() {
  // console.log('mousePressed');
  useMousePressed = true;
}

function canvas_mouseReleased() {
  // console.log('mouseReleased');
  console.log('canvas_mouseReleased balls.length', balls.length);
  if (!useMousePressed) return;
  new Ball(mouseX, mouseY);
}

// https://p5js.org/reference/p5/mouseReleased/
// https://p5js.org/reference/p5/mouseDragged/
// https://p5js.org/reference/p5/pmouseX/
// https://p5js.org/reference/p5/keyCode/
// https://p5js.org/reference/p5/keyIsDown/

// https://editor.p5js.org/jht9629-nyu/sketches/dVHK9-Ns7
// Conditionals - Bouncing Ball with Gravity v2
// added friction

// https://editor.p5js.org/codingtrain/sketches/JTIN5dIVB
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

// https://editor.p5js.org/jht9629-nyu/sketches/0nSrecmFq
// Conditionals - Bouncing Ball with Gravity v10
// Ball class - wind algorithm
