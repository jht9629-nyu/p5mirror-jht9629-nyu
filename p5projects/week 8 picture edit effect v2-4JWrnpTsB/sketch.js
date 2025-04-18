// https://editor.p5js.org/jht9629-nyu/sketches/4JWrnpTsB
// week 8 picture edit effect v2
// https://editor.p5js.org/sairamved/sketches/kHR1qrQC5
// week 8 picture edit effect v2

//video capture function generate by Claude
let video;
let capturedFrames = []; // save capture frame
let isVideoRunning = true;
let lastFrame; // save frame, current useless
//----- Matter.js -----
let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine, world;
let ball, ground, ceiling;
//-----
let firstOpen = false;
let ballArray = [];
let scaleFactor = 5;
let ballSize = 20; //control the radius of generate circlr
let maxBalls = 600; //max balls that can appear on screen

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  //low res
  video.size(width / scaleFactor, height / scaleFactor);
  // video.size(width, height);
  // video.hide();
  MatterWorldSetup();
}

function draw() {
  background(0, 0, 0, 50);
  noStroke();
  // stroke('black')
  // strokeWeight(0.5);
  Engine.update(engine); //update engine
  VideoOpen();
  drawelements();
  tint(20, 250, 255);
  //mouseAddBalls();
  // need fix
  //gradientEdit();
}

function VideoOpen() {
  if (
    firstOpen &&
    mouseX > 10 &&
    mouseX < windowWidth - 10 &&
    mouseY < height - 10
  ) {
    mouseAddBalls();
  }
  if (isVideoRunning) {
    //  image(video, 0, 0, width, height);
  } else if (capturedFrames.length > 0) {
    //show saved frame
    //image(capturedFrames[capturedFrames.length - 1], 0, 0, width, height);
  }
}
function mousePressed() {
  isVideoRunning = !isVideoRunning;
  firstOpen = true;

  let frame = video.get(); // get current video moment
  capturedFrames.push(frame); // save current pic in array
}
function mouseAddBalls() {
  let ball = Bodies.circle(mouseX, mouseY, ballSize / 2, { restitution: 0.8 });
  World.add(world, ball);
  ballArray.push(ball);
  if (ballArray.length > maxBalls) {
    //improving performance by removing old bodies
    ballArray.splice(1, 1);
    World.remove(world, ballArray[0]);
    World.remove(world, ballArray[1]);
    World.remove(world, ballArray[2]);
  }
}
function keyPressed() {
  if (key === " ") {
    // save screen image
    let currentFrame = get();
    currentFrame.save("YourAmazingWork!!.png");
  }
}
function creatBoundary() {
  // creat ground and walls
  ground = Bodies.rectangle(width / 2, height, width, 50, {
    isStatic: true, // solid
  });
  wallLeft = Bodies.rectangle(0, height / 2, 50, height, {
    isStatic: true, // solid
  });
  wallRight = Bodies.rectangle(windowWidth, height / 2, 50, height, {
    isStatic: true, // solid
  });
  ceiling = Bodies.rectangle(width / 2, 0, width, 50, {
    isStatic: true, // solid
  });
}
function drawelements() {
  //Thanks for Claude!
  //draw mouse added elements
  for (let i = 0; i < ballArray.length; i++) {
    let pos = ballArray[i].position;
    if (capturedFrames.length > 0) {
      let lastCapturedFrame = capturedFrames[capturedFrames.length - 1];
      let c = lastCapturedFrame.get(pos.x / scaleFactor, pos.y / scaleFactor);
      fill(c[0], c[1], c[2]);
    } else {
      fill(0);
    }
    square(pos.x, pos.y, ballSize);
  }

  rectMode(CENTER);
}
function MatterWorldSetup() {
  //https://brm.io/matter-js/docs/classes/Bodies.html#method_fromVertices
  // generated by ChatGPT 4O
  //The initial position of elements
  // create physical engine and world
  engine = Engine.create();
  world = engine.world;

  engine.gravity.y = 1;
  creatBoundary();

  // input objects into physicals world
  World.add(world, [ground, ceiling, wallLeft, wallRight]);
}
