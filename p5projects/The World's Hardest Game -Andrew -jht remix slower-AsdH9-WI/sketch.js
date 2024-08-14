// https://editor.p5js.org/jht9629-nyu/sketches/-AsdH9-WI
// The World's Hardest Game -Andrew -jht remix slower
// https://editor.p5js.org/LiIypad/sketches/OH_dPW-R8
//Inspired by The World's Hardest Game by Snubby
//https://www.crazygames.com/game/worlds-hardest-game

//player variables
let px;
let py;
let psize = 20;
let pcolor;
let pspeed = 0.2;
let ppspeed = 2;

//enemy variables
let esize = 16;

//walls
let walls = []; //x, y, l, h

//colors
let bg;
let winColor;

//timer variable
let timer = 0;

//level variable
let level = 0;

//death variables
let dying = false;
let alpha = 255;

//accessibility
let chosen = false;
let keyboard = true;

//winning variables
let immune = false;

//stats
let deaths = 0;

//custom quotes
let q = [
  "You don't know what you're getting into.",
  "That one was easy.",
  "You don't stand a chance."
];

let enemies = []; //[x, y, vx, vy]

let spawns;

function setup() {
  createCanvas(400, 600);
  px = width / 2 - psize / 2;
  py = (height * 6) / 10 - psize / 2;
  bg = color(240);
  pcolor = color(255, 0, 0, alpha);
  winColor = color('#ADEBB3');
  
  resetWalls();
  
  //custom spawns
  spawns = [
    [width / 2 - psize / 2, (height * 6) / 10 - psize / 2],
    [width/2 - psize/2, height - 200 - psize/2],
    [50 - psize/2, (height - 150)/2 - psize/2],
    [100 - psize/2, 100 - psize/2]
  ];
}

