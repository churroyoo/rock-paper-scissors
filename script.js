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

// The player will input a command (string)
// The code should standardize the command and make it case insensitive
let playerSelection;
let buttons = document.querySelector("#buttons")

buttons.addEventListener("click", (event) => {
    let target = event.target.id
    
    switch (target) {
        case "rock":
        playerSelection = "rock"
        console.log(`You chose: ${playerSelection}`)
        console.log(playRound(playerSelection, computerSelection()))
        break;

        case "paper":
        playerSelection = "paper"
        console.log(`You chose: ${playerSelection}`)
        console.log(playRound(playerSelection, computerSelection()))
        break;

        case "scissors":
        playerSelection = "scissors"
        console.log(`You chose: ${playerSelection}`)
        console.log(playRound(playerSelection, computerSelection()))
        break;
    }
});


// The code should check to see if computer and player both have a selection
// The code will compare to see who won
// The code will declare a winner
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

// The winner will increment in their score value

// let results = playRound(playerSelection(), computerSelection())

// if (results === "You lost!") {
//     computerScore++
//     console.log(`${results} 
//     Your score:${playerScore} 
//     PC's score:${computerScore} `)

// }else if (results === "You won!") {
//     playerScore++
//     console.log(`${results} 
//     Your score:${playerScore} 
//     PC's score:${computerScore} `)
// }else{
//     console.log(`${results} 
//     Your score:${playerScore} 
//     PC's score:${computerScore} `)