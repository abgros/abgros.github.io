function drawBackground() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "80px Arial";
	ctx.fillStyle = 'black';
	let time = roundTwoDP(t / fps);
	ctx.fillText("wasd to move - " + lives + " lives - " + time, 50, 90);
	if (!playing) {
		ctx.fillText("Game Over", 50, 190);
	}
}