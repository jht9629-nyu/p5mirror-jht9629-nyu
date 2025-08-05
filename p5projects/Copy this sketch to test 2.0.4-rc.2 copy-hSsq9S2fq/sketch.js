/*
 * Thanks for helping test p5.js!!
 * The p5.js 2.0 reference is here: https://beta.p5js.org/
 * Something is not working as the documentation states? Report here: https://github.com/processing/p5.js/issues
 * Or ask about it on Discord: https://discord.gg/UNGxRA5A
 */


function setup() {
  createCanvas(400, 400);
  textSize(50);
  describe("The text 2.0.4-rc.2 waving its way down a pink canvas.")
}

function draw() {
  background(255, 200, 230, 70);
  noFill();
  stroke("black");
  textAlign(CENTER);
  text("testing is caring", width/2 + sin(frameCount/50)*20, (frameCount/1.5)%450);
}