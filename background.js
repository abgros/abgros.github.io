function drawBackground() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "90px Arial";
	ctx.fillStyle = 'black';
	ctx.fillText("wasd to move", canvas.width * 1/3, 90);
	ctx.font = "90px Wingdings";
	ctx.fillText("djkfgnhkdjghdfjkghdfkghdfkjghfkdjghdfkjghkjdfhgjkfdhgfkdjghfjdkghk", canvas.width * 1/3, 190);
}