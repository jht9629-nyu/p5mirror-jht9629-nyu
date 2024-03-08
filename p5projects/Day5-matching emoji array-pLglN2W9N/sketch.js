let s1 = 0;
let s2 = 0;
let s3 = 0;
let m = false;
let w ;
let h ;
let emojis = ['🐵', '🐮','🐹'];

function setup() {
  createCanvas(390, 500);
  createDiv('v2 Day5-matching emoji array');
  
  w = width / 3;
  h = height / 2;

  // no repeats! DANGER of infinite loop
  // Save before using while-loop
  while (s1 == s2 || s2 == s3 || s1 == s3) {
    s1 = random(emojis)
    s2 = random(emojis)
    s3 = random(emojis)
  }
}

function draw() {
  background(220);
  // console.log('w',w)
  textSize(100)
  fill(0)
  draw_slot1();

  draw_slot2();
  
  draw_slot3();
  
  line(w,0,w,height)
  line(w+w,0,w+w,height)
  
  check_accel();

  if (m) {
    // console.log('Match!');
    textSize(100);
    fill('red')
    text('Match!', 10, 100);
  }
  
}

function check_accel() {
  // console.log('rotationX', rotationX)
  if (rotationX < -10 || rotationX > 10) {
    s1 = random(emojis)
    s2 = random(emojis)
    s3 = random(emojis)
  }
  // cheat: touch in top left corner!
  // if (mouseX < 100 && mouseY < 100) {
  //   s3 = s1;
  //   s2 = s1;
  // }
  
  if (s1 == s2 && s2 == s3) {
    m = true;
    console.log('Match!');
  }
  else {
    m = false;
  }
}

function draw_slot1() {
  text(s1, 10, h);
}

function draw_slot2() {
  // text(s2, w, h);
  text(s2, w, h);
}

function draw_slot3() {
  // text(s3, w*2, h);
  text(s3, w*2, h);
}

function mouseClicked() {
  let w = width / 3;
  if (mouseX < w) {
    // s1 = (s1 + 1) % 3
    s1 = random(emojis)
  }
  else if (mouseX < w+w) {
    s2 = random(emojis)
  }
  else  {
    s3 = random(emojis)
  }
  if (s1 == s2 && s2 == s3) {
    m = true;
    console.log('Match!');
  }
  else {
    m = false;
  }
}