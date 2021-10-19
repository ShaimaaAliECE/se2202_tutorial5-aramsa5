let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

let gameboard = document.getElementById('gameboard');

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++) {
        let button = document.createElement('button');
        let cell = 'c' + (i+1);
        button.innerHTML = '[ ]';
        document.getElementById(cell).appendChild(button);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let addButtons = document.querySelectorAll('button');
for (let i=0; i<addButtons.length; i++)
{
    addButtons[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    if (nextPlayer == 'X') {
        event.target.innerHTML = '[X]'
        event.target.disabled = true;
        nextPlayer = 'O'
        document.getElementById("next-lbl").innerHTML = nextPlayer;
    }

    else {
        event.target.innerHTML = '[O]'
        event.target.disabled = true;
        nextPlayer = 'X'
        document.getElementById("next-lbl").innerHTML = nextPlayer;
    }

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    let checkCount = 0;

    for (let i = 0; i < 9; i++) {
        if (addButtons[i].disabled == true)
            checkCount++;
    }

    if (checkCount == 9)
        return true;

    else
        return false;

}
