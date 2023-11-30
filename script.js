const buttons = document.querySelector("#buttons")
const resultDisplay = document.querySelector("#result")
const playerScoreDisplay = document.querySelector("#player-score")
const computerScoreDisplay = document.querySelector("#computer-score")

let playerScore = 0;
let computerScore = 0;
let result = "";
let gameOver = false;

// The computer will make a random selection between rock paper scissors
function genRandomNumber() {return Math.ceil(Math.random() * 3)}
function numberToChoice(number){
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
function getComputerChoice() {return numberToChoice(genRandomNumber())}
//The players choice is taken from the buttons id using event delegation
function getPlayerChoice(event) {return playerChoice = event.target.id;}

buttons.addEventListener("click", (event) => {
    checkGameOver()
    if (gameOver){
        resultDisplay.textContent = "Game Over!";
        playerScoreDisplay.textContent = "Your Score: " + playerScore.toString();
        computerScoreDisplay.textContent = "PC Score: " + computerScore.toString();
    }else{
        playRound(getPlayerChoice(event), getComputerChoice())
        resultDisplay.textContent = result;
        playerScoreDisplay.textContent = "Your Score: " + playerScore.toString();
        computerScoreDisplay.textContent = "PC Score: " + computerScore.toString();
    }
});

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        result = "You tied!";
        return
    }else if 
    (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors" ){
        result = "The PC got a point!"
        computerScore++
        checkWinner()
        return
    }else{
        result = "You got a point!"
        playerScore++
        checkWinner()
        return
    }
}
function checkGameOver() {
    if (playerScore >= 5 || computerScore >= 5){
        gameOver = true;
    }else{
        gameOver = false;
    }
}
function checkWinner(){
    if (playerScore === 5) {
        result = "CONGRATS, YOU WON"
    } else if (computerScore === 5){
        result = "Sorry, You lost..."
    }
    return gameOver = true
}