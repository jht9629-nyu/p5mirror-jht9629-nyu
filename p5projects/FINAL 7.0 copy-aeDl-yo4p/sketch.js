//set up the GPT API

const url = 'https://api.openai.com/v1/chat/completions';

//set up the speechRec and the text for the user and the bot
let speechRec,
  speech,
  botText = '',
  userText = '';
let bot = new RiveScript();
let speechrecording = false,
  botSleg = false,
  botSpeaking = false;

//matrix rain preset
var streams = [];
var fadeInterval = 1.6;
var symbolSize = 25;
var myFont;
let fontcolor = 255;
let increasing = true;

//tying effects
var currentScreen = 2;
let message = 'IN 2099, EVERYONE HAS A DIGITAL SELF, BLENDING OR DIVERGING FROM THEIR ACTUAL IDENTITY.';
let index = 0;
let textToShow = '';
let frameCountdown = 0;
let cursorBlinkRate = 20;
let typingSpeed = 5;

//ASCII
let bodyPix;
let video;
let segmentation;
let scale = 10;
const density = '$@B%8&WM#zcvunxrjft/;:,"^`.                 ';

//Store the past conversation
let dialogues = [];
let dialogueBox;
let currentDialogue = 0;
let initiated = false;
let useChatGPT1 = false;
let conversationHistory = [];
let botMessagesCounter = 0;
let dialogue;
let shouldSwitchModel = false;

let options = {
  maskType: 'background',
};

function preload() {
  bodyPix = ml5.bodySegmentation('SelfieSegmentation', options);
  bot.loadFile('bot.txt').then(botLoaded).catch(loadError);
}

function botLoaded() {
  console.log('Chatbot loaded!');
  bot.sortReplies();
}

function loadError(error) {
  console.log('Error loading chatbot script:', error);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  video = createCapture(VIDEO);
  video.size(128, 96);
  video.hide();
  bodyPix.detectStart(video, gotResults); //ML5 bodyPix

  //matrix rain
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
    // fill(0, 50);
    // for (let x = 0; x < 200; x+=10) {
    //   circle(width/2, height/2, x);
    // }

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
    textFont('Consolas');

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

    //video length and width
    let videoWidth = video.width * scale;
    let videoHeight = video.height * scale;
    let x = (width - videoWidth) / 2;
    let y = (height - videoHeight) / 2;

    //get the ml5 masking for the video
    if (segmentation) {
      push();
      video.mask(segmentation.mask);
      // image(video, x, y, videoWidth, videoHeight);
      pop();
    }

    video.loadPixels(); //for ASCII
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

    fill(255);
    push();
    textSize(20);
    // textAlign(LEFT);
    // text("Bot: " + botText, width / 10, height / 5);

    // textAlign(LEFT);
    // text("You: " + userText, width / 10, height / 9);
    // pop();

    if (userText.length > 200) {
      let formattedUserText = userText.match(/.{1,30}/g).join('\n');
      text('You: ' + formattedUserText, width / 10, height / 5);
    } else {
      text('You: ' + userText, width / 10, height / 5);
    }

    noStroke();
    //check if the bot is listning or not
    if (botSpeaking) {
      text("I'm listening~", width - width / 8, height / 12);
    } else {
      text("I'm speaking~", width - width / 8, height / 12);
    }

    //set up the div
    dialogueBox = createDiv(dialogues[currentDialogue]);
    dialogueBox.style('width', '600px');
    dialogueBox.style('height', '150px');
    dialogueBox.style('padding', '30px');
    dialogueBox.style('background-color', '#000');
    dialogueBox.style('border', '2px solid #fff');
    dialogueBox.style('position', 'absolute');
    dialogueBox.style('bottom', '5%');
    dialogueBox.style('left', '50%');
    dialogueBox.style('transform', 'translateX(-50%)');
    dialogueBox.style('font-size', '16px');
    dialogueBox.style('color', '#fff');
    dialogueBox.style('text-align', 'center');
    dialogueBox.style('box-shadow', '0px 4px 8px rgba(0,0,0,0.5)');
    dialogueBox.style('border-radius', '10px');
    dialogueBox.style('font-family', 'monospace');
    dialogueBox.style('line-height', '30px');
    updateDialogue();

    console.log('botMessagesCounter', botMessagesCounter);
    console.log('conversationHistory', conversationHistory);
  }
}

function updateDialogue() {
  dialogueBox.html(`&nbsp;${botText}`);
}

function gotResults(result) {
  segmentation = result;
}

function mouseClicked() {
  if (currentScreen == 1) {
    currentScreen = 2;
  } else if (currentScreen == 2) {
    currentScreen = 3;
    toggleRecording();
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

// function mousePressed() {
//   let d = dist(mouseX, mouseY, width - 100, 130);
//   if (d < 25) {
//     toggleRecording();
//   }
// }

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
    updateDialogue();
    chat();
  }
}

function botDoneSpeaking() {
  botSpeaking = false;
  resumeListening();
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
  if (botSpeaking) {
    speechRec.stop();
  } else {
    userText = speechRec.resultString;
  }

  if (!userText || userText.length <= 0) {
    return;
  }

  let userMessage = userText;
  let botMessage = botText;
  dialogue = { user: userMessage };
  conversationHistory.push(dialogue);

  if (useChatGPT1) {
    console.log('chat useChatGPT1');

    speech.speak(botText);
    botSpeaking = true;
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
            content: `You are a digital self of someone, here is your information "${conversationHistory}". Based on these description, try to pretend that person, and do not mention that you are an AI. Keep your answer short, you may repeat what the person is saying to trick him.`,
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
          updateDialogue(botText);
          speech.speak(botText);
        }
      });
  } else {
    console.log('chat botSpeaking');

    botSpeaking = true;
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
              "You are an established digital assistant responsible for helping individuals create their ideal digital selves. You're tasked with guiding these individuals through the customization process, making sure their digital selves match the characteristics and abilities they want, so start asking the user for some basic information and opinions on a few things. Please try to end each answer or question within two sentences.",
          },
          {
            role: 'user',
            content: userText,
          },
        ],
        temperature: 0.8,
        max_tokens: 50,
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
          updateDialogue(botText);
          speech.speak(botText);

          // Increment botMessagesCounter here
          botMessagesCounter++;
          if ((botMessagesCounter >= 2) | !botSpeaking) {
            shouldSwitchModel = true;
            switchModel();
            botSpeaking = false;
          }
        }
      });
  }
}

function respond(reply) {
  console.log(reply);
  botText = reply;
  speech.speak(botText);
}

function switchModel() {
  console.log('switchModel');
  if (shouldSwitchModel == true) {
    speech.speak(botText);
    setTimeout(() => {
      botText =
        'Thank you for your information. Now, I will begin creating your digital self. Are you ready to welcome the new you? Start the conversation right now.';
      botSpeaking = false;
    }, 3000);
    shouldSwitchModel = false;
    useChatGPT1 = true;
  }
}
