// https://editor.p5js.org/jht9629-nyu/sketches/lqMJIQoIs
// p5Live many
// This is a test of the p5LiveMedia webrtc library and associated service.
// Open this sketch up 9 times to send video back and forth

let my = {};

function setup() {
  my.roomName = "arbitraryRoomName";
  my.vidWidth = 130;
  my.vidHeight = 200;
  my.allVideos = {};
  
  createCanvas(my.vidWidth*3, my.vidHeight*3); // 393x786

  my.video = createCapture(VIDEO, gotMineConnectOthers);
  my.video.size(my.vidWidth, my.vidHeight);
  my.video.hide();
  my.allVideos["Me"] = my.video;
  
  console.log('width', width, 'height', height);
}

function gotMineConnectOthers(myStream) {
  let p5live = new p5LiveMedia(this, "CAPTURE", myStream, my.roomName);
  p5live.on("stream", gotOtherStream);
  p5live.on("disconnect", lostOtherStream);
}

function draw() {
  background(220);
  stroke(255);
  let x = 0; //for making a grid
  let y = 0;
  for (let id in my.allVideos) {
    let thisStream = my.allVideos[id];
    image(thisStream, x, y, my.vidWidth, my.vidHeight);
    stroke(0);
    text(id, x, y + 20);
    x += my.vidWidth;
    if (x >= width) {
      x = 0;
      y += my.vidHeight;
    }
  }
}

// We got a new stream!
function gotOtherStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  console.log("gotOtherStream", id);
  otherVideo = stream;
  otherVideo.size(my.vidWidth, my.vidHeight);
  my.allVideos[id] = otherVideo;
  otherVideo.hide();
}

function lostOtherStream(id) {
  console.log("lost connection", id);
  delete my.allVideos[id];
}

// https://editor.p5js.org/dano/sketches/pAYsVgG_r
// p5Live  Mutliple Associative Array by Dano
