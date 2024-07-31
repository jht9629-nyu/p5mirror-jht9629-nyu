let bot = new RiveScript();
let chatBttn, camBttn;
let inputField;
let response = "",
  userInput = "";

let myCanvas;

let cam = false; //variable to check if to show

let myVoice = new p5.Speech(); //add a voice to the program
let voiceList = [];
let voicePicker;

let colorPicker;
let colorSet = [
  "coral",
  "cornflowerblue",
  "aquamarine",
  "cadetblue",
  "darkcyan",
  "darksalmon",
  "darkturquoise",
  "gold",
  "indianred",
  "honeydew",
  "lavender",
  "lavenderblush",
  "lemonchiffon",
  "lightcoral",
  "lightblue",
  "lightpink",
  "lightsalmon",
  "lightgreen",
  "lightseagreen",
  "lightskyblue",
  "limegreen",
  "maroon",
  "mediumseagreen",
  "mediumpurple",
  "mediumvioletred",
  "mediumslateblue",
  "mediumturquoise",
  "midnightblue",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "olivedrab",
  "orangered",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "peachpuff",
  "palevioletred",
  "plum",
  "pink",
  "powderblue",
  "rebeccapurple",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "skyblue",
  "slateblue",
  "slategrey",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "wheat",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

function preload() {
  bot.loadFile("bot.txt").then(loaded).catch(error);
}
function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.position(0, 30);
  noStroke();
  textFont("Georgia");
  textAlign(CENTER);
  colorPicker = createColorPicker(random(colorSet));
  colorPicker.position(0, 0);

  edgeDetectSetup();
  camBttn = createButton("Camera On / Off");
  camBttn.position(colorPicker.width + 10, 0);
  camBttn.mousePressed(function camOnOff() {
    cam = !cam;
  });

  for (let i = 0; i < myVoice.voices.length; i++) {
    voiceList[i] = myVoice.voices[i].name;
  }

  print(voiceList);

  inputField = createInput("");
  inputField.size(width / 2 - 120);
  inputField.position(30, height - 55);
  // Listen for the key pressed event
  inputField.input(updateStoredText);

  chatBttn = createButton("Chat");
  chatBttn.position(width / 2 - 80, height - 55);
  chatBttn.mousePressed(chat);

  voicePicker = createSelect();
  voicePicker.position(colorPicker.width + camBttn.width + 30, 0);
  for (let i = 0; i < voiceList.length; i++) {
    voicePicker.option(voiceList[i]);
  }
  voicePicker.changed(function changeVoice() {
    myVoice.setVoice(voicePicker.value());
    myVoice.cancel();
    myVoice.speak("If you like my voice, remember your selection.");
  });
}

function draw() {
  //userInput = inputField.value();
  //background colors
  fill(
    colorPicker.color().levels[0],
    colorPicker.color().levels[1],
    colorPicker.color().levels[2]
  );
  rect(0, 0, width / 2, height);
  if (cam) {
    drawEdgeImg();
  }
  fill(
    colorPicker.color().levels[0] * 1.2,
    colorPicker.color().levels[1] * 1.2,
    colorPicker.color().levels[2] * 1.2
  );
  rect(width / 2, 0, width / 2, height);
  //user input
  push();
  rectMode(CENTER);
  //determine text color based on background color
  let colBrightness =
    (colorPicker.color().levels[0] +
      colorPicker.color().levels[1] +
      colorPicker.color().levels[2]) /
    3;
  if (colBrightness < 125) {
    fill(255);
  } else {
    fill(0);
  }
  textSize(height / 20);
  text(
    userInput.toUpperCase(),
    width / 4,
    height / 2 - height / 10,
    width / 2 - width / 40
  );
  //bot response
  text(
    response.toUpperCase(),
    width / 2 + width / 4,
    height / 2 - height / 10,
    width / 2 - width / 40
  );
  pop();
}
function chat() {
  userInput = inputField.value();
  bot.reply("local-user", userInput).then(respond);
  inputField.value("");
}
function respond(reply) {
  myVoice.cancel();
  response = reply;
  myVoice.speak(reply);
}

function loaded() {
  console.log("Chatbot ready!");
  bot.sortReplies(); //You must sort the replies before trying to fetch any!
}
function error(error) {
  console.log("There is an error.");
  console.log(error);
}

function keyPressed() {
  if (keyCode === 13) {
    chat();
  }
}

function updateStoredText() {
  // Update userInput with the current value of the inputTextarea
  userInput = inputField.value();
}
