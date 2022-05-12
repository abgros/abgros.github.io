// Initialize window
window.onload = ()=> {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	fps = 60
	t = 0;
	nextPipe = Math.round(Math.random() * 50 + 50);
	setInterval(frame, 1000/fps);
	obstacles = new Obstacles(5);
	square = new Square(500, 500, 20, 100);
}

// Handle keypresses
keysHeld = {};
window.addEventListener("keydown", function(event) {
	keysHeld[event.code] = true;
});

window.addEventListener("keyup", function(event) {
	keysHeld[event.code] = false;
});

// Things to do every frame
function frame() {
	drawBackground()
	obstacles.drawObstacles();
	let speed = 0.01 * t + 10;
	obstacles.moveObstacles(speed);
	obstacles.deleteOffScreen;
	square.moveSquare();
	square.drawSquare();
	if (nextPipe === 0) {
		obstacles.addObstacle();
		nextPipe = Math.round(Math.random() * 50 + 50);
	}
	nextPipe--;
	t++;
}

// Bound number to a range
function bound(number, min, max) {
	return Math.min(Math.max(number, min), max);
}

// Randomly returns true or false
function chance(probability) {
	return Math.random() < probability;
}

// Choose a random item from an array
function randomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Check if value is between two others
function between(x, min, max) {
	return x >= min && x <= max;
}