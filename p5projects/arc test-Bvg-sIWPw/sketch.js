function setup() {
  createCanvas(windowWidth, windowHeight);

  background(200);

  noFill();
  strokeWeight(width / 10);

  let m = width / 10;
  let x = width / 2;
  let y = height / 2;
  let w = width - m;
  // let h = height - m;
  let h = w;

  // bottom right quarter
  stroke('red');
  arc(x, y, w, h, HALF_PI*0, HALF_PI*1);
  
  // bottom left quarter
  stroke('green');
  arc(x, y, w, h, HALF_PI, HALF_PI*2);

  // top half
  stroke('gold');
  arc(x, y, w, h, HALF_PI*2, HALF_PI*4);
}

// arc(x, y, w, h, start, stop, [mode], [detail])
