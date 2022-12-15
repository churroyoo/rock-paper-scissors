const choices = [ "Rock", "Paper", "Scissors" ];
let userInput = prompt("Rock, Paper, Scissors");

//CHOICES: Prompts user choice input and Computer decides
let getPlayerChoice = function () {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}

let  getComputerChoice = function() {
    //randomly assign a value from [choices]
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){


    if (playerSelection === computerSelection) {
        return "tie";
    }

    else {
        if ((playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || (playerSelection === "Scissors" && computerSelection === "Rock")){
            return "u lose";
        }
        /*else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            return "u lose";
        }
        else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            return "u lose";
        }*/
        else {
            return "u win";
        }
    }
}
console.log("You chose: " + playerSelection)
console.log("The enemy chose: " + computerSelection)

console.log(playRound( playerSelection, computerSelection ));