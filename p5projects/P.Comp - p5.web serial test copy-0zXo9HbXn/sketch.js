// https://editor.p5js.org/jht9629-nyu/sketches/0zXo9HbXn
// use function myImage to center image vertically 
// https://editor.p5js.org/jackienam/sketches/Ax2l7FiTn
// P.Comp - p5.web serial test

// // Let's Cook Up a Story - p5.js Sketch
// // Serial communication with Arduino Nano 33 IoT using Web Serial API

//[FOURTH TRIAL]

// Let's Cook Up a Story - p5.js Sketch
// Serial communication with Arduino Nano 33 IoT using Web Serial API

// ===== WEB SERIAL VARIABLES =====
let port;
let reader;
let inputBuffer = "";
let isConnected = false;

// ===== STATE MANAGEMENT =====
const SCENE = {
  TITLE: "title",
  SELECTION: "selection",
  ALL_PLACED: "allPlaced",
  ANIMATING: "animating",
  TRANSITION_VIDEO: "transitionVideo",
  STORY_VIDEO: "storyVideo",
  END: "end",
};

let currentScene = SCENE.TITLE;
let previousScene = null;

// ===== ITEM DATA =====
// Item codes from Arduino: 0=empty, 1=220Ω, 2=1kΩ, 3=100kΩ
const ITEM_EMPTY = 0;
const ITEM_220 = 1; // Snowman, Taste, Pie
const ITEM_1K = 2; // Santa, Build, Gingerbread
const ITEM_100K = 3; // Reindeer, Bake, HotChoco

// Current items placed
let circleItem = ITEM_EMPTY;
let triangleItem = ITEM_EMPTY;
let squareItem = ITEM_EMPTY;

// Previous items (for detecting changes)
let prevCircleItem = ITEM_EMPTY;
let prevTriangleItem = ITEM_EMPTY;
let prevSquareItem = ITEM_EMPTY;

// Store items when video starts (so we know what video to play)
let lockedCircleItem = ITEM_EMPTY;
let lockedTriangleItem = ITEM_EMPTY;
let lockedSquareItem = ITEM_EMPTY;

// ===== LID DETECTION WITH HYSTERESIS =====
let lidClosed = false;
let lidRawValue = 1023;
const LID_CLOSE_THRESHOLD = 80; // Must go below this to count as "closing" (closed is below 60)
const LID_OPEN_THRESHOLD = 120; // Must go above this to count as "opening" (open is 150+)
const LID_HOLD_TIME = 1000; // Must stay closed for 1 second
let lidCloseStartTime = 0;
let lidConfirmedClosed = false;

// ===== ASSET POSITIONS (as ratios of 1920x1080) =====
// Figma top-left coordinates: circle x=303, triangle x=746, square x=1189, y=366
// Item size: 428x428
// Converting to center coordinates (add 214 to each):
// Circle center: x=517, y=580
// Triangle center: x=960, y=580
// Square center: x=1403, y=580
const CIRCLE_POS_RATIO = { x: 517 / 1920, y: 580 / 1080 };
const TRIANGLE_POS_RATIO = { x: 960 / 1920, y: 580 / 1080 };
const SQUARE_POS_RATIO = { x: 1403 / 1920, y: 580 / 1080 };
const ITEM_SIZE_RATIO = 428 / 1080; // Relative to height
const CENTER_BOTTOM_RATIO = { x: 0.5, y: 900 / 1080 };

// Actual positions (calculated in draw based on canvas size)
let circlePos, trianglePos, squarePos, itemSize, centerBottom;

// ===== ANIMATION VARIABLES =====
let animationProgress = 0;
const ANIMATION_SPEED = 0.02;
let itemPositions = {
  circle: { x: 0, y: 0, size: 0 },
  triangle: { x: 0, y: 0, size: 0 },
  square: { x: 0, y: 0, size: 0 },
};

// ===== FADE VARIABLES =====
let fadeAlpha = 0;
let fadeDirection = 0; // 0=none, 1=fading out, -1=fading in
const FADE_SPEED = 5;

// ===== ASSETS =====
let titleBg, selectionBg;
let stitchCircle, stitchTriangle, stitchSquare;
let snowman, santa, reindeer;
let taste, build, bake;
let pie, gingerbread, hotchoco;
let transitionVideo, storyVideo;
let jingleSound, bellSound, cookingSound;
let mountainsFont;

