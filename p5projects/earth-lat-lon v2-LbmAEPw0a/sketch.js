// https://editor.p5js.org/jht9629-nyu/sketches/LbmAEPw0a
// earth-lat-lon v2
// Display and save device location as latitude and longitude numbers.

let my = {};

function setup() {
  my.version = "?v=2";

  // canvas not used
  // createCanvas(windowWidth, windowHeight-100);

  create_ui();

  my.locations = [];
  restore_locations();
}

function draw() {
  background(200);
}

function create_ui() {
  my.resetBtn = createButton(my.version + " Reset");
  my.resetBtn.mousePressed(resetAction);

  geoCreate_ui();

  createElement("br");
  createA(
    "https://en.m.wikipedia.org/wiki/Eratosthenes",
    "Eratosthenes",
    "_blank"
  );
}

function resetAction() {
  localStorage.removeItem("my.locations");
  location.reload();
}

// <div>
//   <label>
//     <input type="checkbox">
//     <span>rotY</span>
//   </label>
// </div>

function geoCreate_ui() {
  createButton("Add Location").mousePressed(add_locationAction);
  createButton("Remove").mousePressed(remove_locationAction);
  createElement("br");
  my.mapLinks = createDiv("");
}

function remove_locationAction() {
  let child = my.mapLinks.elt.firstChild;
  if (!child) return;
  my.mapLinks.elt.removeChild(child);
  my.locations.pop();
  save_locations();
}

function add_locationAction() {
  // console.log('add_locationAction');
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }
  let options = { enableHighAccuracy: true };
  
  navigator.geolocation.getCurrentPosition(success, geo_error, options);

  function success(position) {
    let coords = position.coords;
    // console.log('add_locationAction coords', coords);
    let la = position.coords.latitude;
    let lo = position.coords.longitude;
    add_location_lalo(la, lo);
  }
  // function error(err) {
  //   alert("add_locationAction err" + err);
  //   console.log("add_locationAction err", err);
  // }
}

function geo_error(error) {
  console.log('geo_error', error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for geolocation");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred");
      break;
  }
}

function add_location_lalo(la, lo) {
  // Insert as first element in array locations
  // my.locations.push({ la, lo });
  my.locations.splice(0, 0, { la, lo });
  let distance = distanceForLoc(la, lo);
  let href = `https://www.openstreetmap.org/#map=18/${la}/${lo}`;
  let text = `${la.toFixed(6)} ${lo.toFixed(6)}`;
  let mapLink = createA(href, text, "_blank");
  let div = createDiv();
  div.child(mapLink);
  if (distance) {
    let distanceSpan = createSpan(" " + distance);
    div.child(distanceSpan);
  }
  // child could be null
  let child = my.mapLinks.elt.firstChild;
  my.mapLinks.elt.insertBefore(div.elt, child);

  save_locations();
}

function distanceForLoc(la, lo) {
  let n = my.locations.length;
  if (n <= 1) return "";
  let ent = my.locations[1];
  let dist = distanceInKm(la, lo, ent.la, ent.lo) * 1000;
  console.log("dist", dist);
  // dist += 0.01;
  if (dist < 0.001) return "";
  let unit = "m";
  let nfix = 1;
  if (dist < 10) {
    nfix = 3;
  } else if (dist > 1000) {
    dist = dist / 1000;
    unit = "km";
  }
  return dist.toFixed(nfix) + unit;
}

function save_locations() {
  let str = JSON.stringify(my.locations);
  localStorage.setItem("my.locations", str);
  // console.log('save_locations str.length', str.length);
}

function restore_locations() {
  let str = localStorage.getItem("my.locations");
  if (!str) return null;
  // console.log('restore_locations str.length', str.length);
  let newlocs;
  try {
    newlocs = JSON.parse(str);
  } catch (err) {
    // console.log('restore_locations parse err', err);
    return;
  }
  for (let index = newlocs.length - 1; index >= 0; index--) {
    let ent = newlocs[index];
    add_location_lalo(ent.la, ent.lo);
  }
}

// https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates

// function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
function distanceInKm(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2 - lat1);
  var dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// http://www.movable-type.co.uk/scripts/latlong.html
// verifly location and distance

// https://editor.p5js.org/jht9629-nyu/sketches/bpsB_xmSH
// earth-scope

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates
// navigator.geolocation.getCurrentPosition api documentation

// https://editor.p5js.org/jht9629-nyu/sketches/TXvXSJY6L
// rotationXYZ

// https://p5js.org/reference/#/p5/rotationX

// https://editor.p5js.org/jht9629-nyu/sketches/G6Zr5SBuq
// rotationX

// https://en.m.wikipedia.org/wiki/Eratosthenes
// credited first to estimate circumference of earth
// https://en.m.wikipedia.org/wiki/Earth%27s_circumference
// Measured around the Equator, it is 40,075.017 km (24,901.461 mi)

// https://editor.p5js.org/jht9629-nyu/sketches/q14Kn5a0O
// earth-lat-lon

// https://claude.ai/chat/efae282e-0c9b-4248-a7dc-08cd7f59b24c
// how to ask permission to use browser navigator.geolocation
