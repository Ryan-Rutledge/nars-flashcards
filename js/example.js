/******************************
 * Integer class              *
 ******************************/

Integer = function(number, string) {
	this.number = number;
	this.string = string;
}
Integer.prototype.drawFront = function(ctx) {
	var w = ctx.canvas.width / 2;
	var h = ctx.canvas.height / 2;

	// Number
	ctx.fillStyle = '#333';
	ctx.font = h + 'px sans';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(this.string, w, h);
}
Integer.prototype.drawBack = function(ctx) {
	var w = ctx.canvas.width / 2;
	var h = ctx.canvas.height / 2;
	var circleDist = w / 2;
	var circleDiameter = w / 5;

	// Circles
	ctx.fillStyle = '#333';
	for (var i = 0; i < this.number; i++) {
		ctx.beginPath()
		ctx.arc(circleDist+circleDist*(i%3), h * (i >= 3 ? 1.4:0.6), circleDiameter, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath()
	}
}

/******************************
 * Color class                *
 ******************************/

Color = function(color) {
	this.color = color;
}
Color.prototype.drawFront = function(ctx) {
	var w = ctx.canvas.width / 2;
	var h = ctx.canvas.height / 2;

	// String
	ctx.fillStyle = '#333';
	ctx.font = w / 2 + 'px sans';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(this.color, w, h);
}
Color.prototype.drawBack = function(ctx) {
	// Color
	ctx.fillStyle = this.color;
	ctx.beginPath()
	ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, ctx.canvas.height/3, 0, 2*Math.PI);
	ctx.fill();
	ctx.closePath()
}

/******************************
 * Init function              *
 ******************************/

 function init() {
	colors = [
		new Color('red'),
		new Color('orange'),
		new Color('yellow'),
		new Color('green'),
		new Color('blue'),
		new Color('purple')
	]

	integers = [
		new Integer(1, 'One'),
		new Integer(2, 'Two'),
		new Integer(3, 'Three'),
		new Integer(4, 'Four'),
		new Integer(5, 'Five'),
		new Integer(6, 'Six'),
	]

	fc.init({
		'integers': integers,
		'colors': colors
	});
	
	fc.enableArrowKeys(); // Enable arrow keys
	fc.enableScaling('colors'); // Enable scalable canvas
	fc.enableClicking(); // Enable mouse dragging
	fc.enableDragging(); // Enable mouse dragging
	fc.enableTilting(); // Enable mouse dragging
	fc.enableSwiping(); // Enable touchscreen swiping
 }