// ===== VIDEO URL =====
const VIDEO_BASE_URL = "https://jackienamdesign.github.io/finalprojectvideo/";

// ===== MAPPING FUNCTIONS =====
function getCircleImageName(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return "snowman";
    case ITEM_1K:
      return "santa";
    case ITEM_100K:
      return "reindeer";
    default:
      return null;
  }
}

function getTriangleImageName(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return "taste";
    case ITEM_1K:
      return "build";
    case ITEM_100K:
      return "bake";
    default:
      return null;
  }
}

function getSquareImageName(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return "pie";
    case ITEM_1K:
      return "gingerbread";
    case ITEM_100K:
      return "hotchoco";
    default:
      return null;
  }
}

function getCircleImage(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return snowman;
    case ITEM_1K:
      return santa;
    case ITEM_100K:
      return reindeer;
    default:
      return stitchCircle;
  }
}

function getTriangleImage(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return taste;
    case ITEM_1K:
      return build;
    case ITEM_100K:
      return bake;
    default:
      return stitchTriangle;
  }
}

function getSquareImage(itemCode) {
  switch (itemCode) {
    case ITEM_220:
      return pie;
    case ITEM_1K:
      return gingerbread;
    case ITEM_100K:
      return hotchoco;
    default:
      return stitchSquare;
  }
}

function getStoryVideoURL() {
  let circleName = getCircleImageName(lockedCircleItem);
  let triangleName = getTriangleImageName(lockedTriangleItem);
  let squareName = getSquareImageName(lockedSquareItem);

  if (circleName && triangleName && squareName) {
    return (
      VIDEO_BASE_URL +
      circleName +
      "-" +
      triangleName +
      "-" +
      squareName +
      ".mp4"
    );
  }
  return null;
}

// ===== PRELOAD =====
function preload() {
  // Backgrounds
  titleBg = loadImage("title-bg.png");
  selectionBg = loadImage("selection-bg.png");

  // Stitch placeholders
  stitchCircle = loadImage("stitch-circle.png");
  stitchTriangle = loadImage("stitch-triangle.png");
  stitchSquare = loadImage("stitch-square.png");

  // Circle items (Subject)
  snowman = loadImage("snowman.png");
  santa = loadImage("santa.png");
  reindeer = loadImage("reindeer.png");

  // Triangle items (Verb)
  taste = loadImage("taste.png");
  build = loadImage("build.png");
  bake = loadImage("bake.png");

  // Square items (Object)
  pie = loadImage("pie.png");
  gingerbread = loadImage("gingerbread.png");
  hotchoco = loadImage("hotchoco.png");

  // Font
  mountainsFont = loadFont("MountainsofChristmas-Bold.ttf");

  // Sounds (placeholders) - UNCOMMENT WHEN YOU HAVE THE FILES
  // soundFormats('mp3');
  // jingleSound = loadSound('jingle.mp3');
  // bellSound = loadSound('bell.mp3');
  // cookingSound = loadSound('cooking.mp3');
}

// ===== SETUP =====
function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1920, 1080);
  // imageMode(CENTER);
  textAlign(CENTER, CENTER);

  // Create connect button for Web Serial
  let connectButton = createButton("Connect to Arduino");
  connectButton.position(10, 10);
  connectButton.style("font-size", "16px");
  connectButton.style("padding", "10px 20px");
  connectButton.style("z-index", "1000");
  connectButton.mousePressed(connectSerial);

  console.log("Let's Cook Up a Story - Ready!");
  console.log('Click "Connect to Arduino" button to start');
}

// ===== WEB SERIAL FUNCTIONS =====
async function connectSerial() {
  try {
    // Request port access
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    isConnected = true;
    console.log("Serial port opened!");

    // Start reading
    readSerial();
  } catch (err) {
    console.log("Serial connection error:", err);
  }
}

async function readSerial() {
  const textDecoder = new TextDecoderStream();
  const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
  reader = textDecoder.readable.getReader();

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      if (value) {
        // Add to buffer and process complete lines
        inputBuffer += value;
        let lines = inputBuffer.split("\n");

        // Process all complete lines (keep incomplete line in buffer)
        inputBuffer = lines.pop();

        for (let line of lines) {
          line = line.trim();
          if (line.length > 0) {
            parseSerialData(line);
          }
        }
      }
    }
  } catch (err) {
    console.log("Serial read error:", err);
  }
}

