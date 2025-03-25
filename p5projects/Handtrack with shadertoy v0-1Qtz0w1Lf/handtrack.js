/* 
 *  Derived from Aidan Lincoln's Handtrack to leds
 *  Aidan Lincoln aidanlincoln@nyu.edu
 *  ITP/NYU
 *  Handtrack.js victordibia
 *  https://github.com/victordibia/handtrack.js/
 */


const video = document.getElementById("webCam");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let updateNote = document.getElementById("message");

//turn video on or off
let renderVideo = false;

let videoLoaded = false;
let model = null;
let xCord;
let yCord;
let xCord2;
let yCord2;

const modelParams = {
    flipHorizontal: true,  // flip e.g for video  
    maxNumBoxes: 2,        // maximum number of boxes to detect
    iouThreshold: 0.07,     // ioU threshold for non-max suppression
    scoreThreshold: 0.6,   // confidence threshold for predictions.
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    updateNote.innerText = ""
    startVideo();
});


function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        // console.log("video started", status);
        if (status) {
            updateNote.innerText = ""
            videoLoaded = true
            runDetection()
        } else {
            updateNote.innerText = "Please enable video"
        }
    });
}


function runDetection() {
  model.detect(video).then(predictions => {
    if(predictions[0]){
      let bboxX = predictions[0].bbox[0] + predictions[0].bbox[2]/2;
      let bboxY = predictions[0].bbox[1] + predictions[0].bbox[3]/2;
      //map all the way to edge and make new variable
      xCord = map(bboxX, 50, 500, 0, width);
      yCord = map(bboxY, 90, 300, 0, height);
      if(predictions[1]){
        let bboxX2 = predictions[1].bbox[0] + predictions[1].bbox[2]/2;
        let bboxY2 = predictions[1].bbox[1] + predictions[1].bbox[3]/2;
        xCord2 = bboxX2;
        yCord2 = bboxY2;
      }
      else{
        xCord2 = null;
        yCord2 = null;
      }
    }
    else{
      xCord = null;
      yCord = null;
      xCord2 = null;
      yCord2 = null;
    }
    if(renderVideo){
      model.renderPredictions(predictions, canvas, context, video);
    }
    if (videoLoaded) {
      requestAnimationFrame(runDetection);
    }
  });
}