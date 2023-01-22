//Computer decides
function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

//Play a round of RPS
function playRound(playerSelection, computerSelection){
    const playArea = document.querySelector('.choices')
    const pScore = document.createElement('p')
    const pcScore = document.createElement('p')
    const results = document.createElement('p')
    pScore.textContent = "You chose: " + playerSelection;
    pcScore.textContent = "The enemy chose: " + computerSelection;
    playArea.append(pScore, pcScore)

    console.log("You chose: " + playerSelection)
    console.log("The enemy chose: " + computerSelection)

    if (playerSelection === computerSelection) {
        results.textContent = "You tied this round"
        playArea.appendChild(results)
        console.log("You tied this round")
        return;
    }
    else {
        if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")){
            results.textContent = "You lost this round"
            playArea.appendChild(results)
            console.log("You lost this round")
            return computerScore += 1;
        }

        else {
            results.textContent = "You won this round"
            playArea.appendChild(results)
            console.log("You won this round")
            return playerScore += 1;
        }
    }
    
}

//Displays score count
function score(a = playerScore, b = computerScore){
    let playerScoreCount = document.querySelector('#playerScore')
    let computerScoreCount = document.querySelector('#computerScore')

    playerScoreCount.textContent = a;
    computerScoreCount.textContent = b;
    console.log("You're score: " + a + "\n" + "Enemy score: " + b)
}

//Game Algorithm
function game(){
 //   for (let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        score();
//  }
}

let playerScore = 0; 
let computerScore = 0;

//Cycles thru each button to check if there was an input.
const choices = document.querySelectorAll('button')
choices.forEach( (button) => 
    button.addEventListener('click', () =>{
        playRound(button.className, getComputerChoice());
    })
);


//game();