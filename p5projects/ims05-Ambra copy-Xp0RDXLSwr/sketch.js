let capture;
let mirrorButton;
let mirror = true;
let scale_factor = 0.5

function setup() {
  background(255);
  
  createCanvas(640 * scale_factor, 480 * scale_factor);
  capture = createCapture(VIDEO);
  capture.size(640 * scale_factor, 480 * scale_factor);
  capture.hide();
  
  mirrorButton = createButton('Toggle Mirror');
  mirrorButton.position(10, 10);
  mirrorButton.mousePressed(toggleMirror);
}

function draw() {
  if (mirror) {
    translate(width, 0);
    scale(-1, 1);
  }
  
  image(capture, 0, 0, width, height);
  capture.loadPixels();
  
  
  let emojis = ['❤️','🧡','💛','💚', '💙','💜','🖤','🤍','🤎','🌈'];
  
//   function mapColorToEmoji(r, g, b) {
    
//   }
  
  // let emojis = convertToEmoji(capture.pixels, charValuePairs, range, isInverted, isColored);
  
  let faceData = getFaceData(); 
  
  if (faceData) {
    let pixels = capture.get(faceData.x, faceData.y, faceData.width, faceData.height);
    pixels.loadPixels();
    
      textSize(10);

    for (let y = 0; y < pixels.height; y++) {
      for (let x = 0; x < pixels.width; x++) {
        let index = (x + y * pixels.width) * 4;
        let r = pixels.pixels[index];
        let g = pixels.pixels[index + 1];
        let b = pixels.pixels[index + 2];
        let brightnessValue = (r + g + b) / 3;
        let emojiIndex = floor(map(brightnessValue, 0, 255, 0, emojis.length));
        emojiIndex = constrain(emojiIndex, 0, emojis.length - 1);
        let emoji = emojis[emojiIndex];
        text(emoji, faceData.x + x * 10, faceData.y + y * 10);
      }
    }
  }
}


function getFaceData() {
  
  return {
    x: 0,
    y: 0,
    width: 640,
    height: 480,
  };
}

function toggleMirror() {
  mirror = !mirror;
}
