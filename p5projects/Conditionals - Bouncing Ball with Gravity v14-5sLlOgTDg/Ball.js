//

class Ball {
  //
  constructor(x, y) {
    //
    // initial position
    this.x = x;
    this.y = y;
    this.init_x = this.x;
    this.init_y = this.y;

    // appearance
    this.radius = my.defaultRadius;
    // random color with alpha
    // this.color = [random(255), random(255), random(255), 100];
    this.color = my.videoImage.get(x, y);
    this.color[3] = 100;
    // x and y velocity. begin at rest
    this.vx = 0;
    this.vy = 0;

    // Air resistance
    this.drag = 0.995;

    // Energy retained on edge bounce
    this.bounce = 0.5;

    // for drop to bottom of canvas behavior
    this.gravityY = 0.1;
    this.isDropping = false;
    this.isRestoreing = false;

    // add to list
    balls.push(this);
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    if (this.isDropping) {
      this.vy += this.gravityY;
    }
    if (this.isRestoreing) {
      this.x += (this.init_x - this.x) / my.restoreSteps;
      this.y += (this.init_y - this.y) / my.restoreSteps;
    }

    if (this.y < this.radius || this.y > height - this.radius) {
      // reduce the speed each time ball hits floor
      // negative to reverse direction
      this.vy *= -this.bounce;
      this.y = constrain(this.y, this.radius, height - this.radius);
    }
    if (this.x < this.radius || this.x > width - this.radius) {
      // reduce the speed each time ball hits wall
      this.vx *= -this.bounce;
      this.x = constrain(this.x, this.radius, width - this.radius);
    }
    fill(this.color);
    // circle(this.x, this.y, this.radius * 2);
    rect(this.x - this.radius, this.y - this.radius, this.radius * 2);
  }

  stop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = false;
    this.isRestoreing = false;
  }

  // Fall to bottom of canvas using gravityY
  drop() {
    this.vx = 0;
    this.vy = 0;
    this.isDropping = true;
    this.isRestoreing = false;
  }

  add_velocity(dx, dy) {
    this.set_velocity(this.vx + dx, this.vy + dy);
  }

  set_velocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  random() {
    this.x = random(width);
    this.y = random(height);
    this.stop();
  }

  restore() {
    this.isRestoreing = true;
  }
}
