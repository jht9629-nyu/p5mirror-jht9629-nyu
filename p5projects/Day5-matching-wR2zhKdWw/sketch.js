// https://editor.p5js.org/jht9629-nyu/sketches/wR2zhKdWw
// Day5-matching

let s1 = 0;
let s2 = 1;
let s3 = 2;
let m = false;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 2;
  // console.log('w',w)
  textSize(100)
  fill(0)
  text(s1, 10, h);
  // if (s1 == 0) {
  //   rect(10, 100, 100)
  // }
  // else if (s1 == 1) {
  //   circle(100, 100, 100)
  // }
  // else {
  //   line(10,100,200,100)
  //   line(10,200,200,200)
  // }
  text(s2, w, h);
  // if (s2 == 0) {
  //   rect(10, 100, 100)
  // }
  // else if (s2 == 1) {
  //   circle(100, 100, 100)
  // }
  // else {
  //   line(10,100,200,100)
  //   line(10,200,200,200)
  // }

  text(s3, w*2, h);

  line(w,0,w,height)
  line(w+w,0,w+w,height)
  
  if (m) {
    // console.log('Match!');
    textSize(100);
    fill('red')
    text('Match!', 10, 100);
  }
}

function mouseClicked() {
  let w = width / 3;
  if (mouseX < w) {
    s1 = (s1 + 1) % 3
  }
  else if (mouseX < w+w) {
    s2 = (s2 + 1) % 3
  }
  else  {
    s3 = (s3 + 1) % 3
  }
  if (s1 == s2 && s2 == s3) {
    m = true;
    console.log('Match!');
  }
  else {
    m = false;
  }
}