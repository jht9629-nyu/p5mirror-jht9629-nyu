//
// eff_simplex

//export default 
class eff_simplex {
  static meta_props = [
    //
    { prop: 'uwidth', label: 'width', selection: [106, 100, 200, 300] },
    { prop: 'uheight', label: 'height', selection: [60, 100, 200, 300] },
    { prop: 'uspeed', label: 'speed', selection: [0.1, 0.2, 0.5, 1, 2, 4, 10] },
  ];

  // new eff_example({message_prop1, num_prop, text_prop})
  constructor(props) {
    Object.assign(this, props);
    // console.log('eff_simplex props.uspeed', props.uspeed);
    this.increment = 0.03;
    let uspeed = this.uspeed || 1;
    this.incrementZ = this.increment * uspeed;
    this.zoff = 0;
    this.noise = new OpenSimplexNoise(Date.now());
    this.initGraphics();
  }

  initGraphics() {
    let w = this.uwidth || 106;
    let h = this.uheight || 60;
    this.output = createGraphics(w, h);
    // this.output = createGraphics(106, 60);
    // console.log('eff_worley initGraphics width, height', width, height);
    console.log('eff_worley initGraphics w h', w, h);
  }

  prepareOutput() {
    // console.log('eff_example prepareOutput text_prop', this.text_prop);
    let { output } = this;
    this.updateLayer(output);
  }

  updateLayer(layer) {
    let xoff = 0;
    let w = layer.width;
    let h = layer.height;
    // layer.clear();
    for (let x = 0; x < w; x++) {
      let yoff = 0;
      for (let y = 0; y < h; y++) {
        let n;
        n = this.noise.noise3D(xoff, yoff, this.zoff);
        // console.log('n',n)
        // let bright = n > 0 ? 255 : 0;
        let bright = map(n, -1, 1, 0, 255);
        layer.stroke(bright, 255);
        layer.point(x, y);
        yoff += this.increment;
      }
      xoff += this.increment;
    }
    this.zoff += this.incrementZ;
  }
}
