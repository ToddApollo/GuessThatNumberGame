const enterNumText = `Please enter a number greater than zero`;
let restartGame = true;
let rangeNum;
let randomNum;
let attempts;
let guess;
let playAgain;

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start to game.`);

// Game restarts as long a restartGame has a value of true
while (restartGame) {
  // Asks user to enter a number to set the upper bound for the random number that will be created
  rangeNum = parseInt(prompt(`Please enter a maximum number for the range:`));
  // rangeNum = parseInt(rangeNum);

  // parseInt tries to convert a value into a number value. If the conversion is not possbile, then it will return NaN as the value/result. (NOTE: NaN has a default boolean value of false. All numbers (except zero) have a default boolean value of true. Negative numbers included.)

  // Verifies the user's entry for a range number is a number greater than zero
  while (!rangeNum || rangeNum < 1) {
    rangeNum = parseInt(prompt(enterNumText));
  }

  // Creates the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  // Prompts user to enter a number of attemps allowed (A.K.A. Number of guesses)
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  // Verifies the user's entry for a number of attempts allowed is a number greater than zero
  while (!attempts || attempts < 1) {
    attempts = parseInt(prompt(enterNumText));
  }

  // Asks user to enter a guess in the range that they set
  guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempts:`);

  // Continues looping until the user guesses the correct number or runs out of attempts (Loops until a BREAK keyword is run)
  while (true) {
    // Displays the number/answer when a code word is entered
    if (guess === "Mellon"){
      alert(`The number is ${randomNum}`);
      guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempts:`);
    }

    // Tries to convert the user's new guess into a number
    guess = parseInt(guess);

    // Verifies the user's guess is a number, more than zero, and within the range they set
    while (!guess || guess < 1 || guess > rangeNum) {
      guess = parseInt(prompt(`${enterNumText} and with the range of 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if the user guessed correctly
    if (guess === randomNum) {
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;
      // Checks if user has any attemps left. If not, then the game ends
    } else if (attempts === 0) {
      alert(`Sorry, but you have run out of attempts :(
        The number was ${randomNum}`);
      break;
      // Checks if user's guess was too low and prompts user to guess again if guess was too low
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempts left`);
      // Prompts user the guess was too high and to guess again
    } else {
      guess = prompt(`Too high. You have ${attempts} attempts left`);
    }
  }
  
  // Prompts user with option to play again
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  // Loop continues until user submits a valid response
  while (true) {
    // Checks if the user answer no (A.K.A "N" or "n")
    if (playAgain.toUpperCase() === "N"){
      // Alerts user the game is over and game does not restart
      alert(`Thanks for playing!`);
      restartGame = false;
      break;
      // Checks if the user answer is yes (A.K.A."Y" or "y")
    } else if (playAgain.toUpperCase() === "Y"){
      // The game restarts
      break;
      // Prompts the user to enter a valid response and starts the loop again
    } else {
      playAgain = prompt(`Please enter Y or N:`);
    }
  }
}
