function draw() {
  background(bg);
  
  //end screen
  if(level == 3.14) {
    fill(0);
    noStroke();
    textSize(50);
    text("Well done!", width/2, 125);
    textSize(25);
    text("You completed all three levels", width/2, 175);
    text("and only died " + deaths + " times.", width/2, 200);
    text("I hope you enjoyed my remake", width/2, 250);
    text("of \"The World's Hardest Game\".", width/2, 275);
    text(":)", width/2, 325);
  }
  
  //quotes
  if(level % 1 == 0.5) {
    fill(0);
    textSize(50);
    text("Level " + (level + 0.5), width/2, height/4);
    textSize(20);
    text(q[level - 0.5], width/2, height/2);
    timer++;
    if(timer >= 120) {
      timer = 0;
      level += 0.5;
      //reset player position
      px = spawns[level][0];
      py = spawns[level][1];
    }
  }
  
  if(level % 1 == 0) {
    //walls
    drawWalls();
    
    //controls
    if(chosen) {
      control(spawns[level][0], spawns[level][1]);
    }
    
    //stats
    if(deaths > 0 || level > 0) {
      fill(0);
      textSize(20);
      text("Deaths: " + deaths, width/2, height - 75);
    }
    
    //enemies
    for(let i = 0; i < enemies.length; i++) {
      let ex = enemies[i][0];
      let ey = enemies[i][1];
      let exspeed = enemies[i][2];
      let eyspeed = enemies[i][3];
      enemies[i][0] += exspeed;
      enemies[i][1] += eyspeed;
      for(let j = 0; j < walls.length; j++) {
        let wx1 = walls[j][0];
        let wy1 = walls[j][1];
        let wx2 = walls[j][0] + walls[j][2];
        let wy2 = walls[j][1] + walls[j][3];
        //up
        if(ex > wx1 && ex < wx2 && ey < wy2 + esize/2 && ey >= wy2 + esize/2 + 2*eyspeed) {
          enemies[i][1] = wy2 + esize/2;
          enemies[i][3] *= -1;
        }
        //down
        if(ex > wx1 && ex < wx2 && ey > wy1 - esize/2 && ey <= wy1 - esize/2 + 2*eyspeed) {
          enemies[i][1] = wy1 - esize/2;
          enemies[i][3] *= -1;
        }
        //left
        if(ey > wy1 && ey < wy2 && ex < wx2 + esize/2 && ex >= wx2 + esize/2 + 2*exspeed) {
          enemies[i][0] = wx2 + esize/2;
          enemies[i][2] *= -1;
        }
        //right
        if(ey > wy1 && ey < wy2 && ex > wx1 - esize/2 && ex <= wx1 - esize/2 + 2*exspeed) {
          enemies[i][0] = wx1 - esize/2;
          enemies[i][2] *= -1;
        }
        ex = enemies[i][0];
        ey = enemies[i][1];
        exspeed = enemies[i][2];
        eyspeed = enemies[i][3];
      }
      //move in a line
      if(enemies[i].length == 8) {
        if(enemies[i][0] > enemies[i][6]) {
          enemies[i][0] = enemies[i][6];
          enemies[i][2] *= -1;
        }
        if(enemies[i][0] < enemies[i][4]) {
          enemies[i][0] = enemies[i][4];
          enemies[i][2] *= -1;
        }
        if(enemies[i][1] > enemies[i][7]) {
          enemies[i][1] = enemies[i][7];
          enemies[i][3] *= -1;
        }
        if(enemies[i][1] < enemies[i][5]) {
          enemies[i][1] = enemies[i][5];
          enemies[i][3] *= -1;
        }
      }
      blueCircle(enemies[i][0], enemies[i][1]);
    }
  }
  
  //ALL LEVELS MUST
  //transition with win();
  
  //ALL LEVEL TRANSITIONS MUST
  //push all walls
  //push all enemies

  //Level 0 (Title Screen)
  if (level == 0) {
    //Title
    textSize(20);
    textAlign(CENTER);
    stroke(bg);
    
    //blue
    blueRectangle(width/2 - 130, height/4 - 30, 260, 45);
    
    fill(bg);
    rect(width/2 - 125, height/4 - 25, 250, 35);
    fill("black");
    text("The World's Hardest Game", width / 2, height / 4);
    
    //draw spawn
    drawSpawn(spawns[0][0], spawns[0][1]);
    
    //accessibility
    if(!chosen) {
      fill(0);
      noStroke();
      text("Select your control mode.", width/2, height - 100);
      
      strokeWeight(5);
      stroke(0);
      if(mouseX > width/9 && mouseX < 4*width/9 && mouseY > height - 70 && mouseY < height - 30) {
        fill(winColor);
      } else {
        fill(bg);
      }
      rect(width/9, height - 70, width/3, 40);
      
      if(mouseX > 5*width/9 && mouseX < 8*width/9 && mouseY > height - 70 && mouseY < height - 30) {
        fill(winColor);
      } else {
        fill(bg);
      }
      rect(5*width/9, height - 70, width/3, 40);
      
      fill(0);
      noStroke();
      text("Keyboard", 5*width/18, height - 44);
      text("Mobile", 13*width/18, height - 44);
    } else {
      //Control instructions
      noStroke();
      fill(0);
      if(keyboard) {
        text("Use the WASD keys to move.", width/2, height - 125);
      } else {
        text("Use the keypad to move.", width/2, height - 125);
      }
      
      //Play (To Level 1)
      win(width/2, 2*height/5, 100);
      fill(0);
      text("Play", width/2, 2*height/5 + 5);
    }
  }
  
  //Level 1
  if(level == 1) {
    //tutorial
    text("Avoid the blue circles.", width/2, height - 125);
    win(width/2, 125, 60);
  }
  
  //Level 2
  if(level == 2) {
    win(width - 50, (height - 150)/2, 60);
  }
  
  //Level 3
  if(level == 3) {
    win(300, 100, 60);
  }
  
  if(level % 1 == 0) {
    //player
    pcolor = color(255, 0, 0, alpha);
    drawPlayer();
  }
}

