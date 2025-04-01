// https://editor.p5js.org/jht9629-nyu/sketches/u_q1yOmY-
// loadJSON c19 series brooklyn v1

// Extracting data from specific zip code in Brooklyn
// data can be viewed online here:
// https://github.com/EP-Visual-Design/COVID-19-parsed-data

let a_data;
let a_index;
let a_zip = '11234';
// let a_zip = '11201';
let a_location = 'in Brooklyn '+a_zip;
let a_num;

function setup() {
  createCanvas(400, 200);
  let url =
    'https://jht1493.net/COVID-19-Impact/Dashboard/a0/c_data/nyc/c_subs/Brooklyn/c_series/'+a_zip+'.json';
  loadJSON(url, got_data);
  sketch_ui();
}

function draw() {
  background(200);
  let botMargin = 30;
  let thi = height;
  textSize(thi);
  if (a_num) {
    text(a_num + '', 20, height - botMargin);
  }
}

function got_data(data) {
  // print('data', data);
  a_data = data;
  a_index = data.length - 1;
  console.log('data last', data[a_index]);
  console.log('a_index', a_index)
  show_at_index();
}

function sketch_ui() {
  {
    let elm = createSlider(0, width, width)
    elm.style('width', '300px');
    elm.input(() => {
      let val = elm.value();
      let m = a_data.length - 1;
      a_index = Math.trunc(m * (val / width));
      show_at_index();
    });
  }

  {
    let elm = createSpan('').id('msg0');
  }

  createP();

  {
    let elm = createDiv().id('msg');
    elm.style('font-size', '20px');
  }
}

function show_at_index() {
  let itm = a_data[a_index];

  let msg = 'index ' + a_index;
  show_text('msg0', msg);

  msg = ' On ' + itm.on + '<br>';
  msg += '<span style="font-size:40px" >';
  msg += itm.Deaths + '</span><br>';
  msg += ' People have died';
  msg += ' ' + a_location;
  show_text('msg', msg);
  a_num = itm.Deaths;
}

function show_text(label, text) {
  let elm = select('#' + label);
  elm.html(text);
}

// https://p5js.org/reference/#/p5/loadJSON

// https://github.com/EP-Visual-Design/COVID-19-parsed-data/blob/main/c_data/nyc/c_subs/Brooklyn/c_series/11234.json

// Listing of zip codes
// https://github.com/EP-Visual-Design/COVID-19-parsed-data/blob/main/c_data/nyc/c_subs/Brooklyn/c_meta.json

//     "11201": "Brooklyn Heights/DUMBO/Downtown Brooklyn",
//     "11234": "Bergen Beach/Flatlands/Marine Park/Mill Basin",

// {
//   let btn = createButton('Previous');
//   btn.mousePressed(function() {
//     // previous
//     a_index--;
//     if (a_index < 0) a_index = a_data.length - 1;
//     show_at_index();
//   });
// } {
//   let btn = createButton('Next');
//   btn.mousePressed(function() {
//     // next
//     a_index++;
//     if (a_index > a_data.length - 1) a_index = 0;
//     show_at_index();
//   });
// } {
//   let btn = createButton('Latest');
//   btn.mousePressed(function() {
//     a_index = a_data.length - 1;
//     show_at_index();
//   });
// }

// https://editor.p5js.org/jht1493/sketches/bxiT7lMbt
// loadJSON c19 series brooklyn
