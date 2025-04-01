// https://editor.p5js.org/jht9629-nyu/sketches/ur8qo9DTS
// loadJSON c19 graph v2

// https://editor.p5js.org/jht9629-nyu/sketches/vahJvTmV7
// loadJSON c19 graph

// https://jht1493.net/COVID-19-Impact/Dashboard

// url root of covid-19 json data
let c_url = 'https://jht1493.net/COVID-19-Impact/Dashboard/a0/c_data/';
let a_root = 'world/';
// let a_root = 'world/c_subs/Australia/'
// let a_root = 'world/c_subs/China/'
// let a_root = 'world/c_subs/India/'
// let a_root = 'world/c_subs/Germany/'
// let a_root = 'nyc/';

let a_data;
let a_dates;
let a_sorted;
let n_bars = 8;
let a_title = 'daily.Deaths on: ';
let ndays = 40;

function setup() {
  createCanvas(640, 480);
  // sketch_ui();

  // eg. c_data/world/c_meta.json
  loadJSON(c_url + a_root + 'c_meta.json', function(data) {
    a_data = data;
    // print('data', data);
    // show_json('c_regions', data.c_regions);
    // show_json('c_dates', data.c_dates);
    let c_dates = data.c_dates;

    // Pick last ndays dates
    // Use slice to copy, not splice
    let iend = c_dates.length;
    let istart = iend - ndays;
    a_dates = c_dates.slice(istart, iend);

    // Show most recent date first
    a_dates.reverse();
    print('a_dates', a_dates);

    sketch_ui({
      title: a_title,
      dates: a_dates,
      select_date
    })

    select_date(0);
  });
}

function load_day(adate) {
  print('load_day adate', adate);

  // eg c_data/c_days/2020-11-22.json
  let url = c_url + a_root + 'c_days/' + adate + '.json';

  loadJSON(url, function(data) {
    a_day = data;
    print('a_day.length', a_day.length)
    // show_json('a_day', a_day);
    create_sorted(data);
  });
}


function select_date(index) {
  let adate = a_dates[index];
  load_day(adate);
}

function draw() {
  background(220);
  if (!a_sorted) return;

  let citems = [];
  let ctotal = 0;
  let ototal = 0;
  let cmax = 0;
  for (let index = 0; index < a_sorted.length; index++) {
    let item = a_sorted[index];
    let num = item.daily.Deaths;
    ctotal += num;
    if (index >= n_bars) {
      ototal += item.daily.Deaths;
    } else {
      citems.push({
        c_ref: item.c_ref,
        num
      })
    }
    if (num > cmax) cmax = num;
  }
  if (ototal > 0) {
    citems.push({
      c_ref: 'Other',
      num: ototal
    });
  }
  if (ototal > cmax) cmax = ototal;
  show_json('citems', citems);

  let wtitle = width / 4;
  let wbar = width - wtitle;
  let hbar = height / citems.length;

  textSize(hbar / 3);
  let tasc = textAscent();
  let tdes = textDescent();
  let h = 0;
  let index = 0;
  for (let item of citems) {
    let num = item.num;
    let numbar = wbar * (num / cmax);
    let str = format_num(num);
    let x = numbar + 5;

    fill(0)
    textSize(hbar / 3);
    text(item.c_ref, x, h + hbar - tasc * 2 - tdes);
    textSize(hbar / 4);
    text(str, x, h + hbar - tasc);
    let ccol = map(index, 0, n_bars, 0, 255);

    // strokeWeight(0);
    fill(ccol);
    rect(0, h, numbar, hbar)

    h += hbar;
    index += 1;
  }
}

// day = [ {
//   "c_ref": "Afghanistan",
//   "totals": {
//     "Cases": 44988,
//     "Deaths": 1695
//   },
//   "daily": {
//     "Cases": 282,
//     "Deaths": 8
//   }
// }, ...

function create_sorted(day) {
  // Sort by daily deaths
  a_sorted = day.concat().sort(function(ent1, ent2) {
    return ent2.daily.Deaths - ent1.daily.Deaths;
  })

  // Format numbers with commas
  // for (let ent of a_sorted) {
  //   ent.daily.Deaths = format_num(ent.daily.Deaths);
  //   ent.daily.Cases = format_num(ent.daily.Cases);
  //   ent.totals.Deaths = format_num(ent.totals.Deaths);
  //   ent.totals.Cases = format_num(ent.totals.Cases);
  // }
  show_json('a_sorted', a_sorted);
}

// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_meta.json

// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_days/2020-01-22.json

// https://p5js.org/reference/#/p5/loadJSON

// https://epvisual.com/COVID-19-Impact/Project/
// https://epvisual.com/COVID-19-Impact/Dashboard


// https://editor.p5js.org/jht1493/sketches/1ZajWH3S8
// loadJSON c19 graph

// https://github.com/EP-Visual-Design/COVID-19-parsed-data/tree/main/c_data/world/c_subs
// n_subs

// let c_url = 'https://jht1493.net/COVID-19-Impact/Dashboard/a0/c_data/nyc/';

