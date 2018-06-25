var theBird=["Eagle","Crow","Loon","Turkey", "Parrot", "Vulture", "Emu", "Hummingbird", "Swan", "Seagull" ];
var theWord=["Dyslexic", "Rainbow", "Crooked", "Golden", "Drunken", "Tipsy", "Graceful", "Clumsy", "Forgetful", "Wobbly"];


function newName() {
	var randomNumberBird = Math.floor(Math.random() * (theBird.length));
	var randomNumberWord = Math.floor(Math.random() * (theWord.length));

	document.getElementById('nameDisplay').innerHTML =  theWord[randomNumberWord] +" "+ theBird[randomNumberBird];


}

