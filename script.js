
//Prompts user choice input 
function getPlayerChoice() {
    let userInput = prompt("Rock, Paper, Scissors");
    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}

//Computer decides
function getComputerChoice() {
    const choices = [ "Rock", "Paper", "Scissors" ];
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

//Play a round of RPS
function playRound(playerSelection, computerSelection){

    console.log("You chose: " + playerSelection)
    console.log("The enemy chose: " + computerSelection)

    if (playerSelection === computerSelection) {
        console.log("You tied this round")
        score();
        resetChoices();
        return;
    }
    else {
        if ((playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || (playerSelection === "Scissors" && computerSelection === "Rock")){
            console.log("You lost this round")
            score();
            resetChoices();
            
            return computerScore += 1;
        }

        else {
            console.log("You won this round")
            score();
            resetChoices();
            
            return playerScore += 1;
        }
    }
}

//Displays score count
function score(a = playerScore, b = computerScore){
    console.log("You're score: " + a + "\n" + "Enemy score: " + b)
}

//Reset choices
function resetChoices(){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
}

//Game Algorithm
function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerChoice, computerChoice);
    }
}

let playerScore = 0; 
let computerScore = 0;
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

game();