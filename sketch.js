let circles = [];
let nodes = 150;
let multiple = 0.01;
let circleRadius = 250;

function setup() {
	createCanvas(600, 600);
	ellipseMode(RADIUS);

	for (let i = 0; i < nodes; i++) {
		circles.push(new Circle(i));
	}
}

function draw() {
	background(21);
	translate(width / 2, height / 2);
	noFill();
	stroke(255);
	ellipse(0, 0, circleRadius, circleRadius);
	frameRate(60);

	for (let i of circles) {
		line(
			i.x,
			i.y,
			circles[floor((i.i * multiple) % nodes)].x,
			circles[floor((i.i * multiple) % nodes)].y
		);
	}
	multiple += 0.01;
}

function Circle(i) {
	this.i = i;
	this.x = circleRadius * cos(PI - (TAU / nodes) * this.i);
	this.y = circleRadius * sin(PI - (TAU / nodes) * this.i);
}
