var getUID = (function(){
	var id = 0;
	return function(){
		return id++;
	};
})();

// Shape - superclass
function Shape(x, y){
	this.x = x || 0;
	this.y = y || 0;
	this.color = "000000";
	var id = getUID();
	
	this.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
		console.info('Shape moved.');
	};
	
	this.getName = function(){
		return "o" + id;
	}
}

// Rectangle
function Rectangle(x, y, dx, dy){
  this.dx = dx;
  this.dy = dy;
  Shape.call(this, x, y); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.paint = function(){
	var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
	rect.setAttribute("width", this.dx);
	rect.setAttribute("height", this.dy);
	rect.setAttribute("x", this.y);
	rect.setAttribute("y", this.x);
	rect.setAttribute("style", "fill:#" + this.color);
	document.getElementById("svg").appendChild(rect);
};

// Circle
function Circle(x, y, r){
  this.r = r;
  Shape.call(this, x, y); // call super constructor.
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.paint = function(){
	var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	circle.setAttribute("r", this.r);
	circle.setAttribute("cx", this.y);
	circle.setAttribute("cy", this.x);
	circle.setAttribute("style", "fill:#" + this.color);
	document.getElementById("svg").appendChild(circle);
};

function createShape(){
	var x = document.getElementById("inputX").value;
	var y = document.getElementById("inputY").value;
	var type = document.getElementById("selectType").value;
	var shape;
	switch(type){
		case "Circle":
			var r = document.getElementById("inputR").value;
			shape = new Circle(x, y, r);
			break;
		case "Rectangle":
			var dx = document.getElementById("inputDx").value;
			var dy = document.getElementById("inputDy").value;
			shape = new Rectangle(x, y, dx, dy);
			break;
	}
	if(shape instanceof Shape){
		shape.color = document.getElementById("inputColor").value;
		shape.paint();
	}
}