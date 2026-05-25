// https://editor.p5js.org/jht9629-nyu/sketches/8DQnfxeLs
// matt-parker-oct-16 v3
// by claude

// https://editor.p5js.org/jht9629-nyu/sketches/7rR7pHX_l
// matt-parker-oct-16 v2
// debug with Matt

// https://editor.p5js.org/jht9629-nyu/sketches/RoplKxfBB
// matt-parker-oct-16
// Matt Parker 6:24 PM · Oct 16, 2020
// https://x.com/madparker/status/1317229846511144961
// int x,y,s,o,p,f,c=480;
// void setup(){size(480,480);}
// void draw(){f++;s++;for(x=0;x<c;x++)for(y=0;y<c;y++)set(x,y,color(round(noise((x+f)*.01,y/99f))*255));o+=key=='a'?-2:key=='d'?2:0;p+=key=='w'?-2:key=='s'?2:0;if(red(get(o=(o+c)%c,p=(p+c)%c))>0)s=0;fill(c,0,0);text(s,o,p);}//#p5t

// https://x.com/madparker/status/1317229846511144961
// p5.js port of Matt Parker's sketch_10_16

// use s key to have red text cursor move into view

let s = 0,
  o = 0,
  p = 0,
  f = 0;
const c = 480;

function setup() {
  pixelDensity(1);
  createCanvas(c, c);
  noStroke();
}

function draw() {
  f++;
  s++;

  loadPixels();
  for (let x = 0; x < c; x++) {
    for (let y = 0; y < c; y++) {
      const v = round(noise((x + f) * 0.01, y / 99.0)) * 255;
      const i = (y * c + x) * 4;
      pixels[i] = v;
      pixels[i + 1] = v;
      pixels[i + 2] = v;
      pixels[i + 3] = 255;
    }
  }

  if (keyIsDown(65)) o = (o - 2 + c) % c; // a → left
  if (keyIsDown(68)) o = (o + 2) % c; // d → right
  if (keyIsDown(87)) p = (p - 2 + c) % c; // w → up
  if (keyIsDown(83)) p = (p + 2) % c; // s → down

  if (pixels[(p * c + o) * 4] > 0) s = 0;

  updatePixels();

  fill(255, 0, 0);
  text(s, o, p);
}
