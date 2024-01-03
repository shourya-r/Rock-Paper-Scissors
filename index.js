function getRandom(list){
    return list[Math.floor(Math.random()*list.length)];
}

let choices = ["rock", "paper", "scissors"];

for(let i = 0; i<15; i++){
    console.log(getRandom(choices));
}