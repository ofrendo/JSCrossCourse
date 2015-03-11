/* UTILITY FUNCTIONS */ 

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
}

// Called when password text field changes
var onPasswordChange = function(e) {
	return;
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
	document.getElementById("spanEntropy").innerHTML = entropy;

	// Calculate time to crack
	var timeToCrack = getTimeToCrack(password, symbols, kps);
	document.getElementById("spanTimeToCrack").innerHTML = timeToCrack;
}


/* ON DOCUMENT LOAD */

(function() {
	// Set and start the clock
	//setInterval(onTimerTick, 1000);
	// Set event for when user types in a password. 
	// "change" is fired when input is changed and then loses focus
	// "keyup" is fired on every change, so we use "keyup" here
	//document.getElementById("inputPassword").addEventListener("keyup", onPasswordChange);
	//document.getElementById("inputKPS").addEventListener("keyup", onPasswordChange);
}());


// RECURSION
/*
	Addiert die vorherige Zahl mit der vor vorherigen Zahl. Die Reihe ist 
	f(n) = f(n-1) + f(n-2)
	f(1) = f(2) = 1
	Also: 1, 1, 2, 3, 5, 8, 13, 21, ...
*/
function fibonacci(n) {
	if (n < 2){
		return 1;
	} else {
		return fibonacci(n-2) + fibonacci(n-1);
	}
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
		fn( i, array[i] );
	}
}