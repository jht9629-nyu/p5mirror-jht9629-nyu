// https://editor.p5js.org/jht9629-nyu/sketches/syH2Nh5RO
// Technology by Vamoss
// !!@ takes long time to run in browser

/******************
Code by Vamoss
Original code link:
https://openprocessing.org/sketch/2215570

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

//Ideia emerged from:
//https://chatbotslife.com/notes-on-remixing-noon-generative-text-and-markov-chains-84ff4ec23937

const color1 = "#ED225D";
const color2 = "#FFF";
const fontSize =
  (Math.hypot(innerWidth, innerHeight) / Math.hypot(1920, 1080)) * 60;
var message = "Technology is not neutral";
var wordsArr = [];
var synonymsArr = [];
var time, messageWidth;
var typed = false;

var hiddenInput;

console.log("in sketch");

function setup() {
  console.log("in setup");
  // describe(
  //   "It is a synonym generator. The initial phrase, 'Technology is not neutral,' quoted from the technofeminist Donna Haraway in 'A Cyborg Manifesto,' serves as an example of how words can embody multiple meanings. You are invited to type using your keyboard to modify the phrase and explore synonyms."
  // );
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  onMessageChanged();

  hiddenInput = createInput(message);
  hiddenInput.addClass("hiddenInput");
  hiddenInput.position(0, 0);
  hiddenInput.size(innerWidth, innerHeight);
  hiddenInput.input(updateWords);

  var style = document.createElement("style");
  style.innerHTML = `
	.hiddenInput {
		border: 0;
		padding: 0;
		margin: 0;
		text-align: center;
		font-size: ${fontSize}px;
		color: transparent;
		background: transparent;
		caret-color: ${color2};
	}
	.hiddenInput::selection {
			background: ${color2};
			color: ${color1};
	}
	.hiddenInput:focus {
			color: rgb(255 255 100 / 40%) !important;
	}`;
  document.head.appendChild(style);
  
  console.log("leaving setup");
}

function updateWords(e) {
  typed = true;
  message = hiddenInput.value();
  onMessageChanged();
}

function draw() {
  background(color1);

  if (!typed) {
    textSize(fontSize / 2);
    fill(255, 170, 200);
    text("(Type to change the message)", width / 2, height - fontSize);
  }

  const centerY = height / 2;
  let x = (width - messageWidth) / 2;
  time = millis() / 10000;
  wordsArr.forEach((word, index) => {
    fill(255);
    textSize(fontSize);
    drawWord(word, x, centerY);
    var wordSpace = textWidth(word + " ");
    textSize(fontSize * 0.8);
    synonymsArr[index].forEach((synonym, index2) => {
      var i = Math.floor(index2 - synonymsArr[index].length / 2);
      if (i >= 0) i++;
      var col = color(color2);
      col.setAlpha(max(255 - abs(i * 50), 50));
      fill(col);
      drawWord(synonym, x, centerY + i * fontSize * 1.1, i);
    });
    x += wordSpace;
  });
}

function drawWord(words, x, y, index) {
  if (!index) index = 0;
  var xIni = x;
  var yIni = y;
  [...words].forEach((char) => {
    var tW = textWidth(char) / 2;
    x += tW;

    var x1 = x;
    var y1 = y + noise(x1 / 1000 + time, yIni / 1000) * 800 - 400;
    var x2 = x1 + tW;
    var y2 = y + noise(x2 / 1000 + time, yIni / 1000) * 800 - 400;
    var angle = atan2(y2 - y1, x2 - x1);

    var xx = x;
    var yy = y + noise(x / 1000 + time, yIni / 1000) * 800 - 400;
    var lineAngle = ((index / 20) * (x - xIni)) / 40;
    push();
    translate(xIni, yIni);
    rotate(lineAngle);
    translate(-xIni, -yIni);
    translate(xx, yy);
    rotate(angle + lineAngle);
    text(char, 0, 0);
    pop();

    x += tW;
  });
}

function onMessageChanged() {
  console.log("in onMessageChanged");
  wordsArr = message.split(" ");
  synonymsArr = [];
  wordsArr.forEach((word) => {
    synonymsArr.push(getSynonyms(word));
  });
  textSize(fontSize);
  messageWidth = textWidth(message);
}

function getSynonyms(word) {
  const search = word.toLowerCase();
  let syn = synonyms[search];
  let synArr = [];
  if (syn) {
    for (let prop in syn) {
      synArr = synArr.concat(syn[prop]);
    }
  } else {
    //deep search
    for (var entry in synonyms) {
      let syn = synonyms[entry];
      for (var type in syn) {
        if (syn[type].indexOf(search) >= 0) {
          for (let prop in syn) {
            synArr = synArr.concat(syn[prop]);
          }
        }
      }
    }
  }
  //filter
  synArr = synArr.filter((value, index, self) => {
    return (
      self.indexOf(value) === index && //unique
      value != search && //same word
      value.length > 1
    ); //single bug letters
  });
  return synArr;
}
