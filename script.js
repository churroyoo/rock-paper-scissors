// The computer will make a random selection between rock paper scissors
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
let computerSelection = () => numberToChoice(generateNumber())


let playerSelection;
let buttons = document.querySelector("#buttons")

buttons.addEventListener("click", (event) => {
    let targetId = event.target.id

    switch (targetId) {
        case "rock":
        
        break;

        case "paper":
        
        break;

        case "scissors":
        
        break;
    }
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