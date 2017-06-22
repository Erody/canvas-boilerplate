// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};

const colors = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
];


// Event Listeners
addEventListener("mousemove", event => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", () => {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
class Object {
	constructor(options) {
		const { x, y, radius, color } = options;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	update() {
		this.draw();
	}

	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}
}




// Implementation
function init() {

}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
}

init();
animate();