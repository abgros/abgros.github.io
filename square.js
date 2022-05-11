// Handle keypresses
keysHeld = {};
window.addEventListener("keydown", function(event) {
	keysHeld[event.code] = true;
});

window.addEventListener("keyup", function(event) {
	keysHeld[event.code] = false;
});

// Initialize variables
xpos = 0;
ypos = 0;
squareSize = 100;
squareColor = "black";
squareColors = ["red", "orange", "green", "blue", "purple", "black"];
speed = 20;

function drawSquare() {
	// Draw background
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// Text
	ctx.font = "90px Arial";
	ctx.fillStyle = 'black';
	ctx.fillText("wasd to move", canvas.width * 1/3, 90);

	// Change square position
	if (keysHeld['KeyW']) ypos -= speed;
	if (keysHeld['KeyA']) xpos -= speed;
	if (keysHeld['KeyS']) ypos += speed;
	if (keysHeld['KeyD']) xpos += speed;

	// Keep it within the edges
	xpos = bound(xpos, 0, canvas.width - squareSize);
	ypos = bound(ypos, 0, canvas.height - squareSize);

	// Occurs average of once per second
	if (chance(1/fps)) {
		squareColor = randomItem(squareColors);
	}

	// Draw square
	ctx.fillStyle = squareColor;
	ctx.fillRect(xpos, ypos, squareSize, squareSize);
}