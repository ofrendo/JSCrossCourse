/* UTILITY FUNCTIONS */ 

// show an alert with the current date and time
function onButtonDateClick(){
	var date = new Date();
	var dateString = date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	alert("Current date and time: " + dateString);
}

// Get entropy for a password (in bits)
function getEntropy(password, symbols) {
	// Length * Logarithm base 2 of possible symbols
	var l = password.length;
	var result = l * Math.log(symbols, 2);
	return result;
}

// Get length of time required to brute force the password
function getTimeToCrack(password, symbols, kps) {
	// Time to crack is defined as keyspace / kps
	// = (symbols ^ l) / kps
	var keyspace = Math.pow(symbols, password.length);
	var result = keyspace / kps;
	return result;
}

/* DOM MANIPULATION */

// Called when the timer for the clock ticks
var onTimerTick = function() {
	var now = new Date();
	document.getElementById("spanClock").innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
};

var getTimeString = function(seconds) {
	var years = Math.floor(seconds/(60*60*24*365));
	var days = Math.floor(seconds/(60*60*24)) % 365;
	var hours = parseInt(seconds/3600) % 24;
	var minutes = parseInt(seconds/60) % 60;
	var seconds = parseInt(seconds % 60);

	var result =  (years == 0 ? " " : years + "y ") +
				  (days == 0 ? " " : days + "d ") + 
				  hours + "h " +
				  minutes + "m " +
				  seconds + "s";
	return result;
}

// Called when password text field changes
var onPasswordChange = function(e) {
	// event "e" is passed to this function
	// e.target is the input, input.value is the password
	var password = document.getElementById("inputPassword").value;

	// Get KPS (defined by user input)
	var kps = parseInt(document.getElementById("inputKPS").value);

	// Get amount of symbols (defined by user input)
	var dropdown = document.getElementById("selectAmountSymbols");
	var symbols = dropdown.options[dropdown.selectedIndex].value;

	// Calculate entropy and show the result to the user
	var entropy = getEntropy(password, symbols);
	document.getElementById("spanEntropy").innerHTML = entropy + " Bit";

	// Calculate time to crack
	var timeToCrack = getTimeToCrack(password, symbols, kps);
	document.getElementById("spanTimeToCrack").innerHTML = getTimeString(timeToCrack);
};

var onMenuItemClick = function(e) {
	// Set active menu item
	select(".menuItem", function(menuItem) {
		menuItem.classList.remove("active");
	});
	e.target.parentElement.classList.add("active");

	// Show correct container divs
	select(".contentContainer", function(div) {
		div.classList.add("noShow");
	});
	document.getElementById(e.target.getAttribute("data-contentContainer")).classList.remove("noShow");

};


/* ON DOCUMENT LOAD */
(function() {
	// GENERAL PAGE STUFF
	// Set event for clicking on menu items
	select(".menuItem", function(item, i) {
		item.addEventListener("click", onMenuItemClick);
	});

	// Set and start the clock
	setInterval(onTimerTick, 1000);

	// SECURITY
	// Set event for when user types in a password. 
	// "change" is fired when input is changed and then loses focus
	// "keyup" is fired on every change, so we use "keyup" here
	document.getElementById("inputPassword").addEventListener("keyup", onPasswordChange);
	document.getElementById("inputKPS").addEventListener("keyup", onPasswordChange);
	document.getElementById("selectAmountSymbols").addEventListener("change", onPasswordChange);

	// RECURSION
	document.getElementById("inputFibonacci").addEventListener("keyup", onFibonacci);
	document.getElementById("inputBinarySearch").addEventListener("keyup", onBinarySearch)

	// SORT
	document.getElementById("buttonGenerate").addEventListener("click", onGenerateArray);
	document.getElementById("buttonSort").addEventListener("click", onBubbleSort);
	document.getElementById("buttonSortFunctional").addEventListener("click", Sort.onSort);

	select("#selectSortingAlgorithm", function(selectSort) {
		loop(Sort.algorithms, function(alg, i) {
			var option = document.createElement("option");
			option.value = i;
			var text = document.createTextNode(alg.name);
			option.appendChild(text);
			selectSort.appendChild(option);
		});
	});
	
}());

