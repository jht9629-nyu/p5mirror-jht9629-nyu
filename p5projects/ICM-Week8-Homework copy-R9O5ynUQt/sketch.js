// https://editor.p5js.org/jht9629-nyu/sketches/R9O5ynUQt

//ICM-Week8-Homework
//https://editor.p5js.org/rq2032/sketches/H4xmHLwGq

let img;

function preload() {
  img = loadImage("d.jpg");
}

function setup() {
  canvas=createCanvas(img.width, img.height);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);

  img.loadPixels();

  for (let x = 0; x < img.width; x += 8) {
    for (let y = 0; y < img.height; y += 8) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      let c = color(r, g, b, a);

      push();
      translate(x, y);
      rotate(radians(random(360)));
      noFill();
      // strokeWeight(random(3));
      strokeWeight(10);
      stroke(c);

      // ChatGPT help me with the curve
      point(0, 0);
      // curve(
      //   0,
      //   0,
      //   sin(x) * random(60),
      //   cos(x) * sin(x) * random(90),
      //   random(10),
      //   random(80),
      //   cos(y) * sin(y) * random(140),
      //   cos(x) * sin(x) * 50
      // );
      pop();
    }
  }
}
