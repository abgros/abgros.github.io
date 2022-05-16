// Initialize window
window.onload = () => {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	fps = 240
	global_speed = 60 / fps;
	t = 0;
	lives = 100;
	playing = true;
	setInterval(frame, 1000/fps);
	obstacles = new Obstacles();
	square = new Square(500, 500, 15 * global_speed, 50);
	console.log(calcFPS());
}

// Handle keypresses
keysHeld = {};
window.addEventListener("keydown", function(event) {
	keysHeld[event.code] = true;
	if (event.code == "KeyR") reset();
});

window.addEventListener("keyup", function(event) {
	keysHeld[event.code] = false;
});

// Things to do every frame
function frame() {
	drawBackground()
	obstacles.drawObstacles();
	obstacles.moveObstacles();
	obstacles.deleteOffScreen();
	square.moveSquare();
	square.drawSquare();
	if (playing) {
		let speedMultiplier = (1 + 0.0003 * t * global_speed) * global_speed;
		let spawnRate = (0.02 + 0.000012 * t * global_speed) * global_speed;
		if (chance(spawnRate)) {
			obstacles.addObstacle(speedMultiplier);
		}
		if (square.isColliding(obstacles)) {
			lives -= 1 * global_speed;
		}
		if (lives <= 0) {
			playing = false;
		}
		t++;
	}
}

// Reset game
function reset() {
	obstacles = new Obstacles();
	square = new Square(500, 500, 15, 50);
	t = 0;
	lives = 100;
	playing = true;
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
	return array[randint(0, array.length - 1)];
}

// Check if value is between two others
function between(x, min, max) {
	return x >= min && x <= max;
}

// Round to two decimal places
function roundTwoDP(n) {
	return Math.round(n * 100) / 100;
}

// Get a random number in the range, inclusive
function randint(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}