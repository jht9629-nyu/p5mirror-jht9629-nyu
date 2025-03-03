// https://editor.p5js.org/jht9629-nyu/sketches/2u6e-KY8S
// Marbling Color - animate ink

let drops = [];

let r = 1;
let a = 0;

let palette;
let bk;

let newDrop = true;
let currentColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  palette = [
    color(11, 106, 136),
    color(45, 197, 244),
    color(112, 50, 126),
    color(146, 83, 161),
    color(164, 41, 99),
    color(236, 1, 90),
    color(240, 99, 164),
    color(241, 97, 100),
    color(248, 158, 79),
    //
  ];
  bk = color(252, 238, 33); //random(palette);
  currentColor = random(palette);
}

function tineLine(v, x, y, z, c) {
  for (let drop of drops) {
    drop.tine(v, x, y, z, c);
  }
}

function addInk(x, y, r, col) {
  let drop = new Drop(x, y, r, col);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function mouseReleased() {
  newDrop = true;
}

let val = 4;
let counter = 1;

function draw() {
  // if (mouseIsPressed) {
  //   let v1 = createVector(pmouseX, pmouseY);
  //   let v2 = createVector(mouseX, mouseY);
  //   v2.sub(v1);
  //   if (v2.mag() > 0.1) {
  //     v2.normalize();
  //     tineLine(v2, mouseX, mouseY, 2, 16);
  //   }
  // }

  if (mouseIsPressed) {
    if (newDrop) {
      currentColor = palette[counter % palette.length];
      newDrop = false;
      counter++;
    }
    addInk(mouseX, mouseY, 12, currentColor);
  }

  background(bk);
  for (let drop of drops) {
    drop.show();
  }
}

// https://editor.p5js.org/JimmyXwtx/sketches/NO_kg85ZT
// Marbling Color - animate ink
