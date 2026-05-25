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

let x = 0,
  y = 0,
  s = 0,
  o = 0,
  p = 0,
  f = 0;
let c = 480;
function setup() {
  pixelDensity(1);
  createCanvas(480, 480);
}
function draw() {
  f++;
  s++;
  for (x = 0; x < c; x++) {
    for (y = 0; y < c; y++) {
      let nc = round(noise((x + f) * 0.01, y / 99));
      set(x, y, color(nc * 255));
    }
  }
  o += key == "a" ? -2 : key == "d" ? 2 : 0;
  p += key == "w" ? -2 : key == "s" ? 2 : 0;
  let nc = get((o = (o + c) % c), (p = (p + c) % c))[0];
  // let nc = red(get((o = (o + c) % c), (p = (p + c) % c)))
  // console.log('nc',nc);
  // updatePixels();
  if (nc > 0) s = 0;
  updatePixels();
  fill(255, 0, 0);
  // text(s, o, p);
  text(s, o+0, p+10);
}
