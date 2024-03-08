// https://editor.p5js.org/jht9629-nyu/sketches/Rdb_xgkkW
// acceleration-scope

let my = { version: 6, width: 200, height: 200 };

function setup() {
  createCanvas(my.width, my.height);

  // angleMode(DEGREES)
  // angleMode(RADIANS)

  let msg = "Version:" + my.version;
  msg += " angleMode:" + angleMode();
  my.log = createDiv(msg);

  my.permBtn = createButton("permission").mousePressed(permissionAction);

  createElement("br");
  my.rotX = createDiv("");
  my.rotY = createDiv("");
  my.rotZ = createDiv("");
  createElement("br");
  my.accelX = createDiv("");
  my.accelY = createDiv("");
  my.accelZ = createDiv("");
}

function draw() {
  background(220);
  my.rotX.html(" rotX:" + rotationX);
  my.rotY.html(" rotY:" + rotationY);
  my.rotZ.html(" rotZ:" + rotationZ);
  my.accelX.html(" accelX:" + accelerationX);
  my.accelY.html(" accelY:" + accelerationY);
  my.accelZ.html(" accelZ:" + accelerationZ);
}

// !!@ rotationX/Y/Z appears to be in DEGREES always

// https://stackoverflow.com/questions/56514116/how-do-i-get-deviceorientationevent-and-devicemotionevent-to-work-on-safari

function permissionAction() {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    // (optional) Do something before API request prompt.
    DeviceMotionEvent.requestPermission()
      .then((response) => {
        console.log('requestPermission response', response)
        // (optional) Do something after API prompt dismissed.
        if (response == "granted") {
          window.addEventListener("devicemotion", (e) => {
            // console.log('devicemotion e', e)
            // console.log('devicemotion e.beta', e.beta)
          });
        }
      })
      .catch(console.error);
  } else {
    alert("DeviceMotionEvent is not defined");
  }
}
// const btn = document.getElementById( "request" );
// btn.addEventListener( "click", permission );
