// https://editor.p5js.org/jht9629-nyu/sketches/u3HnuOLS5
// https://editor.p5js.org/HazelHe/sketches/HJdmeGHLZ
// ims-Hazel-2025-03

// Attribution:
// 1. Coding Train / Daniel Shiffman
// 5.20 Matter.js tutorial Constraints
// https://www.youtube.com/watch?v=szztTszPp-8
//major components of the code are from this tutorial
// 2. gradient background
// https://editor.p5js.org/J_Silva/sketches/mJslozHWg
//3.chatGPT: helping me with adjusting the moving pattern and spring, making it smooth and vivid


const {
    Engine,
    World,
    Bodies,
    Composite,
    Constraint
} = Matter;

let engine;
let world;
let particles = [];
let boundaries = [];
let grid = [];
let springs = [];
let mic;
let button = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    button.fullScreenBtn = createButton('Full Screen');
    button.fullScreenBtn.mousePressed(full_screen_action);
    button.fullScreenBtn.style('font-size:30px');

    let cols = 40;
    let spacing = 370 / cols;
    let rows = Math.floor((windowHeight - 170) / spacing * 0.6);

    let curtainWidth = (cols - 1) * spacing;
    let startX = (width - curtainWidth) / 2;

    mic = new p5.AudioIn();

    // particle grid
    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            let x = startX + i * spacing;
            let y = 35 + j * spacing;
            let fixed = j === 0 && (i % 3 === 0);
            let p = new Particle(x, y, 5, fixed);
            grid[i][j] = p;
            particles.push(p);
        }
    }

    // spring
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i > 0) {
                let constraint = Constraint.create({
                    bodyA: grid[i][j].body,
                    bodyB: grid[i - 1][j].body,
                    length: spacing,
                    stiffness: 0.15,
                });
                World.add(world, constraint);
                springs.push(constraint);
            }
            if (j > 0) {
                let constraint = Constraint.create({
                    bodyA: grid[i][j].body,
                    bodyB: grid[i][j - 1].body,
                    length: spacing,
                    stiffness: 0.15,
                });
                World.add(world, constraint);
                springs.push(constraint);
            }
        }
    }

    // ground
    boundaries.push(new Boundary(width / 2, windowHeight, width, 10, 0));
}

function mousePressed() {
    userStartAudio();
    getAudioContext().resume().then(() => {
        mic.start();
        console.log("🎤 Mic started!");
    });
}

function draw() {
    background(255,105,180);
    Engine.update(engine);

    //window
    let rectTopMargin = 40;
    let rectHeightRatio = 0.5;
    let curtainWidth = (40 - 1) * (370 / 40);
    let rectW = curtainWidth + 40;
    let rectH = height * rectHeightRatio;
    let rectX = width / 2 - rectW / 2;
    let rectY = rectTopMargin;

    noStroke();
    setVerticalGradient(rectX, rectY, rectW, rectH, color(20, 153, 255, 150), color(230, 255, 255, 150));

    let vol = mic.getLevel();
    console.log("Mic level:", vol);

    let windThreshold = 0.01;
    let windStrength = constrain((vol - windThreshold) * 0.05, 0, 0.02);

    if (windStrength > 0) {
        for (let i = 0; i < particles.length; i++) {
            let n = noise(i * 0.1 + frameCount * 0.01);
            let wind = map(n, 0, 1, -0.005, 0.005); // base turbulence
            let force = createVector(windStrength + wind, 0); 
            Matter.Body.applyForce(particles[i].body, particles[i].body.position, force);
        } //GPT wrote this for me
    }

    // spring
    stroke(255, 204, 250);
    strokeWeight(2);
    for (let i = 0; i < springs.length; i++) {
        let s = springs[i];
        let posA = s.bodyA.position;
        let posB = s.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
    }

    // ground and circle
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].show();
    }
    //text("Wind strength: " + nf(windStrength, 1, 4), 20, 30);
}

function setVerticalGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function full_screen_action() {
    button.fullScreenBtn.remove();
    fullscreen(true);
    setTimeout(() => {
        resizeCanvas(windowWidth, windowHeight);
    }, 500);
}
