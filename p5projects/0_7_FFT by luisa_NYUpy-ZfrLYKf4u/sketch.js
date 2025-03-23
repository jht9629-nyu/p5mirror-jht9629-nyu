// https://editor.p5js.org/jht9629-nyu/sketches/ZfrLYKf4u
// 0_7_FFT by luisa_NYU
// https://editor.p5js.org/luisa_NYU/sketches/2NvxT9HDV
// 0_7_FFT by luisa_NYU

// why no sound?


// const sound = new SimplePlayer("sounds/Ambiente_3.wav");
const sound = new SimplePlayer("sounds/Ambiente_3.mp3");
sound.toDestination();
let analyzer = new Tone.FFT(512);
sound.connect(analyzer);

let loaded = false;

function setup(){
  createCanvas(100,100);
}

function draw(){
  if(loaded){
    background(255);
    let frequencyData = analyzer.getValue();

    noStroke();
    fill(0);
    beginShape();
    vertex(0, height);
    // needs review / explanation - log(i) can be zero
    for (let i = 0; i < frequencyData.length; i++) {
      let x = map(log(i), 0, log(frequencyData.length), 0, width);
      let y = map(frequencyData[i], -127, 0, height, 0);
      vertex(x, y);
    }
    vertex(width, height);
    endShape();
  }
  else{
    background(220);
    text("loading...", 20, 20);
  }
}

function mouseClicked(){
  if(loaded){
    sound.start();
  }
}

Tone.loaded().then(function(){
  loaded = true;
});

