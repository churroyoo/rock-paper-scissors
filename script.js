const choices = [ "Rock", "Paper", "Scissors" ]

function getComputerChoice() {
    //randomly assign a value from Rock Paper Scissors
    let index = Math.floor(Math.random()*3) 
    return choices[index]
}

console.log(getComputerChoice())
