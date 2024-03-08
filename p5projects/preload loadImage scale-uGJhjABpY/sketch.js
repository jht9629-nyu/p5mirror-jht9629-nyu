// https://editor.p5js.org/jht9629-nyu/sketches/uGJhjABpY
// preload loadImage scale
// create a canvas to fit a scaled up image

// keep sketch images small to stay below Max: 250 MB
// eg. https://editor.p5js.org/jht9629-nyu/assets

// scope: global variables
let img;
let r = 3; // multiple to scale image up

function preload() {
  img = loadImage("jht-w128.png");
  // image is not loaded yet so dimension not available
  // console.log('img.width', img.width, 'img.height', img.height)
}

function setup() {
  // scope: local variables
  let w = img.width;
  let h = img.height;
  console.log("w", w, "h", h);
  // Canvas is a multiple of the image dimensions
  createCanvas(w * r, h * r);
}

function draw() {
  background(220);
  // Small image is scaled up to size of canvas
  // image(img, 0, 0); // draw image with out scaling
  image(img, 0, 0, width, height); // scale image to canvas dim
}

// Source used to resize image:
// https://ezgif.com/

// JHT image source:
// http://www.johnhenrythompson.com/0-refections-on-learning

// google reference to JHT image, maybe fragile
// https://f3287f58-a-e3ac3471-s-sites.googlegroups.com/a/johnhenrythompson.com/jht/the-art-of-learning/reflections/colorized-jht.jpg?attachauth=ANoY7cq3sCnwbx3rw_vO7us7hPHqrFIVq08VGc7RonFXLAXUPkHm1fOeIjRz8EaAcD1xDb6t7cmfbW9jFlVS6iUnrCHwzVkka5VpVwW08Orz4Vz1M1Bc9jBrA6OMeciJwjXSQMK1Z11CpW4DELqS-ocL5mYKfsskY-I3PvyxUcrrY7VAfvlZyXKVMsQYUySpyvMtyOYGp6Vvil4XASu2pE3u0OMfVDAGwPvkP0CGN8eW3ZH9ngsh9CZu00fVZi6WFL3iF8CSBQDx&attredirects=0

