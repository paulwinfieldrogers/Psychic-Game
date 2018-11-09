// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

//so we need to:
//1. create an array of possible letters
//2. declare variables to store wins, losses, remaining guesses and guesses so far
//3. declare variables for recording the results on the page via getElementById
//4. set the value of text context for how many of each type is incremented


//set an array of valid letter choices
//I set this to just vowells for easier debugging
var letterChoices = ["a", "e", "i", "o", "u"];

//this function is run when user depresses a key
//it initializes the number of guesses allowed and then stops at 9 guesses
//I've not done the stopping at 9 guesses part due to problems with the core logic

var numberOfUserWins = 0;
var numberOfUserLosses = 0;
var numberOfGuesses = 0;
var numberOfGuessesSoFar = 0;
var numberOfGuessesLeft = 9;

//document.getElementById("userWins").innerHTML = numberOfUserWins;
//document.getElementById("userLoses").innerHTML = numberOfUserLosses;


//This is the function which triggers all the below action at key press

document.onkeyup = function (event) {
  //this captures the key pressed
  var userGuess = event.key;
  if (userGuess === "a" || userGuess === "e" || userGuess === "i" || userGuess === "o" || userGuess === "u")
    //this 1st line ramdomly selects a letter from the array and cycles through the length
    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
  //setting pointers to the DOM elements    
  var gameResult = document.getElementById("result");
  var guessesLeft = document.getElementById("guessesLeft");
  var guessesSoFar = document.getElementById("guessesSoFar");
  var uLose = document.getElementById("userLoses");
  var uWins = document.getElementById("userWins");

  //start of if/else for win or loss - it is currently not working and is incrementing by 2 and also only intializing after the secon key press

  if (userGuess === computerGuess) {
    gameResult.textContent = "Win";
    uWins.textContent = numberOfUserWins++;
    guessesSoFar.textContent = numberOfGuessesSoFar++;
    guessesLeft.textContent = numberOfGuessesSoFar - numberOfGuessesLeft;
  }
  else (userGuess != computerGuess)
  gameResult.textContent = "Lose";
  uLose.textContent = numberOfUserLosses++;
  guessesSoFar.textContent = numberOfGuessesSoFar++;
  guessesLeft.textContent = numberOfGuessesSoFar - numberOfGuessesLeft;

  console.log(computerGuess);
  console.log(userGuess);
  console.log(numberOfUserLosses++);
  console.log(numberOfUserWins++);
  console.log(numberOfGuessesSoFar++);

}
  
