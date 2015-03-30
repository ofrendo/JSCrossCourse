
// Fractal pythagorian tree
var tree = (function() {
	var canvas = document.getElementById("canvas");
	var width = canvas.width;
	var height = canvas.height;
	var ctx = canvas.getContext("2d");
	var startWidth = 100;
	var p1 = {x: width/2 - startWidth/2, y: height};
	var p2 = {x: width/2 + startWidth/2, y: height};
	var maxDepth;
	var angle;

	function drawSquare(p1, p2, angle) {
		ctx.save();
		ctx.rotate(angle*Math.PI/180)
		ctx.fillRect(p1.x, p1.y, Math.abs(p1.x-p2.x), Math.abs(p1.x-p2.x), height);
		ctx.restore();
	};

	function drawTriangle(p1, p2, p3) {
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.lineTo(p3.x, p3.y);
		ctx.fill();
	}

	function drawTree(p1, p2, currentDepth) {
		if (currentDepth == maxDepth) {
			return;
		}

		currentDepth++;
		drawTree(currentDepth)
	}

	var module = {};
	module.draw = function(angle, pMaxDepth) {
		maxDepth = pMaxDepth;
		angle = pAngle;
		drawTree(p1, p2, pMaxDepth);
	}
	module.drawSquare = drawSquare;
	module.drawTriangle = drawTriangle;
	return module;

}());

//tree.draw(45, 5);
