// Initialize window
window.onload = ()=> {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	fps = 60
	t = 0;
	lives = 100;
	playing = true;
	setInterval(frame, 1000/fps);
	obstacles = new Obstacles(5);
	square = new Square(500, 500, 15, 50);
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
	if (playing) {
		let speedMultiplier = 1 + 0.0003 * t;
		let spawnRate = 0.03 + 0.000007 * t;
		if (chance(spawnRate)) {
			obstacles.addObstacle(speedMultiplier);
		}
		if (square.isColliding(obstacles)) {
			lives--;
		}
		if (lives == 0) {
			playing = false;
		}
		t++;
	}
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

// Round to two decimal places
function roundTwoDP(n) {
	return Math.round(n * 100) / 100;
}

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function randomObstacleColour() {
    var h = Math.random() * 359 + 1; 	// 1-360
    var s = Math.random() * 20;  		// 0-100
    var l = Math.random() * 40; 		//  0-100
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}