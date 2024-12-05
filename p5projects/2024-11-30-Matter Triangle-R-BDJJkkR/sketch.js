// https://editor.p5js.org/jht9629-nyu/sketches/R-BDJJkkR
// 2024-11-30-Matter Triangle

    
const { Engine, World, Bodies, Composite, Vertices } = Matter;

let engine;
let world;
let boxes = [];
let ground;

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    // Engine.run is deprecated
    ground = new Boundary(200, height, width, 100);
    Composite.add(world, ground);

}
    
function mousePressed() {
    // boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10,40)));
    boxes.push(new Box(mouseX, mouseY, 50, 50));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    ground.show();
}

// https://editor.p5js.org/codingtrain/sketches/dian0t-5j

// Coding Train / Daniel Shiffman
// 15.7 Matter.js tutorial Basic Implemenation

// Youtube: https://www.youtube.com/watch?v=urR596FsU68

// Note that the syntax in the sketch has been updated. Refer to NOC Chapter 6

// let Engine = Matter.Engine,
//     World = Matter.World,
//     Bodies = Matter.Bodies;

// https://editor.p5js.org/jht9629-nyu/sketches/LdXXFo6gn
// 5.17 Matter.js tutorial

