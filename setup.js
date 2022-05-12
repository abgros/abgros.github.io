// Initialize window
window.onload = ()=> {
	canvas = document.getElementById('canvas');
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext('2d');
	fps = 60
	setInterval(frame, 1000/fps);
	obstacles = [new Obstacle(500, 500, 200, 200), new Obstacle(1100, 100, 50, 900)];
}

// Things to do every frame
function frame() {
	drawSquare();
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