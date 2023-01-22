let playerScore = 0; 
let computerScore = 0;

const playArea = document.querySelector('.choices')
const pScore = document.createElement('p')
const pcScore = document.createElement('p')
const results = document.createElement('h3')

//Computer decides
function getComputerChoice() {
    const choices = [ "rock", "paper", "scissors" ];
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

//Play a round of RPS
function playRound(playerSelection, computerSelection){

    pScore.textContent = "You chose: " + playerSelection;
    pcScore.textContent = "The enemy chose: " + computerSelection;
    playArea.append(pScore, pcScore)

    if (playerSelection === computerSelection) {
        results.textContent = "You tied this round"
        playArea.appendChild(results)
        return;
    }
    else {
        if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")){
            results.textContent = "You lost this round"
            playArea.appendChild(results)
            return computerScore += 1;
        }

        else {
            results.textContent = "You won this round"
            playArea.appendChild(results)
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

    if (a == 5 || b == 5){
        playArea.removeChild(pScore)
        playArea.removeChild(pcScore)
        if (a == 5){
            results.textContent = "Congrats, You Win!"
        }
        else {
            results.textContent = "Damn boi, You Lose..."
        }
    }
}


//Cycles thru each button to check if there was an input.
const choices = document.querySelectorAll('button')
choices.forEach( (button) => 
    button.addEventListener('click', () =>{

        playRound(button.className, getComputerChoice());
        score();
    })
);
