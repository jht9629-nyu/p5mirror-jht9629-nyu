let sun;
let planets = [];

function setup() {
  createCanvas(800, 600);
  
  sun = {
    x: width / 2,
    y: height / 2,
    radius: 50,
    color: color(255, 255, 0),
    display() {
      fill(this.color);
      ellipse(this.x, this.y, this.radius * 2);
    }
  };
  
  for (let i = 0; i < 6; i++) {
    planets.push(createPlanet(random(100, 200), random(TWO_PI)));
  }
}

function draw() {
  background(0);
  
  sun.display();
  
  for (let planet of planets) {
    planet.orbit();
    planet.display();
  }
}

function createPlanet(radius, angle) {
  return {
    orbitRadius: radius,
    angle: angle,
    angleSpeed: random(0.01, 0.05),
    display() {
      fill(100, 100, 255);
      let x = sun.x + this.orbitRadius * cos(this.angle);
      let y = sun.y + this.orbitRadius * sin(this.angle);
      ellipse(x, y, 20);
    },
    orbit() {
      this.angle += this.angleSpeed;
    }
  };
}
