// Function to get random element from a list
function getRandom(list){
    return list[Math.floor(Math.random()*list.length)];
}

// List that represents the choices available
let choices = ["rock", "paper", "scissors"];

// Function to get the computer's choice using getRandom
function getComputerChoice(){
    return getRandom(choices);
}


// Function that will play 1 round for us 
// Takes playerChoice and computerChoice as input
function playRound(playerChoice, computerChoice){
    console.log("You picked: " + playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase());
    console.log("Computer picked: " + computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1).toLowerCase());

    // convert string to lowercase to account for irregularly
    // capitalised inputs from player
    let playerChoice_lower = playerChoice.toLowerCase();
    let computerChoice_lower = computerChoice.toLowerCase();
    
    // 2D Result Array
    let resultArr = [
        //         R P S
            /*R*/ [1,0,2],
            /*P*/ [2,1,0],
            /*S*/ [0,2,1],
        ]
    
    // Define indexes for player choice and computer choice to check result
    // from 2D Array
    let playerIndex; 
    let computerIndex;
    if(playerChoice_lower==="rock"){
        playerIndex = 0;
    }
    else if(playerChoice_lower==="paper"){
        playerIndex = 1;
    }
    else{
        playerIndex = 2;
    }

    if(computerChoice_lower==="rock"){
        computerIndex = 0;
    }
    else if(computerChoice_lower==="paper"){
        computerIndex = 1;
    }
    else{
        computerIndex = 2;
    }
    
    //Fetch the result from resultArr based on the indices
    let result = resultArr[playerIndex][computerIndex];

    // return the output based on result
    if(result === 0){
        console.log("You lost the round!");
    }
    else if(result === 1){
        console.log("The round is a tie!");
    }
    else{
        console.log("You won the round!");
    }
    return result;
}

// Implementing the BO5 game function

function best_of_five(){
    //Take input from user using prompt
    let roundsLeft = 5;
    
    // Initialising the player and computer score to 0
    let playerScore = 0; 
    let computerScore = 0;

    // Run a while loop until there are no rounds left
    while(roundsLeft>0){
        let playerChoice = prompt("Pick one: Rock, Paper or Scissors");
        let computerChoice = getComputerChoice();
        // Get the result of 1 round from playRound function
        let roundResult = playRound(playerChoice, computerChoice);
        if(roundResult==0){
            roundsLeft--;
            computerScore += 2;
        }
        else if(roundResult==2){
            roundsLeft--;
            playerScore += 2;
        }
    }
    //At the end check who has the higher score and declare the winner
    if(playerScore>computerScore){
        console.log("You won the game!");
    }
    else{
        console.log("You lost the game. Better luck next time!");
    }

}

best_of_five();

