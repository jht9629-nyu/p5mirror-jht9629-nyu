// https://editor.p5js.org/jht9629-nyu/sketches/AnDswZ6eY
// 1.2 draw_shapes_ui

function setup() {
  console.log('in setup'); 
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    console.log('calling rect');
    // rect(x,y,width,height)
    rect(100, 0, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    console.log('calling circle');
    // circle(x,y,diameter)
    circle(200, 100, 200)
  });
  createButton('Shapes').mousePressed(function() {
    console.log('calling draw_shapes');
    draw_shapes();
  });
  create_ui();
}

function draw() {
  update_ui();
}

function draw_shapes() {
  // fill(red, green, blue, alpha)
  fill(255, 0, 0, 20); // Red, alpha 20
  rect(0, 100, 200, 200);
  // fill(red, green, blue, alpha)
  fill(255, 255, 0, 20); // Yellow, alpha 20
  circle(200, 200, 200)
  // fill(red, green, blue, alpha)
  fill(0, 255, 0, 20); // Green, alpha 20
  rect(200, 100, 200, 200);
}

function create_ui() {
  createElement('br');
  createSpan().id('id_mouseX');
  createSpan().id('id_mouseY');
  createSpan().id('id_rgba');
}

function update_ui() {
  select('#id_mouseX').html('[mouseX='+mouseX+'] ')
  select('#id_mouseY').html('[mouseY='+mouseY+'] ')
  select('#id_rgba').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

console.log('Starting - pre setup');

// https://editor.p5js.org/jht1493/sketches/DGQoBYV9x
// 1.2 draw_shapes_ui
