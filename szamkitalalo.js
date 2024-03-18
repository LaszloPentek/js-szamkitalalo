let guessListContainer = document.querySelector(".js-guess-container");
let currentGuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button");
let guessSubmitButton = document.querySelector(".js-submit-guess");

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

function submitGuess(event){
    event.preventDefault();
    let guessValue = Number.parseInt(currentGuessField.value);
    console.log(guessValue, typeof guessValue);
    if (validateGuess()){
        alert("Klikk");
    }
}

function addGuessValidation(){
    currentGuessField.classList.add("is-invalid");
}

function removeValidation(){
    currentGuessField.classList.remove("is-invalid");
}

function validateGuess(){
    let guessValue = Number.parseInt(currentGuessField.value);
    currentGuessField.value = guessValue;
    if(Number.isNaN(guessValue) || guessValue < 1 || guessValue > 100){
        addGuessValidation();
        return false;
    }
        removeValidation();
        return true;
}

startGame();
newGameButton.addEventListener("click", startGame);
guessSubmitButton.addEventListener("click", submitGuess);
currentGuessField.addEventListener("focus", removeValidation)
currentGuessField.addEventListener("change", validateGuess)



console.log(generateTarget())