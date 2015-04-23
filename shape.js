// Shape - superclass
function Shape(x, y){
	
}

// Rectangle
function Rectangle(x, y, dx, dy){
	
}

// Circle
function Circle(x, y, r){
	
}

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