var game_arr = ["rock", "paper", "scissors"];
var yourPoints = 0;
var computerPoints = 0;


const outcome = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".playerScoreSpan");
const computerScoreSpan = document.querySelector(".computerScoreSpan");
const buttons = document.querySelectorAll("button");
const p = document.querySelector("p");



function getComputerChoice() {
  var Computer_guess = game_arr[Math.floor(Math.random() * 3)];
  return Computer_guess;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    p.textContent = `Its a Tie! You both have selected ${playerSelection}`;
  } else if (playerSelection == null || playerSelection == undefined) {
    console.log("cancel");
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerPoints++;

    p.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    yourPoints++;

    p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function checkForWinner(playerSelection, computerSelection) {
  if (yourPoints == 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.textContent = `You won ${yourPoints} to ${computerPoints} great job beating computer!`;
    outcome.appendChild(h2);

  }

  if (computerPoints == 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.textContent = `You lose ${computerPoints} to ${yourPoints}. Try Again!`;
    outcome.appendChild(h2);
 
  }
}

function runningScore(yourPoints, computerPoints) {
  playerScoreSpan.textContent = `Your Score : ${yourPoints} `;
  computerScoreSpan.textContent = `Computer Score : ${computerPoints}`;
}


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerSelection = `${btn.className}`;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    runningScore(yourPoints, computerPoints);
    checkForWinner(playerSelection, computerSelection);
    
  });
});