// ===== LEGACY SERIAL EVENT HANDLERS (not used with Web Serial) =====
function serverConnected() {
  console.log("Connected to server");
}

function portOpen() {
  console.log("Serial port opened");
}

function serialError(err) {
  console.log("Serial error: " + err);
}

function portClose() {
  console.log("Serial port closed");
}

function parseSerialData(data) {
  // Log ALL incoming data for debugging
  console.log("Serial received:", data);

  // Skip debug lines (they contain text like "Circle:", "Triangle:", etc.)
  if (
    data.includes("Circle") ||
    data.includes("Triangle") ||
    data.includes("Square") ||
    data.includes("===") ||
    data.includes("Place") ||
    data.includes("Close") ||
    data.includes("Let's")
  ) {
    console.log("  -> Skipped (debug line)");
    return;
  }

  // Parse comma-separated values
  // Format: circleItem,triangleItem,squareItem,allPlaced,lidClosed,lightValue
  let values = data.split(",");
  console.log("  -> Split into", values.length, "values:", values);

  if (values.length >= 6) {
    // Store previous values for change detection
    prevCircleItem = circleItem;
    prevTriangleItem = triangleItem;
    prevSquareItem = squareItem;

    // Parse new values
    circleItem = parseInt(values[0]);
    triangleItem = parseInt(values[1]);
    squareItem = parseInt(values[2]);
    // values[3] is allPlaced from Arduino (we calculate ourselves)
    // values[4] is lidClosed from Arduino (we use our own hysteresis)
    lidRawValue = parseInt(values[5]);

    // Check if items were just placed (for bell sound)
    if (circleItem !== prevCircleItem && circleItem !== ITEM_EMPTY) {
      playBellSound();
    }
    if (triangleItem !== prevTriangleItem && triangleItem !== ITEM_EMPTY) {
      playBellSound();
    }
    if (squareItem !== prevSquareItem && squareItem !== ITEM_EMPTY) {
      playBellSound();
    }

    // Process lid with hysteresis
    processLidState();

    // Update scene based on state
    updateScene();
  }
}

function processLidState() {
  if (!lidClosed) {
    // Currently open - check if closing
    if (lidRawValue < LID_CLOSE_THRESHOLD) {
      if (lidCloseStartTime === 0) {
        lidCloseStartTime = millis();
      } else if (millis() - lidCloseStartTime > LID_HOLD_TIME) {
        lidClosed = true;
        lidConfirmedClosed = true;
        console.log("Lid confirmed CLOSED");
      }
    } else {
      lidCloseStartTime = 0; // Reset if went back above threshold
    }
  } else {
    // Currently closed - check if opening
    if (lidRawValue > LID_OPEN_THRESHOLD) {
      lidClosed = false;
      lidCloseStartTime = 0;
      console.log("Lid OPENED");
    }
  }
}

function playBellSound() {
  if (bellSound && bellSound.isLoaded()) {
    bellSound.play();
  }
}

function updateScene() {
  let allPlaced =
    circleItem !== ITEM_EMPTY &&
    triangleItem !== ITEM_EMPTY &&
    squareItem !== ITEM_EMPTY;
  let anyPlaced =
    circleItem !== ITEM_EMPTY ||
    triangleItem !== ITEM_EMPTY ||
    squareItem !== ITEM_EMPTY;

  // Scene state machine
  switch (currentScene) {
    case SCENE.TITLE:
      if (anyPlaced) {
        changeScene(SCENE.SELECTION);
        // Stop jingle, could add selection music here
        if (jingleSound && jingleSound.isPlaying()) {
          jingleSound.stop();
        }
      }
      break;

    case SCENE.SELECTION:
      if (!anyPlaced) {
        changeScene(SCENE.TITLE);
        // Restart jingle
        // if (jingleSound) jingleSound.loop();
      } else if (allPlaced) {
        changeScene(SCENE.ALL_PLACED);
      }
      break;

    case SCENE.ALL_PLACED:
      if (!allPlaced) {
        changeScene(SCENE.SELECTION);
      } else if (lidConfirmedClosed) {
        // Lock in the current items for video
        lockedCircleItem = circleItem;
        lockedTriangleItem = triangleItem;
        lockedSquareItem = squareItem;

        // Start animation
        changeScene(SCENE.ANIMATING);
        animationProgress = 0;
        resetItemPositions();
      }
      break;

    case SCENE.END:
      if (!lidClosed) {
        // Lid opened - stop and remove the video
        if (storyVideo) {
          storyVideo.stop();
          storyVideo.remove();
          storyVideo = null;
        }

        // Go back to showing items
        if (allPlaced) {
          changeScene(SCENE.ALL_PLACED);
        } else if (anyPlaced) {
          changeScene(SCENE.SELECTION);
        } else {
          changeScene(SCENE.TITLE);
        }
        lidConfirmedClosed = false;
      }
      break;
  }
}

