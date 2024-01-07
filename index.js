let playerScore = 0;
let computerScore = 0; 

// Function to get random element from a list
function getRandom(list){
    return list[Math.floor(Math.random()*list.length)];
}

// List that represents the choices available
const choices = ["ROCK", "PAPER", "SCISSORS"];

// Function to get the computer's choice using getRandom
function getComputerChoice(){
    return getRandom(choices);
}

// Function that will play 1 round for us 
// Takes playerChoice as input
function findWinner(playerChoice){ 
    let roundWinner;
    const computerChoice = getComputerChoice();
    displayChoice(playerChoice, computerChoice);
    if(playerChoice==="ROCK" && computerChoice==="SCISSORS" ||
    playerChoice==="PAPER" && computerChoice==="ROCK" ||
    playerChoice==="SCISSORS" && computerChoice==="PAPER"){
        roundWinner = "Player";
    }
    else if(playerChoice==="ROCK" && computerChoice==="PAPER" ||
    playerChoice==="PAPER" && computerChoice==="SCISSORS" ||
    playerChoice==="SCISSORS" && computerChoice==="ROCK"){
        roundWinner = "Computer";
    }
    else{
        roundWinner = "Tie";
    }
    displayWinner(roundWinner);
    displayDescription(roundWinner, playerChoice, computerChoice);
    updateScore(roundWinner);
}

function updateScore(roundWinner){
    if(roundWinner==="Player"){
        playerScore++;
    }
    else if(roundWinner==="Computer"){
        computerScore++;
    }
    displayScore();
}

function capitaliseFirstLetter(string){
    return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
}

// UI

// References to elements in the scoreboard
const roundResult = document.querySelector(".round-result");
const roundDescription = document.querySelector(".round-description");
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

//References to buttons 
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

//Make a function to display the choices
function displayChoice(playerChoice, computerChoice){
    if(playerChoice === "ROCK"){
        playerChoiceDisplay.textContent = "✊";
    }
    else if(playerChoice === "PAPER"){
        playerChoiceDisplay.textContent = "✋";
    }
    else{
        playerChoiceDisplay.textContent = "✌️";
    }

    if(computerChoice === "ROCK"){
        computerChoiceDisplay.textContent = "✊";
    }
    else if(computerChoice === "PAPER"){
        computerChoiceDisplay.textContent = "✋";
    }
    else{
        computerChoiceDisplay.textContent = "✌️";
    }
}

//Making a function to display the round winner
function displayWinner(roundWinner){
    if(roundWinner==="Player"){
        roundResult.textContent = "You won!";
    }
    else if(roundWinner==="Computer"){
        roundResult.textContent = "You lost!";
    }
    else{
        roundResult.textContent = "It's a tie!";
    }
}

//Making a function to display the round description
function displayDescription(roundWinner, playerChoice, computerChoice){
    if(roundWinner==="Player"){
        roundDescription.textContent = `${capitaliseFirstLetter(playerChoice)} beats ${capitaliseFirstLetter(computerChoice)}`;
    }
    else if(roundWinner==="Computer"){
        roundDescription.textContent = `${capitaliseFirstLetter(playerChoice)} is beaten by ${capitaliseFirstLetter(computerChoice)}`;
    }
    else{
        roundDescription.textContent = `${capitaliseFirstLetter(playerChoice)} ties with ${capitaliseFirstLetter(computerChoice)}`;
    }
}

// Function to display the score 
function displayScore(){
    playerScoreDisplay.textContent = `Player : ${playerScore}`;
    computerScoreDisplay.textContent = `Computer : ${computerScore}`;
}

// Add event handlers to the buttons
rockButton.addEventListener('click',() => findWinner("ROCK"));
paperButton.addEventListener('click',() => findWinner("PAPER"));
scissorsButton.addEventListener('click',() => findWinner("SCISSORS"));


