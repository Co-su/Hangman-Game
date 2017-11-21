var words = ["fool","magician","priestess","empress","emperor","hierophant","lovers","chariot","strength","hermit","fortune","justice","hanged","death","temperance","devil","tower","star","moon","sun","judgement","world"];

var word = words[Math.floor(Math.random() * words.length)];

var guessLimit = 6;

var answerArray = [];

for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters = word.length;

function hnnghman() {
    if (guessLimit===0) {document.getElementById("arcana").innerHTML = "YOU LOSE"
    }
    var checkGuess = remainingLetters;

	(answerArray.join(" "));

	document.getElementById("arcana").innerHTML = (answerArray.join(" "));

	var guess = document.getElementById("guessBox").value;

	var guess = guess.toLowerCase();

	if (guess.length !== 1 ) {
		document.getElementById("alerts").innerHTML = "Please input one letter";

	} else {
		for (var j = 0; j < word.length; j++) {
						
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--; 
				document.getElementById("arcana").innerHTML = answerArray;}

		}
		if (checkGuess === remainingLetters) {guessLimit--;}	
	}
	if (guessLimit===0) {document.getElementById("arcana").innerHTML = "FAILURE"
    } else if (remainingLetters===0) {document.getElementById("alerts").innerHTML = "Correct!"
    }	
}



