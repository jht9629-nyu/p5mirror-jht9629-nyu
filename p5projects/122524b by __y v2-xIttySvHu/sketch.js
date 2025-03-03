// https://editor.p5js.org/jht9629-nyu/sketches/xIttySvHu
// 122524b by __y v2

let squares = [];
let nsquaresLimit = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(15, 42, 42)
  background("#0C5B6E");
}

function draw() {
  if (random() < 0.5) {
    squares.push(new GradientSquare());
  }

  // Draw all squares
  squares.forEach((square) => square.show());
  filter(BLUR, 9);
  // filter(POSTERIZE, 3);
  // Optional: Limit the number of squares for performance
  if (squares.length > nsquaresLimit) {
    // background(15, 42, 42)
    background("#0C5B6E");
    squares = [];
  }
}

const COLORS = [
  "#B8B3E9", //'#FF6B6B', // coral red
  "#4ECDC4", // turquoise
  "#45B7D1", // sky blue
  "#96CEB4", // sage green
  "#FFEEAD", // cream
  // '#D4A5A5'  // dusty rose
];

class GradientSquare {
  constructor() {
    this.size = random([30, 30, 60, 60, 90, 120]);
    // Constrain x and y positions to keep squares fully within canvas
    this.x = random(this.size, width - this.size * 2);
    this.y = random(this.size, height - this.size * 2);
    // this.color1 = color(random(COLORS));
    // this.color2 = color(random(COLORS));
    // let firstColor = random(COLORS);
    // let secondColor = random(
    //   COLORS.filter(
    //     (c) =>
    //       !(
    //         c[0] === firstColor[0] &&
    //         c[1] === firstColor[1] &&
    //         c[2] === firstColor[2]
    //       )
    //   )
    // );
    // this.color1 = color(firstColor);
    // this.color2 = color(secondColor);
    let ncolors = shuffle(COLORS);
    this.color1 = color(ncolors[0]);
    this.color2 = color(ncolors[1]);
  }

  show() {
    // Create gradient
    for (let i = 0; i < this.size; i++) {
      let inter = map(i, 0, this.size, 0, 1);
      let c = lerpColor(this.color1, this.color2, inter);
      noStroke();
      fill(c);
      rect(this.x, this.y + i, this.size, 1);
    }
  }
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas("myCanvas", "png");
  }
  return false;
}

// https://openprocessing.org/sketch/2496507/
// 122524b by __y

// https://editor.p5js.org/jht9629-nyu/sketches/CSZU8Pe9K
// 122524b by __y
