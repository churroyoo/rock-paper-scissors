const choices = [ "Rock", "Paper", "Scissors" ]
const userInput = prompt("Rock, Paper, Scissors");

//CHOICES: Prompts user choice input and Computer decides
let getPlayerChoice = function () {
    return playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLocaleLowerCase();
}

let  getComputerChoice = function() {
    //randomly assign a value from [choices]
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

function playRound(playerSelection, computerSelection){
    getPlayerChoice.toString();
    getComputerChoice.toString();

    if (playerSelection === computerSelection) {
        return "tie";
    }

    else {
        return "not a tie";
    }
}

console.log(getPlayerChoice())
console.log(getComputerChoice())

console.log(playRound(getPlayerChoice(), getComputerChoice()));