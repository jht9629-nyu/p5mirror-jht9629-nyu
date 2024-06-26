// https://editor.p5js.org/jht9629-nyu/sketches/wgiqYc19o
// https://editor.p5js.org/re7l/sketches/H1fDxrovm
// Futility_Clarity by Carrie Wang

let myRec = new p5.SpeechRec; // new P5.SpeechRec object
myRec.continuous = false; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

let r, g, b, a;

let interval = 1;
let speed = 1;

let gameStopped = 0;

let capture;



function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);

    capture = createCapture(VIDEO);
    capture.hide();

    myRec.start(); // start engine
    myRec.onResult = parseResult; // recognition callback
    myRec.onEnd = restartRec;

}

function draw() {
    background(0);

    push();
    translate(width, 0); // move to far corner
    scale(-1.0, 1.0); // flip x-axis backwards
    image(capture, 0, 0, width, width * capture.height / capture.width);
    pop();


    loadPixels();
    for (let x = 0; x < width; x += interval) {
        for (let y = 0; y < height; y += interval) {
            let index = (x + y * width) * 4;
            r = pixels[index + 0];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];

            for (let newX = x; newX < x + interval; newX++) {
                for (let newY = y; newY < y + interval; newY++) {
                    let newIndex = (newX + newY * width) * 4;
                    pixels[newIndex + 0] = r;
                    pixels[newIndex + 1] = g;
                    pixels[newIndex + 2] = b;
                    pixels[newIndex + 3] = a;

                }
            }
        }
    }
    updatePixels();
    interval += speed;
    if (interval >= 200 || interval <= 1) {
        speed *= -1;
    }

    if (gameStopped == 0) {
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(24);
        text('GOAL: ACHIEVE 50% CLARITY', width / 2, height / 2 - 20);
        textSize(14);
        text('Say "stop" to see result.', width / 2, height / 2 + 20);
    }

    if (gameStopped == 1) {
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(24);
        text('YOU HAVE ACHIEVED ' + (100 - interval / 2) + '% CLARITY \n' + 'DEVIATION: ' + (100 - interval / 2 - 50), width / 2, height / 2 - 20);
        textSize(14);
        text('Say "restart" to try again.', width / 2, height / 2 + 20);
    }
}


function parseResult() {
    // recognition system will often append words into phrases. 
    // so hack here is to only use the last word:

    let lowStr = myRec.resultString.toLowerCase();
    let mostrecentword = lowStr.split(' ').pop();


    // The effects
    if (mostrecentword.indexOf("stop") !== -1) {
        speed = 0;
        gameStopped = 1;
    } else if (mostrecentword.indexOf("restart") !== -1) {
        interval = 1;
        speed = 1;
        gameStopped = 0;
    }

    console.log(mostrecentword);
}


function restartRec() {
    print("end");
    myRec.start();
}
