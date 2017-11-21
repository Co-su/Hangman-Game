  		"<p>Word: " + answerArray + "</p>"
        //document.querySelector("#game").innerHTML = html;

			var words = ["fool","magician","priestess","empress","emperor","hierophant","lovers","chariot","strength","hermit","fortune","justice","hanged","death","temperance","devil","tower","star","moon","sun","judgement","world"];

			var word = words[Math.floor(Math.random() * words.length)];

			var guessLimit = 6;

			var answerArray = [];
			
			for (var i = 0; i < word.length; i++) {
				answerArray[i] = "_";
			}

			var remainingLetters = word.length;

			while((remainingLetters > 0) && (guessLimit > 0)){
				var checkGuess = remainingLetters; 

				alert(answerArray.join(" "));

				var guess = prompt("Press any key to guess, or click Cancel to stop playing.")

				var guess = guess.toLowerCase();

				if (guess.length !== 1 ) {
					alert("Please input one letter");

				} else {
					for (var j = 0; j < word.length; j++) {
						
						if (word[j] === guess) {
						answerArray[j] = guess;
						remainingLetters--;}
					}
					if (checkGuess === remainingLetters) {guessLimit--;}	
				}
			}
