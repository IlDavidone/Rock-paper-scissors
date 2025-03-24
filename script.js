const nightMode = document.querySelector(".night-mode");
const humanScore = document.querySelector(".human");
const computerScore = document.querySelector(".computer");
const infoButton = document.querySelector(".info");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const linkButton = document.querySelector(".link-button");
const imgRock = document.querySelector(".img-rock");
const imgPaper = document.querySelector(".img-paper");
const imgScissors = document.querySelector(".img-scissors");
const resetButton = document.querySelector(".reset-button");
const title = document.querySelector(".title");
const nightModeIcon = document.querySelector(".night-image");

let playerScore = 0;
let computerScoreGame = 0;
let userGuess;
let userBool;

document.body.style.overflow = 'hidden';

if (computerScoreGame < 5 && playerScore < 5) {
  rockButton.addEventListener("click", () => {
    userGuess = 1;
    comparation();
    resetButtonColors();
    if (userBool == true && computerScoreGame < 5 && playerScore < 5) {
      rockButton.setAttribute("class", "right");
      imgRock.setAttribute("class", "right");
    } else if (computerScoreGame < 5 && playerScore < 5) {
      rockButton.setAttribute("class", "wrong");
      imgRock.setAttribute("class", "wrong");
    }
  });

  paperButton.addEventListener("click", () => {
    userGuess = 2;
    comparation();
    resetButtonColors();
    if (userBool == true && computerScoreGame < 5 && playerScore < 5) {
      paperButton.setAttribute("class", "right");
      imgPaper.setAttribute("class", "right");
    } else if (computerScoreGame < 5 && playerScore < 5) {
      paperButton.setAttribute("class", "wrong");
      imgPaper.setAttribute("class", "wrong");
    }
  });

  scissorsButton.addEventListener("click", () => {
    userGuess = 3;
    comparation();
    resetButtonColors();
    if (userBool == true && computerScoreGame < 5 && playerScore < 5) {
      scissorsButton.setAttribute("class", "right");
      imgScissors.setAttribute("class", "right");
    } else if (computerScoreGame < 5 && playerScore < 5) {
      scissorsButton.setAttribute("class", "wrong");
      imgScissors.setAttribute("class", "wrong");
    }
  });
}

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScoreGame = 0;
  humanScore.textContent = playerScore;
  computerScore.textContent = computerScoreGame;
  infoButton.textContent = "";
  resetButtonColors();
});

linkButton.addEventListener("click", () => {
  location.href = "https://github.com/IlDavidone";
});

function resetButtonColors() {
  if (computerScoreGame < 5 && playerScore < 5) {
    rockButton.setAttribute("class", "neutral");
    imgRock.setAttribute("class", "neutral");
    paperButton.setAttribute("class", "neutral");
    imgPaper.setAttribute("class", "neutral");
    scissorsButton.setAttribute("class", "neutral");
    imgScissors.setAttribute("class", "neutral");
  }
}

function randomNumberGenerator() {
  return Math.random();
}

//1: rock 2: paper 3: scissors
function computerResult() {
  let result;
  let number = Math.random() * 100;

  if (number < 34) {
    result = 1;
  } else if (number > 34 && number < 66) {
    result = 2;
  } else {
    result = 3;
  }

  return result;
}

//the same rules of compuetResult applies here (number-wise)
function checkInputs() {
  let result;

  if (userGuess === 1) {
    result = 1;
  } else if (userGuess === 2) {
    result = 2;
  } else if (userGuess === 3) {
    result = 3;
  }

  return result;
}

function comparation() {
  user = checkInputs();
  computer = computerResult();

  if (computerScoreGame < 5 && playerScore < 5) {
    if (user === computer) {
      if ((user == 1 && playerScore < 5) || computerScoreGame < 5) {
        infoButton.textContent = "You both selected Rock! Tie!";
      } else if ((user == 2 && playerScore < 5) || computerScoreGame < 5) {
        infoButton.textContent = "You both selected Paper! Tie!";
      } else if ((user == 3 && playerScore < 5) || computerScoreGame < 5) {
        infoButton.textContent = "You both selected Scissors! Tie!";
      }
    } else if (user === 1 && computer === 3) {
      playerScore = playerScore + 1;
      userBool = true;
    } else if (user === 2 && computer === 1) {
      playerScore = playerScore + 1;
      userBool = true;
    } else if (user === 3 && computer === 2) {
      playerScore = playerScore + 1;
      userBool = true;
    } else if (user === 1 && computer === 2) {
      computerScoreGame = computerScoreGame + 1;
      userBool = false;
    } else if (user === 2 && computer === 3) {
      computerScoreGame = computerScoreGame + 1;
      userBool = false;
    } else if (user === 3 && computer === 1) {
      computerScoreGame = computerScoreGame + 1;
      userBool = false;
    }
  }

  if (playerScore == 5) {
    playerScore = 5;
    infoButton.textContent = "You won!!!";
  }
  if (computerScoreGame == 5) {
    computerScoreGame = 5;
    infoButton.textContent = "You lost, better luck next time!";
  }

  humanScore.textContent = playerScore;
  computerScore.textContent = computerScoreGame;
}

//nightmode activation

let nightModeActive = 0;

nightMode.addEventListener("click", () => {
  if(nightModeActive == 0) {
    nightModeIcon.setAttribute("src", "Assets/moon-line.png");
    nightModeActive = 1;
  }
  else if(nightModeActive == 1) {
    nightModeIcon.setAttribute("src", "Assets/moon.png");
    nightModeActive = 0;
  }
    document.body.classList.toggle("background");
    title.classList.toggle("text-color");
    humanScore.classList.toggle("text-color");
    computerScore.classList.toggle("text-color");
    infoButton.classList.toggle("text-color");
    rockButton.classList.toggle("button-background");
    paperButton.classList.toggle("button-background");
    scissorsButton.classList.toggle("button-background");
});
