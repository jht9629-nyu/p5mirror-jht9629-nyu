// https://editor.p5js.org/davidbouchard/sketches/N8X5_9C5-

let Title;
let ChooseCharacter;
let bg;

let mage;
let knight;
let elf;
let playerImage;

let BackgroundMusic;
var button1;
var button2;
var button3;
var y = 300;
var value;

let gameState = "intro";

function preload() {
  // LOADED MUSIC
  soundFormats("m4a");
  BackgroundMusic = loadSound("Onward.m4a");

  // LOADED IMAGES
  Title = loadImage("title.png");
  ChooseCharacter = loadImage("cyc.png");
  mage = loadImage("mage_sprite.png");
  knight = loadImage("knight_sprite.png");
  elf = loadImage("elf_sprite.png");
  bg = loadImage("selectionbg.png")
  
}

function setup() {
  createCanvas(700, 700);

  button1 = createImg("mage_sprite.png", "Mage");
  button1.position(180, y);
  button1.size(100, 100);
  button1.mousePressed(function () {
    selectCharacter(mage);
  });

  button2 = createImg("knight_sprite.png", "Knight");
  button2.position(330, y);
  button2.size(100, 100);
  button2.mousePressed(function () {
    selectCharacter(knight);
  });

  button3 = createImg("elf_sprite.png", "Elf");
  button3.position(480, y);
  button3.size(100, 100);
  button3.mousePressed(function () {
    selectCharacter(elf);
  });

  //-------------------------------------------------------------

  backgroundMusic();

  imageMode(CENTER);
}

function backgroundMusic() {
  BackgroundMusic.play();
  BackgroundMusic.loop();
  BackgroundMusic.setVolume(1);
  userStartAudio();
}

function draw() {
  if (gameState == "intro") {
    intro();
  } else if (gameState == "runGame") {
    runGame();
  }
}


function intro() {
 image(bg, 700/2, 0)
  image(Title, 350, 150, 400, 200);
  image(ChooseCharacter, 350, 500, 250, 20);
}

function runGame() {
 image(bg, 0, 0)
  image(playerImage, width / 2, height / 2);
}

function selectCharacter(whichImage) {
  playerImage = whichImage;
  button1.hide();
  button2.hide();
  button3.hide();
  gameState = "runGame";
}

// https://editor.p5js.org/p5/sketches/Image:_Background_Image

// function setup() {
// let bg;
// let y = 0;

// function setup() {
//   bg = loadImage('gamebg.png');
//   createCanvas(700, 700);
// }

// function draw() {
//   background(bg);

//   // https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9

//   button = createImg('atkui.png', '');
//   button.position(25, 30);
//   button.mousePressed();
//   button.size(AUTO, height/6);

//   button = createImg('itemui.png', '');
//   button.position(275, 30);
//   button.mousePressed();
//   button.size(AUTO, height/6);

//      var health = 50;
// var maxHealth = 400;

//   health = min(maxHealth, ++health);

//   stroke(0);
//   strokeWeight(4);
//   noFill();
//   rect(25, 165, 300, 20);

//   noStroke();
//   fill(255, 0, 0);
//   rect(25, 165, map(health, 0, maxHealth, 0, 300), 20);
// }
// }
