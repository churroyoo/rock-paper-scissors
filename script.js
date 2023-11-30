const buttons = document.querySelector("#buttons")

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

// The player will press a button
//we will save that buttons class as their choice
function getPlayerChoice(event) {return playerChoice = event.target.id;}

buttons.addEventListener("click", (event) => {
    console.log(getPlayerChoice(event))
});


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!"
    }else if 
    (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors" ){
        return "You lost!"
    }else{
        return "You won!"
    }
}