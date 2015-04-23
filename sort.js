var Sort = (function() {
    function bubbleSort(a) {
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return a;
    }

    function selectionSort(a) {
        var min;

        for (i=0; i < a.length; i++){
            var change = false;

            // set minimum to this position
            min = i;

            // check the rest of the array to see if anything is smaller
            for (j=i+1; j < a.length; j++){
                if (a[j] < a[min]){
                    min = j;
                }
            }

            // if the minimum isn't in the position, swap it
            if (i != min){
                var temp = a[i];
                a[i] = a[min];
                a[min] = temp;
                change = true;
            }
        }
        return a;
    }

    // Merge function used for merge sort
    function merge(left, right){
        var result  = [],
            il      = 0,
            ir      = 0;

        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        return result.concat(left.slice(il)).concat(right.slice(ir));
    }
    function mergeSort(a){
        // Terminal case: 0 or 1 item arrays don't need sorting
        if (a.length < 2) {
            return a;
        }

        var middle = Math.floor(a.length / 2),
            left    = a.slice(0, middle),
            right   = a.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function quickSort(a) {
        if (a.length == 0) return [];
         
            var left = [], right = [], pivot = a[0];
         
            for (var i = 1; i < a.length; i++) {
                a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
            }
         
        return quickSort(left).concat(pivot, quickSort(right));
    }

    function insertionSort(a) {
        var value,                      // the value currently being compared
            i,                          // index into unsorted section
            j;                          // index into sorted section
        var change = false;

        for (i=0; i < a.length; i++) {
        
            // store the current value because it may shift later
            value = a[i];
            
            /*
             * Whenever the value in the sorted section is greater than the value
             * in the unsorted section, shift all items in the sorted section over
             * by one. This creates space in which to insert the value.
             */
            for (j=i-1; j > -1 && a[j] > value; j--) {
                a[j+1] = a[j];
                change = true;
            }

            a[j+1] = value;
        }
        
        return a;
    }

    var module = {};
    module.algorithms = [
        {name: "Bubblesort", fn: bubbleSort},
        {name: "Selectionsort", fn: selectionSort},
        {name: "Mergesort", fn: mergeSort},
        {name: "Quicksort", fn: quickSort},
        {name: "Insertionsort", fn: insertionSort}
    ];
    module.doSort = function(arr, name) {
        var algFn;
        loop(module.algorithms, function(algoroithm) {
            if (algorithm === name) 
                algFn = algorithm.fn;
        });

        return algFn(arr);      
    };

    module.onSort = function(e) {
        var selectSort = document.getElementById("selectSortingAlgorithm");
        var index = selectSort.options[selectSort.selectedIndex].value;
        var alg = module.algorithms[index];
        module.visualizeSorting(alg.fn);
    };

    module.visualizeSorting = function(sortFn) {
        // create array
        var list = document.getElementById("inputList").value;
        var arr = list.split(",");
        for(var i = 0; i < arr.length; i++){
            if(isNaN(arr[i])) return alert("Invalid value in list!");
            arr[i] = parseInt(arr[i]);
        }
        // sort array
        arr = sortFn(arr);
        // create output
        var str = arr.join();
        str = str.replace(/,/g, ", ");
        document.getElementById("labelSortedListFunctional").innerHTML = str;
    };

    return module;
})();











var element = document.getElementById("myElement"); 
var parentElement = element.parentElement; 
element.classList.add("myClass");



var elements = document.querySelectorAll(".myClass");

function onClick(e) {
	// do stuff
}
element.addEventListener("click", onClick);

element.removeEventListener("click", onClick);
"buttonDate"

Date 

var dropdown = document.getElementById("selectAmountSymbols");
var symbols = dropdown.options[dropdown.selectedIndex].value;


function recursion() {
	recursion(); 
}
recursion(); 


function recursion2(value) {
	if (value >= 5) {
		console.log("Value: " + value);
		return;
	}
	value++;
	recursion2(value);
}
recursion2(1);





function f() {
	// do stuff
}
f.variable = 123;


function calc(p1, p2, operation) {
	return operation(p1, p2);
}
function add(p1, p2) {
	return p1+p2;
}
calc(3, 5, add); // 8



function calc(p1, p2, operation) {
	return operation(p1, p2);
}
calc(3, 5, function(p1, p2) {
	return p1+p2;
});






element.addEventListener("click", onClick1);
function onClick1(e) {	
	// do stuff
}

var onClick2 = function(e) {	
	//do stuff
}
element.addEventListener("click", onClick2);



element.addEventListener("click", function(e) {	
	//do stuff
});






(function() {
	// do stuff
})();



(function($) {
	// do stuff with $ as jQuery
})(jQuery);


var Module = (function() {
	var privateVariable = 123;
	
	module = {};
	module.publicVariable = 456;
	module.publicFunction = function() {
		//do stuff	
	};
	
	return module;
})();




loop([4, 9, 13], function(element, index) {
	console.log(element); //4, 9, 13 in drei Zeilen
});
Sort.doSort("Bubblesort", [9, 13, 4]);

function first() {
	var a = 1;
	second(); 
	function second() { 
		third(); 
		function third() { 
			var a = 3;			
			fourth(); 
			function fourth() { 
				console.log(a); // 3
			}
		} 
	}
}
first();


	
function object() { 
	var privateVariable = null; 
	return {
		getV: function() { return privateVariable; },
		setV: function(value) { privateVariable = value; }
	}
}
object.setV(123);
object.getV(); // 123


this 




function MyObject () { 
	this.variable = 123; 
	this.onClickHandler = function(e) {
		console.log(e);
		console.log(this.variable);
	};
}

var o = new MyObject();
o.onClickHandler(1); //1 und 123

document.body.addEventListener("click", o.onClickHandler); 
//Bei Click wird MouseEvent und undefined ausgegeben




function MyObject () { 
	var self = this;
	this.variable = 123; 
	this.onClickHandler = function(e) {
		console.log(e);
		console.log(self.variable);
	};
}
var o = new MyObject();
o.onClickHandler(1); //1 und 123

document.body.addEventListener("click", o.onClickHandler); 
//Bei Click wird MouseEvent und 123 ausgegeben



function MyObject () { 
	this.variable = 123; 
	this.onClickHandler = function(e) {
		console.log(e);
		console.log(this.variable);
	};
}

var o = new MyObject();
o.onClickHandler(1); //1 und 123

document.body.addEventListener("click", function(e) {
	o.onClickHandler.call(o, e); //Erstes Argument ist Kontext, danach die Parameter
	//o.onClickHandler.apply(o, [e]); //apply hat den gleichen Effekt, benutzt für Parameter Array}); //Bei Click wird MouseEvent und 123 ausgegeben
}




// SCOPE + CONTEXT QUIZ
(function() {
    if(true) {
        var a = 5;
    }
    console.log(a); // 5
})()



(function() {
    a = 3;
    alert(a);
})();
console.log(a); // 3



function setVariable() {
	var a = "7";
}
setVariable();
console.log(a); //reference error, a is not defined



// Welche reihenfolge alerts?
var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);  // First
    }
    again();
    alert(a);  // Second
}
test();
​alert(a);​  // Third



	
// Was passiert hier? Antwort: Closure	
function getFunc() {
    var a = 7;
    return function(b) {
        alert(a+b);
    }
}
var f = getFunc();
f(5);
	


//Weil: Function declaration hoisting
function foo(a) {
	a();
    function a() {
        console.log("in a");
    }
}

foo(function(a) {
	console.log("in anonymous")
});
	
// Um das nochmal zu veranschaulichen ein komplizierteres beispiel
(function f(){
    function f(){ return 1; }
    return f();
    function f(){ return 2; }
  })();
	
	
	
	
	
	
	