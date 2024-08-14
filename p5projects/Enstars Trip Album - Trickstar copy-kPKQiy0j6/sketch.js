let page = 1;
let lastPage = 16;
let img;

let mySound;
let myShiawase;
let myReflect;
let myFinder;
let myLove;
let myDaydream;
let myXday;
let myAfter;
let myDawn;

function preload() {
  mySound = myShiawase;
  myShiawase = loadSound("shiawase.mp3");
  myReflect = loadSound("reflect.mp3");
  myFinder = loadSound("finder.mp3");
  myLove = loadSound("love.mp3");
  myDaydream = loadSound("daydream.mp3");
  myXday = loadSound("xday.mp3");
  myAfter = loadSound("afterglow.mp3");
  myDawn = loadSound("dawn.mp3");
  img = loadImage("trickstar.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Press the mouse to advance to the next song!", 20, 600);
  checkSound();
}

function draw() {
  background(239, 121, 27);
  drawHeader();
  square(50, 470, 100);

  if (page == 1) {
    drawPage1();
  }
  if (page == 2) {
    drawPage2();
  }
  if (page == 3) {
    drawPage3();
  }
  if (page == 4) {
    drawPage4();
  }
  if (page == 5) {
    drawPage5();
  }
  if (page == 6) {
    drawPage6();
  }
  if (page == 7) {
    drawPage7();
  }
  if (page == 8) {
    drawPage8();
  }
  if (page == 9) {
    drawPage9();
  }
  if (page == 10) {
    drawPage10();
  }
  if (page == 11) {
    drawPage11();
  }
  if (page == 12) {
    drawPage12();
  }
  if (page == 13) {
    drawPage13();
  }
  if (page == 14) {
    drawPage14();
  }
  if (page == 15) {
    drawPage15();
  }
  if (page == 16) {
    drawPage16();
  }
}

// function mousePressed() {
//   console.log('mousePressed isPaused', mySound.isPaused() );
//   if (mySound.isPaused()) {
//     mySound.play();
//   }
//   else {
//     mySound.pause();
//   }
// }
function keyPressed() {
  console.log('keyPressed isPaused', mySound.isPaused() );
  if (mySound.isPaused()) {
    mySound.play();
  }
  else {
    mySound.pause();
  }
}

function mousePressed() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
  checkSound();
}

function checkSound() {
  if (page == 1) {
    startSound(myShiawase);
  } else if (page == 2) {
    startSound(myReflect);
  } else if (page == 3) {
    startSound(myFinder);
  } else if (page == 4) {
    startSound(myLove);
  } else if (page == 5) {
    startSound(myDaydream);
  } else if (page == 6) {
    startSound(myXday);
  } else if (page == 7) {
    startSound(myAfter);
  } else if (page == 8) {
    startSound(myDawn);
  } else if (page == 9) {
    startSound();
  } else if (page == 10) {
    startSound();
  } else if (page == 11) {
    startSound();
  } else if (page == 12) {
    startSound();
  } else if (page == 13) {
    startSound();
  } else if (page == 14) {
    startSound();
  } else if (page == 15) {
    startSound();
  } else if (page == 16) {
    startSound();
  }
}

function startSound(newSound) {
  if (mySound) mySound.stop();
  mySound = newSound;
  if (mySound) mySound.play();
}

function drawHeader() {
  fill("black");
  textSize(50);
  text("Song " + page, 10, 50);
  image(img, 990, 10, 552, 486);
}

//function mouseReleased() {
//if (mouseReleased)
// mySound.isPlaying}

