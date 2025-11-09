// https://editor.p5js.org/jht9629-nyu/sketches/QWZJTndDe
// created with claude
// prompt: Create an interactive tool that shoots out emojis using real-world physics
// from claude install quick start prompt example

var GRAVITY = 980;
var AIR_RESISTANCE = 0.001;
var BOUNCE_DAMPING = 0.7;
var GROUND_Y = 500;
var CANNON_X = 50;
var CANNON_Y = GROUND_Y - 20;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 550;

var emojis = [];
var selectedEmoji = "🎾";
var power = 50;
var angle = 45;

function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvas-container");
  textAlign(CENTER, CENTER);
  textSize(30);
}

function draw() {
  background(135, 206, 235);

  var dt = deltaTime / 1000;

  fill(139, 115, 85);
  rect(0, GROUND_Y, width, height - GROUND_Y);

  fill(144, 238, 144);
  rect(0, GROUND_Y - 5, width, 5);

  push();
  translate(CANNON_X, CANNON_Y);
  rotate((-angle * Math.PI) / 180);
  fill(85, 85, 85);
  rect(0, -8, 40, 16);
  pop();

  fill(51, 51, 51);
  circle(CANNON_X, CANNON_Y, 30);

  for (var i = emojis.length - 1; i >= 0; i--) {
    var emoji = emojis[i];

    var speed = Math.sqrt(Math.pow(emoji.vx, 2) + Math.pow(emoji.vy, 2));
    var dragForce = AIR_RESISTANCE * Math.pow(speed, 2);
    var dragX = speed > 0 ? -dragForce * (emoji.vx / speed) : 0;
    var dragY = speed > 0 ? -dragForce * (emoji.vy / speed) : 0;

    emoji.vx += dragX * dt;
    emoji.vy += (GRAVITY + dragY) * dt;
    emoji.x += emoji.vx * dt;
    emoji.y += emoji.vy * dt;
    emoji.rotation += emoji.rotationSpeed * dt;

    if (emoji.y >= GROUND_Y - 15) {
      emoji.y = GROUND_Y - 15;
      emoji.vy = -emoji.vy * BOUNCE_DAMPING;
      emoji.vx = emoji.vx * 0.95;

      if (Math.abs(emoji.vy) < 50) {
        emoji.vy = 0;
        emoji.rotationSpeed *= 0.95;
      }
    }

    if (emoji.x <= 15 || emoji.x >= width - 15) {
      emoji.vx = -emoji.vx * BOUNCE_DAMPING;
      emoji.x = emoji.x <= 15 ? 15 : width - 15;
    }

    if (
      Math.abs(emoji.vx) < 10 &&
      Math.abs(emoji.vy) < 10 &&
      emoji.y >= GROUND_Y - 16
    ) {
      emoji.lifetime += dt;
      if (emoji.lifetime > 3) {
        emojis.splice(i, 1);
        continue;
      }
    }

    push();
    translate(emoji.x, emoji.y);
    rotate(emoji.rotation);
    text(emoji.emoji, 0, 0);
    pop();
  }
}

function selectEmoji(btn, emoji) {
  selectedEmoji = emoji;
  var allBtns = document.querySelectorAll(".emoji-btn");
  for (var j = 0; j < allBtns.length; j++) {
    allBtns[j].classList.remove("selected");
  }
  btn.classList.add("selected");
}

function updatePower(value) {
  power = parseInt(value);
  document.getElementById("power-value").textContent = power;
}

function updateAngle(value) {
  angle = parseInt(value);
  document.getElementById("angle-value").textContent = angle;
}

function shoot() {
  var radians = (angle * Math.PI) / 180;
  var velocity = power * 10;

  var newEmoji = {
    emoji: selectedEmoji,
    x: CANNON_X + Math.cos(radians) * 40,
    y: CANNON_Y - Math.sin(radians) * 40,
    vx: Math.cos(radians) * velocity,
    vy: -Math.sin(radians) * velocity,
    rotation: 0,
    rotationSpeed: (Math.random() - 0.5) * 10,
    lifetime: 0,
  };

  emojis.push(newEmoji);
}

function clearEmojis() {
  emojis = [];
}


