//

class FatPixel {
  //
  constructor(x, y) {
    //
    // initial position centered at x, y
    let w = my.gridSize / 2;
    this.x = x - w;
    this.y = y - w;
    this.init_x = this.x;
    this.init_y = this.y;

    // appearance
    this.gridSize = my.gridSize;
    this.vx = 0;
    this.vy = 0;

    // Air resistance
    this.drag = 0.99;
    // this.drag = 0.995;

    // Energy retained on edge bounce
    // this.bounce = 0.2;
    this.bounce = 0.5;

    // for drop to bottom of canvas behavior
    this.gravityY = 0.1;
    this.isDropping = false;
    // this.isRestoreing = true;
    // this.isRestoreing = false;

    // add to list
    my.items.push(this);
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    if (this.isDropping) {
      this.vy += this.gravityY;
    }
    if (my.doRestore) {
    // if (this.isRestoreing) {
      this.x += (this.init_x - this.x) / my.restoreSteps;
      this.y += (this.init_y - this.y) / my.restoreSteps;
    }
    let layer = my.layer;
    if (! layer) return;
    let { width, height } = layer;
    if (this.y < 0 || this.y > height - this.gridSize) {
      // reduce the speed each time item hits floor
      // negative to reverse direction
      this.vy *= -this.bounce;
      this.y = constrain(this.y, 0, height - this.gridSize);
    }
    if (this.x < 0 || this.x > width - this.gridSize) {
      // reduce the speed each time item hits wall
      this.vx *= -this.bounce;
      this.x = constrain(this.x, 0, width - this.gridSize);
    }
    if (my.doColor) {
      // this.color = [random(255), random(255), random(255), 100];
      let color = my.videoImage.get(this.init_x, this.init_y);
      color[3] = my.pixAlpha;
      layer.fill(color);
      layer.rect(this.x, this.y, this.gridSize);
    } else if (my.videoImage) {
      let dx = this.x ;
      let dy = this.y ;
      let dWidth = this.gridSize;
      let dHeight = this.gridSize;
      let sx = this.init_x;
      let sy = this.init_y;
      layer.image(my.videoImage, dx, dy, dWidth, dHeight, sx, sy, dWidth, dHeight);
    }
  }

  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])

  stop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = false;
  }

  // Fall to bottom of canvas using gravityY
  drop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = true;
  }

  add_velocity(dx, dy) {
    this.set_velocity(this.vx + dx, this.vy + dy);
  }

  set_velocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  random() {
    let layer = my.layer;
    if (! layer) return;
    let { width, height } = layer;
    this.x = random(width);
    this.y = random(height);
    this.stop();
  }

  // restore() {
  //   this.isRestoreing = true;
  // }
}
