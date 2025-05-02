class Particle{
    constructor(x, y, r, fixed) {
        this.x = x;
        this.y = y;
        this.r = r;
        let options = {
            friction: 0.03,
            restitution: 0.95,
            isStatic: fixed
        }
        this.body = Bodies.circle(this.x, this.y, this.r,  options);
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke('grey')
        let deepPink = color(255,102,178,230);
        let lightPink = color(5,200);
        let amt = map(pos.y, 0, height, 1, 0); 
        let c = lerpColor(deepPink, lightPink, amt);
        fill(c);
    
        ellipse(0, 0, this.r*2.);
        pop();
        
    }
}