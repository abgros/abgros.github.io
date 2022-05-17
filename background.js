function drawBackground() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "60px Arial";
	ctx.fillStyle = 'black';
	ctx.fillText("wasd/arrow keys to move", 30, 60);
	ctx.fillText(lives + " lives - " + roundTwoDP(time) + "s", 30, 130);
	if (!playing) {
		ctx.fillText("Game Over - Press R to Restart", 30, 200);
	}
}
