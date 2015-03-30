
var Fahrzeug = function(name, ps, besitzer){
	if (!besitzer || !besitzer.vorname || !besitzer.nachname) {
		throw new Error("Besitzer ungültig!");
	}

	var besitzer = besitzer;
	var name = name;
	var ps = ps;
	
	this.printBesitzer = function() {
		console.log(besitzer.vorname + " " + besitzer.nachname);
	};
	
	this.fahre = function(){
		throw new Error("not implemented!");
	};
}

Fahrzeug.prototype.hupe = function(){
	console.log("tut tut");
}

var Auto = function(name, ps, sitze, besitzer){
	var sitze = sitze;
	Fahrzeug.call(this, name, ps, besitzer);
	
	this.parken = function(){
		console.log("geparkt");
	}
	
	this.fahre = function(){
		console.log(name + " fährt mit " + ps + " PS.");
	};
};

var LKW = function(name, ps, maxLadung, besitzer){
	var maxLadung = maxLadung;
	var ladung = 0;
	Fahrzeug.call(this, name, ps, besitzer);
	
	this.setLadung = function(ladung){
		this.ladung = ladung;
	}
	
	this.fahre = function(){
		console.log(name + " fährt mit einer Ladung von " + this.ladung + " t.");
	}
}

// LKW hinzufügen
// polymorphie

Auto.prototype = Object.create(Fahrzeug.prototype);

var auto = new Auto("Citroen 2CV", 50, 4, {
	vorname: "John",
	nachname: "Doe"
});
var lkw = new LKW("MAN 750", 200, 10, {vorname: "Steve", nachname: "Wayne"});

auto.fahre();
lkw.setLadung(5);
lkw.fahre();