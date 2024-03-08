let otherVideos = {};
let myVideo;
let myPos = {x: 0, y: 0};
let angle = 0.0;
let p5l;

function setup() {
  createCanvas(400, 400, WEBGL);
  
  let constraints = {audio: true, video: true};
  myVideo = createCapture(constraints, 
    function(stream) {
	  p5l = new p5LiveMedia(this, "CAPTURE", stream, "Shared Space")
	  p5l.on('stream', gotStream);
      p5l.on('disconnect', gotDisconnect);
      p5l.on('data', gotData);
    }
  );  
  myVideo.elt.muted = true;     
  myVideo.hide();
}

function draw() {
  background(220);
  rotateX(angle);
  rotateY(angle);
  
  translate(myPos.x, myPos.y);
  texture(myVideo);
  box(100, 100, 100);
  translate(-(myPos.x), -(myPos.y));
  
  let count = 1;
  for (const id in otherVideos) {
    translate(otherVideos[id].position.x, otherVideos[id].position.y, 0);

    texture(otherVideos[id].stream);
    box(100, 100, 100);

    count++;
  }
  // angle+=0.01;
}

// We got a new stream!
function gotStream(stream, id) {
  stream.hide();
  otherVideos[id] = {"stream":stream, "position":{"x": 0, "y": 0}};
}

function mousePressed() {
  myPos = {x: (mouseX - width/2), y: (mouseY - height/2)};
  print(myPos);
  p5l.send(JSON.stringify(myPos));
}

function mouseDragged() {
  myPos = {x: (mouseX - width/2), y: (mouseY - height/2)};
  print(myPos);
  p5l.send(JSON.stringify(myPos));
}

function gotData(pos, id) {
  print(pos);
  otherVideos[id].position = JSON.parse(pos);
}

function gotDisconnect(id) {
 delete otherVideos[id]; 
}