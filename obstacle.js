class Obstacles {
	constructor() {
		this.obstaclesList = [];
	}

	addObstacle(speedMultiplier) {
		let height = randint(100, 200);
		let width = randint(100, 200);
		let y = randint(0, canvas.height);
		let xspeed = randint(-10, -5);
		let yspeed = randint(-2, 2);

		this.obstaclesList.push(new Obstacle(canvas.width, y, width, height, xspeed * speedMultiplier, yspeed * speedMultiplier));
	}

	drawObstacles() {
		this.obstaclesList.forEach(element => element.drawObstacle());
	}

	moveObstacles() {
		this.obstaclesList.forEach(element => element.moveObstacle());
	}

	deleteOffScreen() {
		this.obstaclesList = this.obstaclesList.filter(element => element.x + element.width > 0);
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
		this.colour = this.randomColour();
	}

	randomColour() {
		var h = randint(0, 80);
		var s = randint(10, 30);
		var l = randint(10, 50);
		return 'hsl(' + h + ',' + s + '%,' + l + '%)';
	}

	// https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other/306332#306332
	isColliding(square) {
		return (this.x < square.x + square.squareSize && this.x + this.width > square.x &&
			this.y < square.y + square.squareSize && this.y + this.height > square.y);
	}

	drawObstacle() {
		ctx.fillStyle = this.colour;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	moveObstacle() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
}