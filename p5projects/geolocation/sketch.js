// https://editor.p5js.org/jht9629-nyu/sketches/DRpj2TQRg
// geolocation

function setup() {
  createCanvas(400, 200);
  createButton("Show location").mousePressed( geoFindMe );
  // createElement('br');
  createP().id("status");
  // createElement('br');
  createA("https://www.google.com/", "test link", "_blank").id("map-link");
}

function draw() {
  background(220);
}

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} ° Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// https://editor.p5js.org/jht1493/sketches/MjtAJsadM
// geolocation 1

// dynamically created anchor opens in frame
// added target='_blank' and opens in tab

// document.querySelector('#find-me').addEventListener('click', geoFindMe);

// https://editor.p5js.org/jht1493/sketches/MjtAJsadM
// geolocation 1

// https://editor.p5js.org/jht1493/sketches/S99w4Whth
// geolocation

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
