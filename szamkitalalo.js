let guessListContainer = document.querySelector(".js-guess-container");
let currentGuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button");

let target;

function generateTarget(){
    return Math.floor(Math.random() * 100) + 1;
}

function resetGame(){
    //korábbi tippek tőrlése
    guessListContainer.innerHTML = "";
    //input mező tartalmának törlése
    currentGuessField.value = "";
}

function startGame(){
    resetGame();
    target = generateTarget();
}

startGame();
newGameButton.addEventListener("click", startGame);

console.log(generateTarget())