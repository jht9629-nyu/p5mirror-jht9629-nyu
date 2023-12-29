let Path;
let treewidth;
let x = 20,
  y = 100,
  r = 20;
let speed = 1;
let speedy = -0.5;
let cR = 20,
  angle = 0,
  spacing = 20;
let flag = false;

function setup() {
  createCanvas(400, 400);
  good = new forestPath(190, 200, -100, "gold");
  bad = new forestPath(210, 200, 100, "purple");
}
function mousePressed() {
  good.clicked();
  bad.clicked();
}
function draw() {
  background(220);
  //Maze()

  Sun();

  for (i = 1; i < 5; i++) {
    if (random(1) < 0.5) {
      c = "yellow";
    } else {
      c = "orange";
    }
    tree(50 + 20 * i, 100 - 10 * i, c);
    tree(250 + 20 * i, 60 + 10 * i, c);
  }
  good.display();
  bad.display();
}

function tree(treetopx, treetopy, c) {
  treewidth = 60;
  treeheight = 100;
  push();
  x2 = treetopx - treewidth;
  y2 = treetopy + treeheight;
  x3 = treetopx + treewidth;
  y3 = treetopy + treeheight;
  fill(c);
  treetop = triangle(treetopx, treetopy, x2, y2, x3, y3);
  pop();
  push();
  strokeWeight(5);
  fill("black");
  treetrunk = line(treetopx, y3, treetopx, y3 + 60);
  pop();
}

//addeventlisteners are for DOM not pure custom build object

function forestPath(x, y, z, c) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.c = c;
  this.clicked = function () {
    fill(c);
  };

  this.display = function () {
    push();

    noStroke();
    translate(this.x, this.y);
    rotate(this.z);
    //rect(0,0,30,height-treeheight)
    quad(0, 0, 3, 0, 50, height, 0, height);

    //print(dist(mouseX, mouseY,192,200))
    pop();
  };
}

function Sun() {
  push();
  fill("gold");
  //angle += 0.01*speed;
  angle += 0.01;

  basei = PI;

  fn = (basei + angle) * speed;

  if (fn >= 2 * PI || fn < PI) {
    if (flag == false) {
      speed = -speed;
      flag = true;
    }
  }

  console.log(speed + "," + fn + "," + cos(fn));

  let cX = width / 2 + 180 * cos(fn);
  let cY = height / 2 + 180 * sin(fn);
  ellipse(cX, cY, cR * 2);
  pop();
}

function Maze() {
  push();
  //background(0,0,0,noFill);
  if (random(1) < 0.5) {
    strokeWeight(3);
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x + spacing, y, x, y + spacing);
  }

  x += spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  pop();
}
