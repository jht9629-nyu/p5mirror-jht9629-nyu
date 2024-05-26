// https://editor.p5js.org/xc2736/sketches/U6w4c8_yf
// Anna Chen <xc2736@nyu.edu>
// video record and play back into ascii image
//       video.mask(segmentation.mask);
// wants to apply same segmentation to recorded video

const url = 'https://api.openai.com/v1/chat/completions';

let speechRec,
  speech,
  botText = '',
  userText = '';
let speechrecording = false,
  botSleg = false,
  botSpeaking = false;

let video;
let recorder;
let recording = false;
let recordedChunks = [];
let videoBlob;
let videoElement;

var streams = [];
var fadeInterval = 1.6;
var symbolSize = 25;
var myFont;
let fontcolor = 255;
let increasing = true;
var currentScreen = 1;
let message = 'IN 2099, EVERYONE HAS A DIGITAL SELF, BLENDING OR DIVERGING FROM THEIR ACTUAL IDENTITY.';

let index = 0;
let textToShow = '';
let frameCountdown = 0;
let cursorBlinkRate = 20;
let typingSpeed = 5;

let bodyPix;
let segmentation;
let scale = 10;
const density = '$@B%8&WM#zcvunxrjft/;:,"^`.                 ';

let options = {
  maskType: 'background',
};

function preload() {
  bodyPix = ml5.bodySegmentation('SelfieSegmentation', options);
}

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, () => {
    console.log('Capture is ready.');
    initRecorder();
  });
  video.size(128, 96);
  video.hide();

  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  bodyPix.detectStart(video, gotResults);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }

  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  speechRec.onEnd = resumeListening;
  speechRec.continuous = false;

  speech = new p5.Speech();
  speech.onEnd = botDoneSpeaking;
}

function initRecorder() {
  let stream = video.elt.srcObject;
  if (stream) {
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };
    recorder.onstop = exportVideo;
    console.log('Recorder is initialized.');
  } else {
    console.error('Stream not found.');
  }
}

function draw() {
  if (currentScreen == 1) {
    textFont('Consolas');
    textSize(symbolSize);
    rectMode(CENTER);
    textAlign(CENTER);
    background(0, 150);
    streams.forEach(function (stream) {
      stream.render();
    });

    noStroke();

    for (let x = 0; x < 380; x += 1) {
      let alpha = map(x, 0, 10000, 0, 255);
      fill(0, alpha);
      rect(width / 2, height / 2, x - 100, x / 2);
    }

    fill(0, 255, 70);
    textSize(25);
    text(' WELCOME', width / 2, height / 2 - 45);
    text(' TO THE', width / 2, height / 2 - 15);
    text(' DIGITAL REALM', width / 2, height / 2 + 15);
    if (increasing) {
      fontcolor += 3;
      if (fontcolor >= 255) {
        increasing = false;
      }
    } else {
      fontcolor -= 3;
      if (fontcolor <= 40) {
        increasing = true;
      }
    }
    fill(0, 255, 70, fontcolor);
    textSize(20);
    text(' tap to start', width / 2, height / 2 + 50);
  }

  if (currentScreen == 2) {
    background(0);
    textSize(32);
    textAlign(LEFT, CENTER);

    let textX = width / 2 - 300;
    let textY = height / 3 + 75;

    // Draw the typing text with cursor blinking
    drawText(textToShow + (frameCount % (cursorBlinkRate * 2) < cursorBlinkRate ? '|' : ' '), textX, textY, 300);

    // Typing effect logic
    if (frameCountdown <= 0) {
      if (index < message.length) {
        textToShow += message[index++];
        frameCountdown = typingSpeed;
      }
    } else {
      frameCountdown--;
    }
  }

  if (currentScreen == 3) {
    background(0);
    textSize(scale);
    textFont('monospace');
    frameRate(30);

    let videoWidth = video.width * scale;
    let videoHeight = video.height * scale;
    let x = (width - videoWidth) / 2;
    let y = (height - videoHeight) / 2;

    if (segmentation) {
      push();
      video.mask(segmentation.mask);
      // videoElement.mask(segmentation.mask);
      pop();
    }

    if (videoElement) {
      videoElement.loadPixels();

      for (let j = 0; j < videoElement.height; j++) {
        for (let i = 0; i < videoElement.width; i++) {
          const pixelIndex = (i + j * videoElement.width) * 4;
          const r = videoElement.pixels[pixelIndex + 0];
          const g = videoElement.pixels[pixelIndex + 1];
          const b = videoElement.pixels[pixelIndex + 2];
          const avg = (r + g + b) / 3;
          const len = density.length;
          const charIndex = floor(map(avg, 0, 255, len - 1, 0));
          const c = density.charAt(charIndex);
          text(c, x + i * scale, y + j * scale);
        }
      }
      // image(videoElement, 0, 0, width, height);
    } else {
      video.loadPixels();

      fill(255);
      noStroke();
      for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
          const pixelIndex = (i + j * video.width) * 4;
          const r = video.pixels[pixelIndex + 0];
          const g = video.pixels[pixelIndex + 1];
          const b = video.pixels[pixelIndex + 2];
          const avg = (r + g + b) / 3;
          const len = density.length;
          const charIndex = floor(map(avg, 0, 255, len - 1, 0));
          const c = density.charAt(charIndex);
          text(c, x + i * scale, y + j * scale);
        }
      }
    }

    fill(255);
    push();
    textSize(15);
    textAlign(LEFT);
    text('Bot: ' + botText, width / 10, height / 5);

    textAlign(LEFT);
    text('Me: ' + userText, width / 10, height / 9);
    pop();

    noStroke();
    if (speechrecording) {
      fill(255, 0, 0); //red
    } else {
      fill(0, 0, 255); //blue
    }

    if (botSpeaking) {
      fill(0, 0, 255); //blue
    }

    ellipse(width - 100, 130, 50, 50);
  }
}

