// Global Variables 

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToChoose = null;

// Computer Choice 

var computerGuess = function() {
	alphabet[Math.floor(Math.random()*alphabet.length)];
}

// Update guesses 

var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
}

var updateletterToChoose = function(){
	this.letterToChoose = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
}

var updateGuessesSoFar = function(){
	document.querySelector('#guesses').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
}

// New Game Function

var newGame = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];
	updateletterToChoose();
	updateGuessesSoFar();
	updateGuessesLeft();
}

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = event.key; 

	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessesSoFar();

		if (guessesLeft > 0){
			if (userGuess === letterToChoose){
				wins++;
				document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
				alert("Congrats! You selected the right letter!");
				newGame();
			}
		} else if (guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
			alert("Try Again!");
			newGame();
		}
}