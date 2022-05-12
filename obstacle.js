class Obstacles {
	constructor(n) {
		this.obstaclesList = [];
	}
	
	addObstacle() {
		let height = Math.random() * (canvas.height - 200);
		let width = 50
		this.obstaclesList.push(new Obstacle(canvas.width, 0, width, height));
		this.obstaclesList.push(new Obstacle(canvas.width, height + 200, width, canvas.height));
	}
	
	drawObstacles() {
		this.obstaclesList.forEach(element => element.drawObstacle());
	}
	
	moveObstacles(distance) {
		this.obstaclesList.forEach(element => element.moveObstacle(-distance, 0));
	}
	
	deleteOffScreen() {
		this.obstaclesList = this.obstaclesList.filter(element => element.x > 0);
	}
}

class Obstacle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	// https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other/306332#306332
	isColliding(square) {
		return (this.x < square.x + square.squareSize && this.x + this.width > square.x &&
			this.y < square.y + square.squareSize && this.y + this.height > square.y);
	}

	drawObstacle() {
		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	moveObstacle(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
}