// DOM MANIPULATION
function select(query, fn) {
	var elements = document.querySelectorAll(query);
	loop(elements, fn);
}


// RECURSION
/*
	Addiert die vorherige Zahl mit der vor vorherigen Zahl. Die Reihe ist 
	f(n) = f(n-1) + f(n-2)
	f(1) = f(2) = 1
	Also: 1, 1, 2, 3, 5, 8, 13, 21, ...
*/
function onFibonacci(e) {
	var n = document.getElementById("inputFibonacci").value;
	var steps = [];
	var result = fibonacci(n, function(n, result) {
		steps[n] = result;
	});
	document.getElementById("labelFibonacci").innerHTML = steps;
	return {result: result, steps: steps};
}

function fibonacci(n, stepFn) {
	result = (n < 2) ? 1 : fibonacci(n-2, stepFn) + fibonacci(n-1, stepFn);
	if (typeof(stepFn) == "function") stepFn(n, result);
	return result;
}


function onBinarySearch(e) {
	// Note the values here will be strings because of weak types
	var values = document.getElementById("inputBinarySearchValues").value;
	values = values.split(",");
	for (var i = 0; i < values.length; i++) 
		values[i] = parseInt(values[i])

	var searchValue = parseInt(document.getElementById("inputBinarySearch").value);

	var index = binarySearch(values, searchValue, 0, values.length-1);

	document.getElementById("labelBinarySearch").innerHTML = "index=" + index;
	return {index: index}
}

/* 
	Effiziente Suche mit O(log n) Komplexität. Array muss sortiert sein
*/
function binarySearch(a, searchValue, low, high) {
	if (high < low) {
		return null;
	}

	var mid = Math.floor((low+high) / 2);

	if (searchValue === a[mid]) {
		return mid;
	}

	if (searchValue < a[mid]) {
		return binarySearch(a, searchValue, low, mid-1);
	}
	else {
		return binarySearch(a, searchValue, mid+1, high)
	}

}

// Functional for loop
//loop(array, function(i, elem) {
//
//});

function loop(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn( array[i], i );
	}
}

// SORT

// functions for events
function onGenerateArray() {
	var n = document.getElementById("inputNoElem").value;
	var min = document.getElementById("inputMin").value;
	var max = document.getElementById("inputMax").value;
	if(isNaN(n) || isNaN(min) || isNaN(max)) return alert("Invalid values!");
	var arr = generateArray(parseInt(n), parseInt(min), parseInt(max));
	document.getElementById("inputList").value = "" + arr;
}

function onBubbleSort() {
	// create array
	var list = document.getElementById("inputList").value;
	var arr = list.split(",");
	for(var i = 0; i < arr.length; i++){
		if(isNaN(arr[i])) return alert("Invalid value in list!");
		arr[i] = parseInt(arr[i]);
	}
	// sort array
	var stack = bubbleSortVis(arr);
	// create output
	var str = "" + arr;
	str = str.replace(/,/g, ", ");
	document.getElementById("labelSortedList").innerHTML = str;
	return stack;
}



// generates random array to use for sorting
function generateArray(n, min, max) {
	var a = [];
	for(var i = 0; i < n; i++) a.push(Math.floor(Math.random() * (max + 1 - min) + min));
	return a;
}


// sorts an array using Bubblesort and fills a stack to use for visualization
function bubbleSortVis(a) {
    var swapped,
		c = 0,
		change;
		stack = [{arr: a.slice()}];
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
			change = false;
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
				change = true;
            }
			stack.push({c1: c, c2: i, change: change, arr: a.slice()});
        }
		c++;
    } while (swapped);
	return stack;
}
