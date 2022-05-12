class Obstacle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	// https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other/306332#306332
	collidingWithRectangle(x, y, width, height) {
		return (this.x < x + width && this.x + this.width > x &&
			this.y < y + height && this.y + this.height > y);
	}

	drawObstacle(ctx) {
		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}