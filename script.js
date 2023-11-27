// The computer will make a random selection between rock paper scissors
let computerSelection = () => numberToChoice(generateNumber())

let generateNumber = () => Math.ceil(Math.random() * 3)

let numberToChoice = (number) => {
    let choice = ""

    switch (number){
        case 1:
        choice = "rock"
        break;

        case 2:
        choice = "paper"
        break;

        case 3:
        choice = "scissors"
        break;
    } 

    return choice
}

// The player will input a command (string)
let playerSelection = prompt("Make a selection: Rock, Paper, Scissors", "paper")
// The code should standardize the command and make it case insensitive
let standardizeSelection = (selection) => selection.toLowerCase()

console.log(standardizeSelection(playerSelection))
console.log(computerSelection())
// The code should check to see if computer and player both have a selection
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("It's a tie!")
    }else if 
    (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors" ){
        console.log("You lost!")
    }else{
        console.log("You won!")
    }
}
// The code will compare to see who won
// The code will declare a winner
// The winner will increment in their score value
