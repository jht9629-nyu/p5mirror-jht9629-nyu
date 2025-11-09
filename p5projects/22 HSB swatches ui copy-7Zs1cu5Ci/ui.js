function init_ui() {
  {
    let elm = createSpan().id("a_hue");
    elm.style("font-size", "30px");
  }
  {
    let elm = createSpan().id("col_s");
    elm.style("font-size", "30px");
  }
  {
    let elm = createSpan().id("col_b");
    elm.style("font-size", "30px");
    createP();
  }
  {
    let elm = createSpan().id("r");
    elm.style("font-size", "30px");
  }
  {
    let elm = createSpan().id("g");
    elm.style("font-size", "30px");
  }
  {
    let elm = createSpan().id("b");
    elm.style("font-size", "30px");
    createP();
  }
  {
    let a_span = createSpan("a_hue:");
    a_span.style("font-size", "30px");
    // createSlider(min, max, [value], [step])
    let a_slider = createSlider(0, 360, a_hue);
    a_slider.style("width", "360px");
    a_slider.input(function () {
      a_hue = a_slider.value();
    });
    createP();
  }
  {
    let a_span = createSpan("col_s:");
    a_span.style("font-size", "30px");
    let a_slider = createSlider(0, 100, col_s);
    a_slider.style("width", "200px");
    a_slider.input(function () {
      col_s = a_slider.value();
    });
    createP();
  }
  {
    let a_span = createSpan("col_b:");
    a_span.style("font-size", "30px");
    let a_slider = createSlider(0, 100, col_b);
    a_slider.style("width", "200px");
    a_slider.input(function () {
      col_b = a_slider.value();
    });
    createP();
  }
}

function show_num(label, num) {
  let elm = select("#" + label);
  num = round(num, 2);
  elm.html("[" + label + " " + num + "] ");
}
