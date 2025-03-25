// https://editor.p5js.org/jht9629-nyu/sketches/1Qtz0w1Lf
// Handtrack with shadertoy v0

// a shader variable
let theShader;
let cam;

// handtrack variables
let lastX = 0;
let lastY = 0;


function preload(){
  // load the shader
  theShader = loadShader('uniform.vert', 'uniform.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
    //initialize handtrack coords
  xCord = width/2;
  yCord = height/2;
  
  //original cam variables
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  
  cam.hide();
  
}

function draw() {
  
  //handtrack coords
   if(xCord != null && yCord != null){
     //insert shader x,y variables here as xCord, yCord
         lastX = xCord;
    lastY = yCord;
   } else {
     lastX = lastX;
     lastY = lastY;
   }
  
  // shader() sets the active shader with our shader
  shader(theShader);

  // here we're using setUniform() to send our uniform values to the shader
  // set uniform is smart enough to figure out what kind of variable we are sending it,
  // so there's no need to cast (unlike processing)
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [xCord, yCord]);
  
  theShader.setUniform('tex0', cam);

  // rect gives us some geometry on the screen
  rect(0,0,width,height);
  

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// https://editor.p5js.org/glitchcowboi/sketches/3RZq1XgYL
// Handtrack with shadertoy copy by glitchcowboi

/*

Code from 'Handtrack with Shadertoy copy' from Jaesar
https://editor.p5js.org/Jaesar/sketches/nnQffilPS

*/

//Based on "Webcam psychadelic" by tom.smith:
// https://editor.p5js.org/tom.smith/sketches/OVLB1RHL5


// in this example we will send a value from our p5 sketch to the shader
// these values are called "uniform" variables
// we will use p5's setUniform function to make this happen
// https://p5js.org/reference/#/p5.Shader/setUniform

