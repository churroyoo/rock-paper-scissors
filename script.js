// The computer will make a random selection between rock paper scissors
// The player will input a command (string)
let playerSelection = prompt("Make a selection: Rock, Paper, Scissors", "paper")
// The code should standardize the command and make it case insensitive
let standardizeSelection = (selection) => {
    selection.toLowerCase()
}
// The code should check to see if computer and player both have a selection
// The code will compare to see who won
// The code will declare a winner
// The winner will increment in their score value
