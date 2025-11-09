// let bg1, bg2, fg;

function init_ui() {
  {
    let elm = createSpan().id('bg1');
    elm.style('font-size', '30px');
  } {
    let elm = createSpan().id('bg2');
    elm.style('font-size', '30px');
  } {
    let elm = createSpan().id('fg');
    elm.style('font-size', '30px');
    createP();
  } {
    let a_span = createSpan('bg1:');
    a_span.style('font-size', '30px');
    // createSlider(min, max, [value], [step])
    let a_slider = createSlider(0, 360, bg1);
    a_slider.style('width', '360px');
    a_slider.input(function() {
      bg1 = a_slider.value();
    });
    createP();
  } {
    let a_span = createSpan('bg2:');
    a_span.style('font-size', '30px');
    let a_slider = createSlider(0, 360, bg2);
    a_slider.style('width', '360px');
    a_slider.input(function() {
      bg2 = a_slider.value();
    });
    createP();
  } {
    // let a_span = createSpan('fg:');
    // a_span.style('font-size', '30px');
    // let a_slider = createSlider(0, 360, fg);
    // a_slider.style('width', '360px');
    // a_slider.input(function() {
    //   fg = a_slider.value();
    // });
    // createP();
  } {
    let a_button = createButton('resize-full');
    a_button.mousePressed(function() {
      resizeCanvas(windowWidth, windowHeight);
    });
    createP();
  } {
    let a_button = createButton('resize-inset');
    a_button.mousePressed(function() {
      resizeCanvas(400, 300);
    });
    createP();
  }
}

function show_num(label, num) {
  let elm = select('#' + label);
  num = round(num, 2);
  elm.html('[' + label + ' ' + num + '] ');
}