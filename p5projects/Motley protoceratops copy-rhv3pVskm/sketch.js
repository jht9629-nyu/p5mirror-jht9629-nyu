// https://editor.p5js.org/jht9629-nyu/sketches/rhv3pVskm
// CCL 2025 jerry
// https://editor.p5js.org/jal9612/sketches/G6dwwoyHC

let page = 1;
let lastPage = 5;
let img1;
function preload() {
  img1 = loadImage("Screenshot 2025-08-01 at 9.51.32 AM.png");
  img2 = loadImage("DaBronx.webp");
  img3 = loadImage("bcsm.jpeg");
  img4 = loadImage("Computerboi.avif");
  img5 = loadImage ("Screenshot 2025-08-01 at 10.28.56 AM.png");
  img6 = loadImage("Screenshot 2025-08-01 at 10.50.20 AM.png");
  img7 = loadImage("IMG_5923.JPG");
  img8 = loadImage("IMG_7109.jpg");
  img9 = loadImage("p5.png");
  img10 = loadImage("Bruh.jpeg");
  img11 = loadImage("hi.png");
  
}
function setup() {
  createCanvas(960, 600);
  frameRate(10);
  createDiv("Click the mouse to advance to next page");
}

function draw() {
  background(255);
  // drawHeader()
  if (page == 1) {
    drawPage1();
  }
  if (page == 2) {
    drawPage2();
  }
  if (page == 3) {
    drawPage3();
  }
  if (page == 4) {
    drawPage4();
  }
  if (page == 5) {
    drawPage5();
  }
}
function drawPage1() {
  background(255);

  textSize(50);
  fill("black");
  let msg = "Jerry Londa";
  text(msg, 30, 80);
  let msg1 = "From Da Bronx";
  text(msg1, 30, 150);
  let msg2 = "Currently attending BCSM";
  text(msg2, 30, 220);
  let msg3 = "Photo of me using CC 166";
  text(msg3, 30, 290);

  image(img1, 20, 310, 400, 280);
  image(img2, 640, 30, 300, 280);
  image(img3, 450, 310, 500, 280);
  image(img4, 430, 50, 200, 100);
  //(960, 600);
}

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
}
function drawPage2() {
  background(255);

  textSize(50);
  fill("purple");
  let msg = "The learning experience at Tisch ITP";
  text(msg, 30, 80);

  fill("black");
  textSize(40);
  let msg1 = "At Tisch ITP, I learned a lot about coding through";
  text(msg1, 30, 135);

  fill("black");
  textSize(40);
  let msg2 = "p5.js, such as entering code, learning math ";
  text(msg2, 30, 190);

  fill("black");
  textSize(40);
  let msg3 = "functions, how it may interfere with code, as well";
  text(msg3, 30, 245);

  textSize(40);
  fill("black");
  let msg4 = "as using phones to test out codes and creations.";
  text(msg4, 30, 300);

  image(img5, 30, 310, 500, 280);
  image(img6, 600, 310, 300, 280)
  //(960, 600);
}

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
    // confused if 1 or 2
  }
}
function drawPage3() {
  background(255);
  
   textSize(50);
  fill("purple");
  let msg = "Other workshops present at Tisch ITP";
  text(msg, 30, 80);
   fill("black");
  textSize(40);
  let msg1 = "At Tisch ITP, other workshops that were present are";
  text(msg1, 30, 135);

  fill("black");
  textSize(40);
  let msg2 = "making beats, unproductive AI chatbots, looming, ";
  text(msg2, 30, 190);

  fill("black");
  textSize(40);
  let msg3 = "sticker making using our own photos/google images";
  text(msg3, 30, 245);

  textSize(40);
  fill("black");
  let msg4 = "laser cutting keychains, and many more workshops.";
  text(msg4, 30, 300);
  
   image(img7, 40, 310, 400, 280);
   image(img8, 510, 310, 400, 280);
  
}

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
    // confused if 1 or 2
  }
}
  function drawPage4() {
  background(255);

  textSize(50);
  fill("purple");
  let msg = "Projects in Tisch ITP";
  text(msg, 30, 80);

  fill("black");
  textSize(40);
  let msg1 = "At Tisch ITP, throughout these 2 weeks we have";
  text(msg1, 30, 135);

  fill("black");
  textSize(40);
  let msg2 = "been working on numerous sketches and projects. ";
  text(msg2, 30, 190);

  fill("black");
  textSize(40);
  let msg3 = "The project down below was during day 1 to 2 when ";
  text(msg3, 30, 245);

  textSize(40);
  fill("black");
  let msg4 = "we were animating small faces for face bouncing.";
  text(msg4, 30, 300);

  image(img5, 30, 310, 500, 280);
  image(img9, 600, 310, 300, 280)
  //(960, 600);
  }

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
    // confused if 1 or 2
  }
}
function drawPage5() {
  background(255);
  
  textSize(50);
  fill("purple");
  let msg = "What do I want from the program?";
  text(msg, 30, 80);

  fill("black");
  textSize(40);
  let msg1 = "Learn other coding languages (Python, C++ etc.)";
  text(msg1, 30, 135);

  fill("black");
  textSize(40);
  let msg2 = "Animation (Videos and small films)";
  text(msg2, 30, 190);

  fill("black");
  textSize(40);
  let msg3 = "Game designing (Making something fun)";
  text(msg3, 30, 245);

  textSize(40);
  fill("black");
  let msg4 = "Websites (Somewhere that I can add stuff for others)";
  text(msg4, 25, 300);

  image(img10, 30, 310, 500, 280);
  image(img11, 500, 310, 450, 280)
  //(960, 600);
}