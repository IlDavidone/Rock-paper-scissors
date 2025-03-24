const nightMode = document.querySelector(".night-mode");
const humanScore = document.querySelector(".human");
const computerScore = document.querySelector(".computer");
const infoButton = document.querySelector(".info");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const linkButton = document.querySelector(".link-button");

let playerScore = 0;
let computerScoreGame = 0;
let userGuess;

rockButton.addEventListener("click", () => {
    userGuess = 1;
    comparation();
});

paperButton.addEventListener("click", () => {
    userGuess = 2;
    comparation();
});

scissorsButton.addEventListener("click", () => {
    userGuess = 3;
    comparation();
});

function randomNumberGenerator() {
    return Math.random();
}


//1: rock 2: paper 3: scissors
function computerResult() {

    let result;
    let number = Math.random() * 100;

    if (number < 34) {
        result = 1;
    }
    else if (number > 34 && number < 66) {
        result = 2;
    }
    else {
        result = 3;
    }

    return result;

}


//the same rules of compuetResult applies here (number-wise)
function checkInputs() {

    let result;

    if(userGuess === 1) {
        result = 1;
        }
    else if(userGuess === 2) {
        result = 2;
    }
    else if(userGuess === 3) {
        result = 3;
    } 

    return result;

}


function comparation() {

    user = checkInputs();
    computer = computerResult();

    if(user === computer)  {
        if(user == 1){
            infoButton.textContent = "You both selected Rock! Tie!"
        }
        else if(user == 2){
            infoButton.textContent = "You both selected Paper! Tie!"
        }
        else{
            infoButton.textContent = "You both selected Scissors! Tie!"
        }
    }
    else if (user === 1 && computer === 3) {
        console.log("you won!");
    }
    else if (user === 2 && computer === 1) {
        console.log("you won!");
    }
    else if (user === 3 && computer === 2) {
        console.log("you won!");
    }
    else if (user === 1 && computer === 2) {
        console.log("you lost!");
    }
    else if (user === 2 && computer === 3) {
        console.log("you lost!");
    }
    else if (user === 3 && computer === 1) {
        console.log("you lost!");
    }

    console.log("test");

}
