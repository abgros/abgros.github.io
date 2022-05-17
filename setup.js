// Initialize window
window.onload = () => {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	initGame();
	requestAnimationFrame(frame);
}

// Handle keypresses
keysHeld = {};
window.addEventListener("keydown", function(event) {
	keysHeld[event.code] = true;
	if (event.code == "KeyR") initGame();
});

window.addEventListener("keyup", function(event) {
	keysHeld[event.code] = false;
});

// Things to do every frame
function frame() {
	drawBackground()
	obstacles.drawObstacles();
	obstacles.moveObstacles();
	square.moveSquare();
	square.drawSquare();
	if (playing) {
		let speedMultiplier = (1 + 0.0003 * t);
		let spawnRate = (0.02 + 0.000012 * t);
		if (chance(spawnRate)) {
			obstacles.addObstacle(speedMultiplier);
		}
		if (square.isColliding(obstacles)) {
			lives--;
		}
		if (lives <= 0) {
			playing = false;
		}
		t++;
	}
	if (t % 100 === 0) {
		obstacles.deleteOffScreen();
	}
	requestAnimationFrame(frame);
}

// Reset game
function initGame() {
	obstacles = new Obstacles();
	square = new Square(500, 500, 15, 50);
	t = 0;
	start = new Date().getTime();
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