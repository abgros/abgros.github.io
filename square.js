class Square {
	constructor(x, y, speed, squareSize) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.squareSize = squareSize;
	}
	
	drawSquare() {
		if (this.isColliding(obstacles)) {
			ctx.fillStyle = "red";
		} else {
			ctx.fillStyle = "blue";
		}
		ctx.fillRect(this.x, this.y, this.squareSize, this.squareSize);
	}
	
	isColliding(obstacles) {
		return obstacles.obstaclesList.some(element => element.isColliding(square));
	}
	
	moveSquare() {
		if (keysHeld['KeyW']) this.y -= this.speed;
		if (keysHeld['KeyA']) this.x -= this.speed;
		if (keysHeld['KeyS']) this.y += this.speed;
		if (keysHeld['KeyD']) this.x += this.speed;

		this.x = bound(this.x, 0, canvas.width - this.squareSize);
		this.y = bound(this.y, 0, canvas.height - this.squareSize);
	}
}