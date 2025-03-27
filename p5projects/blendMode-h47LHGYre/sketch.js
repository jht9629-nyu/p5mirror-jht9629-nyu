
// https://claude.ai/chat/7699ad51-79bb-454b-ab44-dfc9b1505dfa
// In p5js, merge two images
// blendMode variable rename
// blendModes not strings

let img1, img2;
let ablendMode; // Default blend mode

function preload() {
  // Replace these with your own image paths or use placeholders
  img1 = loadImage('https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U');
  img2 = loadImage('https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U');
}

function setup() {
  createCanvas(600, 400);
  ablendMode = BLEND; // Default blend mode
  // Available blend modes in p5.js
  let blendModes = [
    BLEND,     // Default blending
    DARKEST,   // Selects darkest color component
    LIGHTEST,  // Selects lightest color component
    DIFFERENCE,// Subtractive blend mode
    MULTIPLY,  // Multiplies pixel colors
    SCREEN,    // Opposite of multiply
    OVERLAY,   // Combination of multiply and screen
    HARD_LIGHT,// Similar to overlay but more intense
    SOFT_LIGHT // Softer version of hard light
  ];

  // Create a dropdown to select blend mode
  let modeSelect = createSelect();
  blendModes.forEach(mode => {
    modeSelect.option(mode);
  });
  modeSelect.changed(() => {
    ablendMode = modeSelect.value();
  });
}

function draw() {
  background(220);
  
  // Draw first image
  image(img1, 0, 0, width/2, height/2);
  
  // Blend the second image using selected mode
  blendMode(ablendMode);
  image(img2, width/2, height/2, width/2, height/2);
  
  // Reset blend mode
  blendMode(BLEND);
  
  // Add text to show current blend mode
  fill(0);
  textSize(16);
  text(`Current Blend Mode: ${ablendMode}`, 10, height - 20);
}