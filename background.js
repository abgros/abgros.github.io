function drawBackground() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "80px Arial";
	ctx.fillStyle = 'black';
	let time = (new Date().getTime() - start) / 1000;
	ctx.fillText("wasd to move - " + Math.ceil(lives) + " lives - " + time + "s", 50, 90);
	if (!playing) {
		ctx.fillText("Game Over - Press R to Restart", 50, 190);
	}
}