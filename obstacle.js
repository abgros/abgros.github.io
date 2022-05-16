class Obstacles {
	constructor(n) {
		this.obstaclesList = [];
	}
	
	addObstacle(speedMultiplier) {
		let height = Math.random() * 100 + 100;
		let width = Math.random() * 100 + 100;
		let y = Math.random() * canvas.height;
		let xspeed = -Math.random() * 5 - 5;
		let yspeed = Math.random() * 4 - 2;
		
		this.obstaclesList.push(new Obstacle(canvas.width, y, width, height, xspeed * speedMultiplier, yspeed * speedMultiplier));
	}
	
	drawObstacles() {
		this.obstaclesList.forEach(element => element.drawObstacle());
	}
	
	moveObstacles(distance) {
		this.obstaclesList.forEach(element => element.moveObstacle());
	}
	
	deleteOffScreen() {
		this.obstaclesList = this.obstaclesList.filter(element => element.x > 0);
	}
}

class Obstacle {
	constructor(x, y, width, height, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
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
	
	moveObstacle() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
}