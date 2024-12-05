// https://editor.p5js.org/jz3407/sketches/RqIfacKp-
// 1202combine-Jessie

//JESSIE ZHAI
//SMILE, YOU'RE NOT ON CAMERA

let bodySegmentation;
let bodyPose;
let poses = [];
let video;
let connections;
let segmentation;
let w = 640;
let h = 480;
let options = {
  maskType: "person",
};
let webcams = [];
let myCam;
let thresholdExceeded = false;
let rainbowGradient = [];
let isHandsTogether = false;
let gradientOpacity = 0;
let gradientCenter = { x: 0, y: 0 };


function preload() {
  bodySegmentation = ml5.bodySegmentation("SelfieSegmentation", options);
    bodyPose = ml5.bodyPose();
}

function setup() {
  pixelDensity(1);
  createCanvas(w, h);
  getVideoDevices();
  
  for (let i = 0; i < 360; i++) {
    rainbowGradient[i] = color(`hsla(${i}, 100%, 50%, 0.3)`);
  }
  

  //start detection in mousePressed() once the canvas is resized based on the current camera selected
  console.log(
    "Press mouse on Canvas to resize Canvas based on connected webcam and start pose detection"
  );
}

// Press mouse to resize Canvas and start pose detection
function mousePressed() {
  if (webcams.length) {
    resizeCanvas(myCam.width, myCam.height);
    bodySegmentation.detectStart(myCam, gotResults);
  bodyPose.detectStart(myCam, gotPoses);
  connections = bodyPose.getSkeleton();
  }
}

// This function was previously hiding in the draw() loop
// callback function for body segmentation
function gotResults(result) {
  segmentation = result;
  // console.log("INSIDEgotresults")
}

function draw() {

  // if any webcams are detected
  if (webcams.length) {
    // Specify camera, check Console
    myCam = webcams[1];

    image(myCam, 0, 0, width, height);

    if (segmentation) {
      blendMode(BLEND);
      background(255, 255, 255);
    

      image(segmentation.mask, 0, 0, width, height);
      filter(BLUR, 10);
      
      blendMode(ADD);
      image(myCam, 0, 0, width, height);
      filter(GRAY);
      image(segmentation.mask, 0, 0, width, height);
    }
  }
  
  drawGradient();
}

function drawGradient(){
  if (poses.length > 0) {
    let leftWrist = poses[0].keypoints[9];
    let rightWrist = poses[0].keypoints[10];
    
    if (leftWrist.confidence > 0.1 && rightWrist.confidence > 0.1) {
      let distance = dist(leftWrist.x, leftWrist.y, rightWrist.x, rightWrist.y);
      isHandsTogether = distance < 100;
      
      // Calculate center point between hands
      gradientCenter.x = (leftWrist.x + rightWrist.x) / 2;
      gradientCenter.y = (leftWrist.y + rightWrist.y) / 2;
      
      if (isHandsTogether && gradientOpacity < 1) {
        gradientOpacity = min(gradientOpacity + 0.05, 1);
      } else if (!isHandsTogether && gradientOpacity > 0) {
        gradientOpacity = max(gradientOpacity - 0.05, 0);
      }
    }
  }
  
  // Draw circular rainbow gradient
  if (gradientOpacity > 0) {
    let maxRadius = 300;
    for (let radius = maxRadius; radius > 0; radius -= 2) {
      let gradientIndex = (frameCount + radius) % 360;
      let c = rainbowGradient[gradientIndex];
      c.setAlpha(255 * gradientOpacity * (radius / maxRadius));
      stroke(c);
      noFill();
      circle(gradientCenter.x, gradientCenter.y, radius * 2);
    }
  }
}


function gotPoses(results) {
  poses = results;
  // console.log("insidegotposes");
}

/*------------------------------------*\
  Functions for Video Devices
\*------------------------------------*/

function getVideoDevices() {
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      return devices.filter((device) => device.kind === "videoinput");
    })
    .then((filtered) => getVideo(filtered))
    .catch((err) => {
      if (err.message.substring(0, 19) === "cam.getCapabilities")
        alert(
          "InputDeviceInfo.getCapabilities() is not supported in this browser. Try Chrome or MS Edge."
        );
      else console.warn(`${err.name}: ${err.message}`);
    });
}

function getVideo(cams) {
  for (let cam of cams) {
    let index = cams.indexOf(cam);
    let capabilities = cam.getCapabilities();
    let constraints = {
      audio: false,
      video: {
        deviceId: `${cam.deviceId}`,
        width: `${capabilities.width.max}`,
        height: `${capabilities.height.max}`,
      },
    };
    webcams[index] = createCapture(constraints);
    webcams[index].hide();

    console.log(
      `Connected camera: webcams[${index}]\n${cam.label}\nMax width:\t${constraints.video.width}\nMax height:\t${constraints.video.height}\n`
    );
  }
}
