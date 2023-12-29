// https://editor.p5js.org/jht9629-nyu/sketches/G6Zr5SBuq
// rotationX

// https://p5js.org/reference/#/p5/rotationX

let my = { width: 400, height: 400 };

function setup() {
  createCanvas(my.width, my.height, WEBGL);

  normalMaterial();

  my.permBtn = createButton("permission");
  my.permBtn.mousePressed(permissionAction);
}

function draw() {
  background(200);
  // rotateZ(radians(rotationZ));
  // rotateX(radians(rotationX));
  rotateY(radians(rotationY));
  box(200, 200, 200);
}

// Need for iOS mobile device to get motion events
function permissionAction() {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    // (optional) Do something before API request prompt.
    DeviceMotionEvent.requestPermission()
      .then((response) => {
        console.log("requestPermission response", response);
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
