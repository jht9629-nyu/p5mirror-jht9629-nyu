// https://editor.p5js.org/jht9629-nyu/sketches/UePTr_GLf
// p5play-tumbler


let tumbler, x, y, sides, len, angle;

function setup() {
	new Canvas('1:1');
	world.gravity.y = 10;

	x = width * 0.5;
	y = height * 0.5;
	sides = 5;
	len = height / sides;
	angle = 360 / sides;

	let s = [len, angle, len, -angle, len, angle, sides];
	tumbler = new Sprite(x, y, s, 'kinematic');
	tumbler.rotationSpeed = 0.5;
	tumbler.color = '#ed225d';

	allSprites.remove(tumbler);
	dropSprite();
}

function draw() {
	background(0);

	push();
	strokeWeight(width * 0.02);
	strokeJoin(ROUND);
	tumbler.draw();
	pop();
	
	if (mouse.presses()) {
		dropSprite();
	}

	allSprites.draw();
}

function dropSprite() {
	len = (height * random(0.1, 0.3)) / sides;
	let penta = new Sprite(mouse.x || x, mouse.y || y, [len, angle, sides]);
	penta.color = '#c0eeff';
}
	

// https://openprocessing.org/sketch/1722018
