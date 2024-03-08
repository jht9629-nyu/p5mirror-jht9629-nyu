// https://editor.p5js.org/jht9629-nyu/sketches/TXvXSJY6L
// rotationXYZ

let my = { width: 400, height: 400, rotateX: 1, rotateY: 0, rotateZ: 0 };

function setup() {
  createCanvas(my.width, my.height, WEBGL);

  normalMaterial();

  create_ui();
}

function draw() {
  background(200);
  if (my.rotateZ) rotateZ(radians(rotationZ));
  if (my.rotateX) rotateX(radians(rotationX));
  if (my.rotateY) rotateY(radians(rotationY));
  box(200, 200, 200);
}

function create_ui() {
  my.permBtn = createButton("permission");
  my.permBtn.mousePressed(permissionAction);

  create_checkBox("rotateX");
  create_checkBox("rotateY");
  create_checkBox("rotateZ");
}

function create_checkBox(prop) {
  let chk = createCheckbox(prop, my[prop]);
  // chk.style('display:inline');
  chk.changed(function () {
    my[prop] = this.checked();
  });
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

// https://p5js.org/reference/#/p5/rotationX

// https://editor.p5js.org/jht9629-nyu/sketches/G6Zr5SBuq
// rotationX
