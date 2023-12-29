let s1 = 0;
let s2 = 0;
let s3 = 0;
let m = false;
let w ;
let h ;
let emojis = ['🐵', '🐮','🐹'];

function setup() {
  createCanvas(400, 300);
  
  w = width / 3;
  h = height / 2;

  // no repeats! DANGER of infinite loop
  // Save before using while-loop
  while (s1 == s2 || s2 == s3 || s1 == s3) {
    s1 = random([0,1,2])
    s2 = random([0,1,2])
    s3 = random([0,1,2])
  }
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 2;
  // console.log('w',w)
  textSize(100)
  fill(0)
  draw_slot1();

  draw_slot2();
  
  draw_slot3();
  
  line(w,0,w,height)
  line(w+w,0,w+w,height)
  
  if (m) {
    // console.log('Match!');
    textSize(100);
    fill('red')
    text('Match!', 10, 100);
  }
}

function draw_slot1() {
  // text(s1, 10, h);
  // if (s1 == 0) {
  //   text('🐵', 10, h)
  // }
  // else if (s1 == 1) {
  //   text('🐮', 10, h)
  // }
  // else {
  //   text('🐹', 10, h)
  // }
  text(emojis[s1], 10, h);
}

function draw_slot2() {
  // text(s2, w, h);
  text(emojis[s2], w, h);
}

function draw_slot3() {
  // text(s3, w*2, h);
  text(emojis[s3], w*2, h);
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