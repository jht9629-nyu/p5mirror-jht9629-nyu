let squares = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  for (let square of squares) {
    move(square);
    display(square);
  }
  // for (let i = 0; i < squares.length; i++) {
  //   move(squares[i]);
  //   display(squares[i]);
  // }
}

function mousePressed() {
  let square = {
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    xspeed: random(1, 10),
    yspeed: random(1, 10)
  };
  squares.push(square); 
}

function keyPressed() {
  if (key === ' ') {
    squares.pop(); 
  }
}

function move(square) {
  square.x += square.xspeed;
  square.y += square.yspeed;

  if (square.x > width || square.x < 0 ) {
    square.xspeed *= -1;
  }
  if (square.y > height || square.y < 0 ) {
    square.yspeed *= -1;
  }
}

function display(square) {
  fill(150, 150, 150);
  noStroke();
  rect(square.x, square.y, square.size, square.size);
}