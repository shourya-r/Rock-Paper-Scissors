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

// 2D Result Array
let resultArr = [
//         R P S
    /*R*/ [1,0,2]
    /*P*/ [2,1,0]
    /*S*/ [0,2,1]
]

