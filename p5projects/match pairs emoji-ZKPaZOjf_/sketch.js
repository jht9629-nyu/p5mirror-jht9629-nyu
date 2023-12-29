// https://editor.p5js.org/jht9629-nyu/sketches/ZKPaZOjf_
// match pairs emoji

let s = ['A', 'B', 'C']
let s1 = s[0];
let s2 = s[1];
let s3 = s[2];
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
  text(s2, w, h);
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
    s1 = random(s)
  }
  else if (mouseX < w+w) {
    s2 = random(s)
  }
  else  {
    s3 = random(s)
  }
  if (s1 == s2 && s2 == s3) {
    m = true;
    console.log('Match!');
  }
  else {
    m = false;
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/wR2zhKdWw
// Day5-matching
