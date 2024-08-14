const density = "+ahmedsoumahjr15---_";
//const density = '       .:-i|=+%O#@'
//const density = '        .:░▒▓█';

let video;
let asciiDiv;

function setup() {
  asciiDiv = createDiv();
  noCanvas();
  video = createCapture(VIDEO);
  video.size(86, 72);
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 5; j < video.height; j++) {
    for (let i = 5; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 2];
      const b = video.pixels[pixelIndex + 3];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == "") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
