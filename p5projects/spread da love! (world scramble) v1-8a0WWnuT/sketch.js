// https://editor.p5js.org/jht9629-nyu/sketches/-8a0WWnuT
// spread da love! (world scramble) v1
// https://editor.p5js.org/TatianaDiomi/sketches/MmOn4OQl0
// spread da love! (world scramble) v0

let video;
let handPose;
let hands = [];
let font;
let size = 25;
let magnets = [];
let num = 50;

function preload() {
  font = loadFont("tropiland.ttf");
  handPose = ml5.handPose({ flipped: true });
}

function setup() {
  createCanvas(900, 700);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  handPose.detectStart(video, gotHands);

  rectMode(CENTER);
  for (let i = 0; i < num; i++) {
    magnets[i] = new Magnet();
  }
}

function draw() {
  background(252, 63, 148);
  
  text("for u or for someone else!", 160, 10, 300);
  text("by: tatiana diomi", 800, 10, 200);
  text("words", 500, 70, 400);
  text("of", 550, 70, 300);
  text("affirmations", 550, 70, 200);
  
  

  text("word bank: u, are, my, love, everything, best, is, always, who, make, thank, i, urself, the, hey, hi, only , person, need, wanted, all, ever, u, in, world", 250, 600, 440);
  text("hint: raise your hand, use your index finger and thumb to grab and let go to release the word, and have fun putting the words together!", 750, 600, 400);
  stroke("white")
  textSize(20);


  image(video, 95, 105);
  if (hands.length > 0) {
    let index = hands[0].keypoints[8];
    let thumb = hands[0].keypoints[4];

    noFill();
    stroke(255, 161, 202);
    text("index", index.x, index.y);
    text("thumb", thumb.x, thumb.y);

    for (let i = 0; i < num; i++) {
      magnets[i].touch(thumb.x, thumb.y, index.x, index.y);
    }
  }

  for (let i = 0; i < num; i++) {
    magnets[i].display();
  }
}

function gotHands(results) {
  hands = results;
}

function mousePressed() {
  saveFrames("wordscramble", "png", 1, 10);
}