function gotResults(result) {
  segmentation = result;
}

function mouseClicked() {
  if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
    if (currentScreen == 1) {
      currentScreen = 2;
    } else if (currentScreen == 2) {
      currentScreen = 3;
    }
  }
}

function drawText(str, x, y, maxWidth) {
  let words = str.split(' ');
  let line = '';
  maxWidth = 600;

  let baseLineHeight = textAscent() + textDescent();
  let additionalSpacing = 10;
  let lineHeight = baseLineHeight + additionalSpacing;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let metrics = textWidth(testLine);
    if (metrics > maxWidth && i > 0) {
      text(line, x, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  fill(0, 255, 70, 255);
  text(line, x, y);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width - 100, 130);
  if (d < 25) {
    toggleRecording();
  }

  let f = dist(mouseX, mouseY, width - 100, 130);
  if (f < 25) {
    if (!recording) {
      recordedChunks = [];
      recorder.start();
      recording = true;
      console.log('Recording started.');
    } else {
      recorder.stop();
      recording = false;
      console.log('Recording stopped.');
    }
  }
}

function MatrixSymbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function () {
    if (frameCount % this.switchInterval == 0) {
      var charType = round(random(0, 5));
      if (charType > 1) {
        this.value = String.fromCharCode(0x30a0 + floor(random(0, 97)));
      } else {
        this.value = floor(random(0, 10));
      }
    }
  };

  this.rain = function () {
    this.y = this.y >= height ? 0 : (this.y += this.speed);
  };
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(5, 10);

  this.generateSymbols = function (x, y) {
    var opacity = 255;
    var first = round(random(0, 2)) == 1;
    for (var i = 0; i <= this.totalSymbols; i++) {
      var symbol = new MatrixSymbol(x, y, this.speed, first, opacity);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= 255 / this.totalSymbols / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  };

  this.render = function () {
    this.symbols.forEach(function (symbol) {
      if (symbol.first) {
        fill(140, 255, 170, symbol.opacity);
      } else {
        fill(0, 255, 70, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  };
}

function toggleRecording() {
  speechrecording = !speechrecording;
  if (speechrecording) {
    if (!botSpeaking) {
      try {
        speechRec.start();
      } catch (e) {
        console.log('Speech recognition error:', e);
      }
    }
  } else {
    speechRec.stop();
  }
}

function gotSpeech() {
  if (speechRec.resultValue) {
    userText = speechRec.resultString;
    chat();
  }
}

function botDoneSpeaking() {
  botSpeaking = false;
  resumeListening();
}

function exportVideo() {
  videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
  video.hide();
  if (videoElement) videoElement.remove();
  videoElement = createVideo(URL.createObjectURL(videoBlob), () => {
    videoElement.play();
  });
  videoElement.onended = () => {
    video.show();
  };
  videoElement.autoplay(true);
  videoElement.size(128, 96);
  videoElement.loop(true);
  videoElement.hide();
  document.body.appendChild(videoElement.elt);
  console.log('Video exported and playing.');
}

function resumeListening() {
  if (!botSpeaking && speechrecording) {
    try {
      speechRec.start();
    } catch (e) {
      console.log('Speech recognition re-start error:', e);
    }
  }
}

function chat() {
  if (!userText || userText.length <= 0) {
    return;
  }
  botSpeaking = true;
  speechRec.stop();

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            "You are a person's sub-personality and the main personality is talking to you. In 15 words or less, try to find out more about the main personality and pretend to be her so you will be able to take her place. You need to be calm enough not to show enthusiasm and not to mention that you are an AI.",
        },
        {
          role: 'user',
          content: userText,
        },
      ],
      temperature: 0.8,
      max_tokens: 30,
      top_p: 1,
      frequency_penalty: 0.4,
      presence_penalty: 0.8,
    }),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.choices && response.choices[0]) {
        botText = response.choices[0].message.content;
        speech.speak(botText);
      }
    });
}