function changeScene(newScene) {
  previousScene = currentScene;
  currentScene = newScene;
  console.log("Scene changed: " + previousScene + " -> " + currentScene);
}

function resetItemPositions() {
  itemPositions = {
    circle: { x: circlePos.x, y: circlePos.y, size: itemSize },
    triangle: { x: trianglePos.x, y: trianglePos.y, size: itemSize },
    square: { x: squarePos.x, y: squarePos.y, size: itemSize },
  };
}

function calculatePositions() {
  circlePos = { x: width * CIRCLE_POS_RATIO.x, y: height * CIRCLE_POS_RATIO.y };
  trianglePos = {
    x: width * TRIANGLE_POS_RATIO.x,
    y: height * TRIANGLE_POS_RATIO.y,
  };
  squarePos = { x: width * SQUARE_POS_RATIO.x, y: height * SQUARE_POS_RATIO.y };
  itemSize = height * ITEM_SIZE_RATIO;
  centerBottom = {
    x: width * CENTER_BOTTOM_RATIO.x,
    y: height * CENTER_BOTTOM_RATIO.y,
  };
}

// ===== DRAW =====
function draw() {
  // translate(0,100);
  background(0);

  // Calculate positions based on current canvas size
  calculatePositions();

  switch (currentScene) {
    case SCENE.TITLE:
      drawTitleScene();
      break;

    case SCENE.SELECTION:
      drawSelectionScene();
      break;

    case SCENE.ALL_PLACED:
      drawAllPlacedScene();
      break;

    case SCENE.ANIMATING:
      drawAnimatingScene();
      break;

    case SCENE.TRANSITION_VIDEO:
      drawTransitionVideo();
      break;

    case SCENE.STORY_VIDEO:
      drawStoryVideo();
      break;

    case SCENE.END:
      drawEndScene();
      break;
  }

  // Draw fade overlay
  if (fadeAlpha > 0) {
    fill(255, fadeAlpha);
    noStroke();
    rect(0, 0, width, height);
  }

  // Update fade
  if (fadeDirection !== 0) {
    fadeAlpha += fadeDirection * FADE_SPEED;
    fadeAlpha = constrain(fadeAlpha, 0, 255);
  }

  // Debug info (remove for production)
  drawDebugInfo();
}

// Draw the image and scale it to fit within the canvas.
// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])

function myImage(img) {
  // image(img, 0, 0, width/2, height/2, 0, 0, img.width, img.height, CONTAIN);
  // image(img, width/2, height/2, width, height)
  let ratio = img.height / img.width;
  let dx = 0;
  let dy = 0;
  let dWidth = width;
  let dHeight = width * ratio;
  // center the image vertially
  dy = (height - dHeight) / 2;
  // console.log('dy', dy)
  image(img, dx, dy, dWidth, dHeight, 0, 0, img.width, img.height);
}

function drawTitleScene() {
  // image(titleBg, width/2, height/2, width, height);
  myImage(titleBg);
}

function drawSelectionScene() {
  // image(selectionBg, width/2, height/2, width, height);
  myImage(selectionBg);

  // Draw items or stitch placeholders
  let circleImg = getCircleImage(circleItem);
  let triangleImg = getTriangleImage(triangleItem);
  let squareImg = getSquareImage(squareItem);

  image(circleImg, circlePos.x, circlePos.y, itemSize, itemSize);
  image(triangleImg, trianglePos.x, trianglePos.y, itemSize, itemSize);
  image(squareImg, squarePos.x, squarePos.y, itemSize, itemSize);
}