//advance levels
function win(x, y, s) {
  fill(winColor);
  noStroke();
  rect(x - s/2, y - s/2, s, s);
  if(px > x - s/2 && px < x + s/2 - psize && py > y - s/2 && py < y + s/2 - psize) {
    immune = true;
  }
  if(immune) {
    alpha -= 8.5;
    if(alpha <= 0) {
      resetWalls();
      //custom walls
      if(level == 0) {
        walls.push([0, 350, 150, 100]);
        walls.push([250, 350, 150, 100]);
        walls.push([0, 0, width, 75]);
        walls.push([0, 75, 150, 100]);
        walls.push([250, 75, 150, 100]);
        walls.push([0, 175, 25, 175]);
        walls.push([width - 25, 175, 25, 175]);
      }
      if(level == 1) {
        walls.push([0, 300, width, 150]);
        walls.push([0, 0, width, 150]);
        walls.push([0, 150, 135, 30]);
        walls.push([165, 150, width - 165, 30]);
        walls.push([0, 270, 235, 30]);
        walls.push([265, 270, 135, 30]);
      }
      if(level == 2) {
        walls.push([0, 0, width, 50]);
        walls.push([0, 0, 50, height - 150]);
        walls.push([width - 50, 0, 50, height - 150]);
        walls.push([150, 0, 100, 350]);
      }
      
      //custom enemies
      enemies = [];
      if(level == 0) {
        enemies.push([25 + esize/2, 200, pspeed*3, 0]);
        enemies.push([25 + esize/2, 250, pspeed*3, 0]);
        enemies.push([25 + esize/2, 300, pspeed*3, 0]);
        enemies.push([width - 25 - esize/2, 225, pspeed*-3, 0]);
        enemies.push([width - 25 - esize/2, 275, pspeed*-3, 0]);
        enemies.push([width - 25 - esize/2, 325, pspeed*-3, 0]);
      }
      if(level == 1) {
        enemies.push([100, 195, pspeed*3/2, 0, 100, 195, 200, 195]);
        enemies.push([100, 225, pspeed*3/2, 0, 100, 225, 200, 225]);
        enemies.push([100, 255, pspeed*3/2, 0, 100, 255, 200, 255]);
        enemies.push([200, 195, pspeed*3/2, 0, 200, 195, 300, 195]);
        enemies.push([200, 225, pspeed*3/2, 0, 200, 225, 300, 225]);
        enemies.push([200, 255, pspeed*3/2, 0, 200, 255, 300, 255]);
      }
      if(level == 2) {
        enemies.push([100, 140, pspeed*3/2, 0]);
        enemies.push([100, 170, pspeed*-3/2, 0]);
        enemies.push([100, 200, pspeed*3/2, 0]);
        enemies.push([100, 230, pspeed*-3/2, 0]);
        enemies.push([100, 260, pspeed*3/2, 0]);
        enemies.push([100, 290, pspeed*-3/2, 0]);
        enemies.push([100, 320, pspeed*3/2, 0]);
        enemies.push([300, 140, pspeed*3/2, 0]);
        enemies.push([300, 170, pspeed*-3/2, 0]);
        enemies.push([300, 200, pspeed*3/2, 0]);
        enemies.push([300, 230, pspeed*-3/2, 0]);
        enemies.push([300, 260, pspeed*3/2, 0]);
        enemies.push([300, 290, pspeed*-3/2, 0]);
        enemies.push([300, 320, pspeed*3/2, 0]);
        enemies.push([160, 358, 0, pspeed/2, 160, 358, 160, 382]);
        enemies.push([160, 410, 0, pspeed/2, 160, 418, 160, 442]);
        enemies.push([180, 358, 0, pspeed/2, 180, 358, 180, 382]);
        enemies.push([180, 410, 0, pspeed/2, 180, 418, 180, 442]);
        enemies.push([200, 358, 0, pspeed/2, 200, 358, 200, 382]);
        enemies.push([200, 410, 0, pspeed/2, 200, 418, 200, 442]);
        enemies.push([220, 358, 0, pspeed/2, 220, 358, 220, 382]);
        enemies.push([220, 410, 0, pspeed/2, 220, 418, 220, 442]);
        enemies.push([240, 358, 0, pspeed/2, 240, 358, 240, 382]);
        enemies.push([240, 410, 0, pspeed/2, 240, 418, 240, 442]);
      }
      if(level == 3) {
        level = 3.14 - 0.5;
      }
      
      level += 0.5;
      immune = false;
      dying = false;
      alpha = 255;
    }
  }
}

//render spawn
function drawSpawn(x, y) {
  fill(winColor) 
  rect(x - psize, y - psize, 3*psize, 3*psize);
}

//render walls
function drawWalls() {
  noStroke();
  fill(200);
  for(let i = 0; i < walls.length; i++) {
    rect(walls[i][0], walls[i][1], walls[i][2], walls[i][3]);
  }
}

//reset walls to canvas only
function resetWalls() {
  walls = [];
  walls.push([0, -2*pspeed, width, 2*pspeed]);
  walls.push([0, height - 150, width, 150]);
  walls.push([-2*pspeed, 0, 2*pspeed, height]);
  walls.push([width, 0, 2*pspeed, height]);
}

//render the player
function drawPlayer() {
  strokeWeight(1);
  stroke(0, 0, 0, alpha);
  fill(pcolor);
  square(px, py, psize);
}

//death by blue rectangle
function blueRectangle(x, y, l, h) {
  fill("blue");
  rect(x, y, l, h);
  if(px < x + l && px > x - psize && py < y + h && py > y - psize) {
    dying = true;
  }
}

//death by blue circle
//collision detection is imperfect, but good enough.
function blueCircle(x, y) {
  fill("blue");
  stroke(0);
  strokeWeight(1);
  circle(x, y, esize);
  //up down
  if(px > x - psize && px < x && py > y - esize/2 - psize && py < y + esize/2) {
    dying = true;
  }
  //left right
  if(py > y - psize && py < y && px > x - esize/2 - psize && px < x + esize/2) {
    dying = true;
  }
}

