// Initialize window
window.onload = ()=> {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	fps = 60
	t = 0;
	hits = 0;
	setInterval(frame, 1000/fps);
	obstacles = new Obstacles(5);
	square = new Square(500, 500, 10, 100);
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
	obstacles.moveObstacles();
	obstacles.deleteOffScreen;
	square.moveSquare();
	square.drawSquare();
	if (square.isColliding(obstacles)) {
		hits++;
	}
	let speedMultiplier = 1 + 0.0002 * t;
	let spawnRate = 0.02 + 0.000005 * t;
	if (chance(spawnRate)) {
		obstacles.addObstacle(speedMultiplier);
	}
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