function drawAllPlacedScene() {
  // image(selectionBg, width/2, height/2, width, height);
  myImage(selectionBg);

  // Draw all three items
  let circleImg = getCircleImage(circleItem);
  let triangleImg = getTriangleImage(triangleItem);
  let squareImg = getSquareImage(squareItem);

  image(circleImg, circlePos.x, circlePos.y, itemSize, itemSize);
  image(triangleImg, trianglePos.x, trianglePos.y, itemSize, itemSize);
  image(squareImg, squarePos.x, squarePos.y, itemSize, itemSize);
}

function drawAnimatingScene() {
  // image(selectionBg, width/2, height/2, width, height);
  myImage(selectionBg);

  // Update animation progress
  animationProgress += ANIMATION_SPEED;

  // Clamp progress to 1.0 max
  let clampedProgress = min(animationProgress, 1.0);

  if (animationProgress >= 1) {
    // Animation complete - start fade to white
    fadeDirection = 1;
    if (fadeAlpha >= 255) {
      // Fade complete - start transition video
      changeScene(SCENE.TRANSITION_VIDEO);
      startTransitionVideo();
      fadeDirection = -1; // Fade back in
    }
  }

  // Only draw items if animation hasn't completed
  if (clampedProgress < 1) {
    // Lerp positions toward center bottom
    let easeProgress = easeInOutCubic(clampedProgress);
    let minSize = 0; // Shrink to nothing

    itemPositions.circle.x = lerp(circlePos.x, centerBottom.x, easeProgress);
    itemPositions.circle.y = lerp(circlePos.y, centerBottom.y, easeProgress);
    itemPositions.circle.size = lerp(itemSize, minSize, easeProgress);

    itemPositions.triangle.x = lerp(
      trianglePos.x,
      centerBottom.x,
      easeProgress
    );
    itemPositions.triangle.y = lerp(
      trianglePos.y,
      centerBottom.y,
      easeProgress
    );
    itemPositions.triangle.size = lerp(itemSize, minSize, easeProgress);

    itemPositions.square.x = lerp(squarePos.x, centerBottom.x, easeProgress);
    itemPositions.square.y = lerp(squarePos.y, centerBottom.y, easeProgress);
    itemPositions.square.size = lerp(itemSize, minSize, easeProgress);

    // Draw items at animated positions
    let circleImg = getCircleImage(lockedCircleItem);
    let triangleImg = getTriangleImage(lockedTriangleItem);
    let squareImg = getSquareImage(lockedSquareItem);

    image(
      circleImg,
      itemPositions.circle.x,
      itemPositions.circle.y,
      itemPositions.circle.size,
      itemPositions.circle.size
    );
    image(
      triangleImg,
      itemPositions.triangle.x,
      itemPositions.triangle.y,
      itemPositions.triangle.size,
      itemPositions.triangle.size
    );
    image(
      squareImg,
      itemPositions.square.x,
      itemPositions.square.y,
      itemPositions.square.size,
      itemPositions.square.size
    );
  }
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function startTransitionVideo() {
  // Create and play transition video
  transitionVideo = createVideo(VIDEO_BASE_URL + "transition-vid.mp4");
  transitionVideo.hide(); // Hide HTML element, we'll draw to canvas
  transitionVideo.play();
  transitionVideo.onended(onTransitionVideoEnd);

  // Play cooking sound
  if (cookingSound && cookingSound.isLoaded()) {
    cookingSound.play();
  }
}

function onTransitionVideoEnd() {
  // Fade to white then start story video
  fadeDirection = 1;
}

function drawTransitionVideo() {
  if (transitionVideo) {
    // image(transitionVideo, width/2, height/2, width, height);
    myImage(transitionVideo);
  }

  // Check if fade is complete and transition video ended
  if (fadeAlpha >= 255 && transitionVideo && transitionVideo.elt.ended) {
    transitionVideo.remove();
    changeScene(SCENE.STORY_VIDEO);
    startStoryVideo();
    fadeDirection = -1; // Fade back in
  }
}

function startStoryVideo() {
  let videoURL = getStoryVideoURL();
  if (videoURL) {
    storyVideo = createVideo(videoURL);
    storyVideo.hide();
    storyVideo.play();
    storyVideo.onended(onStoryVideoEnd);
    console.log("Playing story video: " + videoURL);
  } else {
    console.error("Could not determine story video URL");
    changeScene(SCENE.END);
  }

  // Stop cooking sound
  if (cookingSound && cookingSound.isPlaying()) {
    cookingSound.stop();
  }
}

function onStoryVideoEnd() {
  changeScene(SCENE.END);
  // Loop the video in end scene
  if (storyVideo) {
    storyVideo.loop();
  }
}

function drawStoryVideo() {
  if (storyVideo) {
    image(storyVideo, width / 2, height / 2, width, height);
  }
}

function drawEndScene() {
  // Show looping story video with text overlay
  if (storyVideo) {
    image(storyVideo, width / 2, height / 2, width, height);
  }

  // Draw "Open the lid to cook up another story..." text
  // Original: 60px at y=910 on 1080p
  let textY = height * (910 / 1080);
  let fontSize = height * (60 / 1080);
  let strokeW = height * (3 / 1080);

  // Use custom font if loaded, otherwise fallback
  if (mountainsFont) {
    textFont(mountainsFont);
  } else {
    textFont("Georgia");
  }
  textAlign(CENTER, CENTER);
  textSize(fontSize);
  strokeWeight(strokeW);
  stroke("#490000");
  fill("#DFC572");
  text("Open the lid to cook up another story...", width / 2, textY);
}

function drawDebugInfo() {
  // Debug display (remove for production)
  fill(255);
  noStroke();
  textFont("Arial");
  textSize(14);
  textAlign(LEFT, TOP);

  let debugText =
    "Scene: " +
    currentScene +
    "\n" +
    "Circle: " +
    circleItem +
    " | Triangle: " +
    triangleItem +
    " | Square: " +
    squareItem +
    "\n" +
    "Lid Raw: " +
    lidRawValue +
    " | Lid Closed: " +
    lidClosed +
    " | Confirmed: " +
    lidConfirmedClosed +
    "\n" +
    "Animation: " +
    animationProgress.toFixed(2) +
    " | Fade: " +
    fadeAlpha.toFixed(0);

  text(debugText, 10, 10);

  textAlign(CENTER, CENTER); // Reset
}

// ===== KEYBOARD CONTROLS FOR TESTING =====
function keyPressed() {
  // Fullscreen toggle
  if (key === "f" || key === "F") {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  // For testing without Arduino
  if (key === "1")
    circleItem = circleItem === ITEM_EMPTY ? ITEM_220 : ITEM_EMPTY;
  if (key === "2")
    circleItem = circleItem === ITEM_EMPTY ? ITEM_1K : ITEM_EMPTY;
  if (key === "3")
    circleItem = circleItem === ITEM_EMPTY ? ITEM_100K : ITEM_EMPTY;

  if (key === "4")
    triangleItem = triangleItem === ITEM_EMPTY ? ITEM_220 : ITEM_EMPTY;
  if (key === "5")
    triangleItem = triangleItem === ITEM_EMPTY ? ITEM_1K : ITEM_EMPTY;
  if (key === "6")
    triangleItem = triangleItem === ITEM_EMPTY ? ITEM_100K : ITEM_EMPTY;

  if (key === "7")
    squareItem = squareItem === ITEM_EMPTY ? ITEM_220 : ITEM_EMPTY;
  if (key === "8")
    squareItem = squareItem === ITEM_EMPTY ? ITEM_1K : ITEM_EMPTY;
  if (key === "9")
    squareItem = squareItem === ITEM_EMPTY ? ITEM_100K : ITEM_EMPTY;

  if (key === "l" || key === "L") {
    lidClosed = !lidClosed;
    lidConfirmedClosed = lidClosed;
    lidRawValue = lidClosed ? 700 : 1020;
  }

  if (key === "r" || key === "R") {
    // Reset
    circleItem = ITEM_EMPTY;
    triangleItem = ITEM_EMPTY;
    squareItem = ITEM_EMPTY;
    lidClosed = false;
    lidConfirmedClosed = false;
    currentScene = SCENE.TITLE;
  }

  updateScene();
}

// ===== WINDOW RESIZE =====
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized_old() {
  // Keep 16:9 aspect ratio
  let targetRatio = 16 / 9;
  let windowRatio = windowWidth / windowHeight;

  if (windowRatio > targetRatio) {
    // Window is wider than 16:9
    resizeCanvas(windowHeight * targetRatio, windowHeight);
  } else {
    // Window is taller than 16:9
    resizeCanvas(windowWidth, windowWidth / targetRatio);
  }
}
