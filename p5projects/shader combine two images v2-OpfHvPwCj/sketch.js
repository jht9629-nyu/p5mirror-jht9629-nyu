// https://editor.p5js.org/jht9629-nyu/sketches/OpfHvPwCj
// shader combine two images v2

// claude:
// the output is upside down

// claude:
// p5js shader to combine non-black pixels of two images

// https://placehold.co/
// https://placehold.co/600x400/000000/FFF
// https://placehold.co/600x400/orange/white
// https://placehold.co/600x400/000000/FFFFFF/png

// P5.js sketch with shader to combine non-black pixels of two images
let myShader;
let img1, img2;

function preload() {
  // Create shader from the vertex and fragment shaders
  myShader = createShader(vertexShader, fragmentShader);
  
  // Load your images here
  img2 = loadImage('https://placehold.co/600x400/000000/FFFFFF/png');
  img1 = loadImage('https://placehold.co/600x400/FFFFFF/000000/png');
}

function setup() {
  createCanvas(600, 400, WEBGL);
  noStroke();
}

function draw() {
  // Use our shader
  shader(myShader);
  
  // Pass the textures to the shader
  myShader.setUniform('texture1', img1);
  myShader.setUniform('texture2', img2);
  
  // Draw a rectangle that covers the canvas
  rect(0, 0, width, height);
}

// Vertex shader - passes texture coordinates with y-flip
const vertexShader = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  // Flip the Y coordinate to prevent the image from being upside down
  vTexCoord = vec2(aTexCoord.x, 1.0 - aTexCoord.y);
  
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
`;

// Fragment shader - combines non-black pixels from both textures
const fragmentShader = `
precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main() {
  // Get the pixel colors from both textures
  vec4 color1 = texture2D(texture1, vTexCoord);
  vec4 color2 = texture2D(texture2, vTexCoord);
  
  // Check if the pixel is black (or very close to black)
  // The threshold can be adjusted as needed
  float blackThreshold = 0.05;
  bool isBlack1 = length(color1.rgb) < blackThreshold;
  bool isBlack2 = length(color2.rgb) < blackThreshold;
  
  // Combine the non-black pixels
  // If both pixels are non-black, blend them
  vec4 result;
  
  if (!isBlack1 && !isBlack2) {
    // Blend the two colors if both are non-black
    // You can adjust the blending method as needed
    result = mix(color1, color2, 0.5);
  } else if (!isBlack1) {
    // Use the first texture's color if it's non-black
    result = color1;
  } else if (!isBlack2) {
    // Use the second texture's color if it's non-black
    result = color2;
  } else {
    // Both are black, so output black
    result = vec4(0.0, 0.0, 0.0, 1.0);
  }
  
  gl_FragColor = result;
}
`;


// https://editor.p5js.org/jht9629-nyu/sketches/E9McGkj4z
// shader combine two images v1
// image is upside down