function drawPage1() {
  fill("black");
  textSize(30);
  text("Shiawase no Uta / Song of Happiness", 50, 130);
  text("Lyrics: HoneyWorks", 50, 170);
  text("Composition / Arrangement: HoneyWorks", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Feb 21st, 2024", 50, 370);
  text(
    "Commentary: This is a song released along side the TRIP album.",
    50,
    410
  );
}

function drawPage2() {
  fill("black");
  textSize(30);
  text("BIGBANG REFLECTION!!", 50, 130);
  text("Lyrics: Saori Codama", 50, 170);
  text("Composition / Arrangement: Junichi Sato", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: April 8th, 2020", 50, 370);
  text(
    "Commentary: This is a song that goes along with Subaru Akehoshi's",
    50,
    410
  );
  text("center event", 50, 450);
}

function drawPage3() {
  fill("black");
  textSize(30);
  text("Finder Girl", 50, 130);
  text("Lyrics: Saori Codama", 50, 170);
  text("Composition / Arrangement: SHOW", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Jan 23rd, 2022", 50, 370);
  text("Commentary: This is a song that goes along with Mao Isara's", 50, 410);
  text("center event", 50, 450);
}

function drawPage4() {
  fill("black");
  textSize(30);
  text("Unstoppable Love!", 50, 130);
  text("Lyrics: Yohei Matsui", 50, 170);
  text("Composition / Arrangement: KoTa", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: March 9th, 2022", 50, 370);
  text("Commentary: This is a song was released with Finder Girl", 50, 410);
}

function drawPage5() {
  fill("black");
  textSize(30);
  text("Daydream×Reality", 50, 130);
  text("Lyrics: Kayoko Kusano", 50, 170);
  text("Composition / Arrangement: Tako Yamaguchi, Kayoko Kusano", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: March 9th, 2022", 50, 370);
  text(
    "Commentary: This is a song that goes along with Makoto Yuuki's",
    50,
    410
  );
  text("center event", 50, 450);
}

function drawPage6() {
  fill("black");
  textSize(30);
  text("Romantic Xday!", 50, 130);
  text("Lyrics: Youhei Matsui", 50, 170);
  text("Composition / Arrangement: Masashi Kusano", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Dec 15th, 2023", 50, 370);
  text("Commentary: This is a song that goes along with Trickstar's", 50, 410);
  text("center event", 50, 450);
}

function drawPage7() {
  fill("black");
  textSize(30);
  text("Afterglow☆彡", 50, 130);
  text("Lyrics: N/A", 50, 170);
  text("Composition / Arrangement: N/A", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Feb 21st, 2024", 50, 370);
  text("Commentary: This is an instumental track included with the", 50, 410);
  text("album release", 50, 450);
}

function drawPage8() {
  fill("black");
  textSize(30);
  text("Kimi to Mimei ni, / With You in the Early Dawn,", 50, 130);
  text("Lyrics: Saori Codama", 50, 170);
  text("Composition / Arrangement: Makoto Nobumasa", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Feb 21st, 2024", 50, 370);
  text("Commentary: This is the second solo song for Hokuto Hidaka", 50, 410);
}

function drawPage9() {
  fill("black");
  textSize(30);
  text("EverySing For You", 50, 130);
  text("Lyrics: Yohei Matsui", 50, 170);
  text("Composition / Arrangement: Mitsuki Tokuda", 50, 210);
  text("Unit: Trickstar", 50, 250);
  text(
    "Members: Hokuto Hidaka, Subaru Akehoshi, Makoto Yuuki, Mao Isara",
    50,
    290
  );
  text("Album: Trickstar TRIP", 50, 330);
  text("Release Date: Feb 21st, 2024", 50, 370);
  text("Commentary: This is the second solo song for Subaru Akehoshi", 50, 410);
}

function drawPage10() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage11() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage12() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage13() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage14() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage15() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage16() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

// https://www.onlineconverter.com/compress-mp3
// ^ Online MP3 Compressor for songs bigger than 5mb

// https://www.tumblr.com/ensemblesongs/tagged/%E3%81%82%E3%82%93%E3%81%95%E3%82%93%E3%81%B6%E3%82%8B%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%EF%BC%81%EF%BC%81%20%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%20Trickstar%20TRIP
// ^ Link to mp3 of songs

// https://ensemble-stars.fandom.com/wiki/ES_ALBUM_SERIES_Trickstar_TRIP
// ^ trip album list
