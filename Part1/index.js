console.log("hello world");

const board = [];
function play(clickedId) {
   const playerSpan = document.getElementById("player"); 
   const clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === "X") { 
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedId] = "X";
    }
    else { 
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
}
}


const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board [6];
const bottomCenter = board [7];
const bottomRight = board[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    window.alert ('Winner')
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    window.alert ('Winner')
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    window.alert ('Winner')
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    window.alert ('Winner')
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    window.alert ('Winner')
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    window.alert ('Winner')
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    window.alert ('Winner')
}
if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    window.alert('Winner')
}

let boardFull = true; 

for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner");
    }
}

