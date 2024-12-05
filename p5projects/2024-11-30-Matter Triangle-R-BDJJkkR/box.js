class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let options = {
      friction: 0.3,
      restitution: 0.6,
    };
    // this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);

    // Define the triangle vertices
    this.w = this.w * 0.5;
    let triangleVertices = Vertices.create(
      [
        { x: 0, y: 0 }, // Vertex 1
        { x: this.w, y: this.h }, // Vertex 2
        { x: -this.w, y: this.h }, // Vertex 3
      ],
      null
    );

    // Create the triangle body
    this.body = Bodies.fromVertices(this.x, this.y, triangleVertices);

    Composite.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    let x0 = 0;
    let y0 = 0;
    let x1 = this.w;
    let y1 = this.h;
    let x2 = -this.w;
    let y2 = this.h;
    triangle(x0, y0, x1, y1, x2, y2);
    pop();
  }

  showRect() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