//controls
function control(x, y) {
  drawSpawn(x, y);
  if(!keyboard) {
    drawKeypad();
  }
  if (!dying || immune) {
    if(keyboard) {
      //keyboard movement
      if(keyIsDown(87)) {
        up();
      }
      if(keyIsDown(83)) {
        down();
      }
      if(keyIsDown(65)) {
        left();
      }
      if(keyIsDown(68)) {
        right();
      }
    } else {
      //keypad movement
      keypad();
    }
  } else if (!immune) {
    death(x, y);
  }
}

//death animation and controls
function death(x, y) {
  alpha -= 8.5;
  if (alpha <= 0) {
    dying = false;
    deaths++;
    //respawn
    px = x;
    py = y;
    alpha = 255;
  }
}

//movement
function up() {
  console.log('up');
  py -= ppspeed;
  for(let i = 0; i < walls.length; i++) {
    let x1 = walls[i][0];
    let x2 = walls[i][2] + walls[i][0];
    let y = walls[i][3] + walls[i][1];
    if(px > x1 - psize && px < x2 && py < y && py >= y - pspeed*2) {
      py = y;
    }
  }
}

function down() {
  console.log('down');
  py += ppspeed;
  for(let i = 0; i < walls.length; i++) {
    let x1 = walls[i][0];
    let x2 = walls[i][2] + walls[i][0];
    let y = walls[i][1];
    if(px > x1 - psize && px < x2 && py > y - psize && py <= y - psize + pspeed*2) {
      py = y - psize;
    }
  }
}

function left() {
  console.log('left');
  px -= ppspeed;
  for(let i = 0; i < walls.length; i++) {
    let y1 = walls[i][1];
    let y2 = walls[i][3] + walls[i][1];
    let x = walls[i][2] + walls[i][0];
    if(py > y1 - psize && py < y2 && px < x && px > x - 2*pspeed) {
      px = x;
    }
  }
}

function right() {
  console.log('right');
  px += ppspeed;
  for(let i = 0; i < walls.length; i++) {
    let y1 = walls[i][1];
    let y2 = walls[i][3] + walls[i][1];
    let x = walls[i][0];
    if(py > y1 - psize && py < y2 && px > x - psize && px < x - psize + 2*pspeed) {
      px = x - psize;
    }
  }
}

//keypad
function drawKeypad() {
  //Visual touchpad
  stroke(0);
  strokeWeight(1);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(i != 1 || j != 1) {
        if(mouseIsPressed && mouseX > 30 + i*30 && mouseX < 60 + i*30 && mouseY > height - 120 + j*30 && mouseY < height - 90 + j*30) {
          fill(winColor);
        } else {
          fill(bg);
        }
        rect(30 + i*30, height - 120 + j*30, 30, 30);
      }
    }
  }
  //Arrows
  fill(0);
  triangle(75, height - 112.5, 65, height - 100, 85, height - 100);
  triangle(75, height - 37.5, 65, height - 50, 85, height - 50);
  triangle(37.5, height - 75, 50, height - 65, 50, height - 85);
  triangle(112.5, height - 75, 100, height - 65, 100, height - 85);
  triangle(97.5, height - 112.5, 112.5, height - 112.5, 112.5, height - 97.5);
  triangle(97.5, height - 37.5, 112.5, height - 37.5, 112.5, height - 52.5);
  triangle(37.5, height - 112.5, 52.5, height - 112.5, 37.5, height - 97.5);
  triangle(37.5, height - 37.5, 52.5, height - 37.5, 37.5, height - 52.5);
}

function keypad() {
  if(mouseIsPressed) {
    //up
    if(mouseX > 30 && mouseX < 120 && mouseY > height - 120 && mouseY < height - 90) {
      up();
    }
    //down
    if(mouseX > 30 && mouseX < 120 && mouseY > height - 60 && mouseY < height - 30) {
      down();
    }
    //left
    if(mouseX > 30 && mouseX < 60 && mouseY > height - 120 && mouseY < height - 30) {
      left();
    }
    //right
    if(mouseX > 90 && mouseX < 120 && mouseY > height - 120 && mouseY < height - 30) {
      right();
    }
  }
}

function mouseClicked() {
  //Choose control mode
  if(!chosen) {
    if(mouseX > width/9 && mouseX < 4*width/9 && mouseY > height - 70 && mouseY < height - 30) {
      chosen = true;
      keyboard = true;
    }
    
    if(mouseX > 5*width/9 && mouseX < 8*width/9 && mouseY > height - 70 && mouseY < height - 30) {
      chosen = true;
      keyboard = false;
    }
  }
}