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
        return "You lost the round!";
    }
    else if(result === 1){
        return "The round is a tie!";
    }
    else{
        return "You won the round!";
    }
}



