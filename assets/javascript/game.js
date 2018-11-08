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
//4. set the value of text 


console.log("Hello");

//set an array of valid letter choices
var letterChoices = ["a", "e", "i", "o", "u"];

//this function is run when user depresses a key
//it initates the number of guesses allowed and then stops at 9 guesses

var numberOfUserWins =0;
var numberOfUserLosses =0;
var numberOfGuessesLeft =9;
var numberOfGuessesSoFar = 0;

  var uWins = document.getElementById("userWins");
  var uLoose = document.getElementById("userLoses");
  var guessesLeft = document.getElementById("guessesLeft");
  var guessesSoFar = document.getElementById("guessesSoFar");
  uWins.textContent = trackUserWins;
  uLose.textContent = trackUserLosses;
  guessesLeft.textContent = trackGuessesLeft;
  guessesSoFar.textContent = trackGuessesSoFar;

  document.onkeyup = function (event) 
  
  {
    //here we are checking to see if this is a vowell
var userGuess = event.key;
if(userGuess === "a" ||userGuess === "e" || userGuess === "i"  || userGuess === "o" || userGuess === "u") {

    //we randomly select a vowell

    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

    var gameResult = document.getElementById("result");
    
    if (userGuess === computerGuess) {
        gameResult.textContent = "Win";
      trackUserWins++;
    }
    else if (userGuess != computerGuess) {
    gameResult.textContent = "Lose";
    }
