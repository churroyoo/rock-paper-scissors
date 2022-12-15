const choices = [ "Rock", "Paper", "Scissors" ]
const userInput = prompt("Rock, Paper, Scissors");

//CHOICES: Prompts user choice input and Computer decides
function getPlayerChoice() {
    return playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1);
}

function getComputerChoice() {
    //randomly assign a value from [choices]
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {

    }

    return 
}

function game(){

}
console.log(getPlayerChoice())
console.log(getComputerChoice())
