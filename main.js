const choices = ["rock", "paper", "scissors"];
let outcome = false;
let tie = false;
let playerWins = 0;
let compWins = 0;

const btnR = document.querySelector(".buttonR");
const btnP = document.querySelector(".buttonP");
const btnS = document.querySelector(".buttonS");
const text = document.querySelector(".list");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");

btnR.addEventListener("click", () => playRound("rock"));
btnP.addEventListener("click", () => playRound("paper"));
btnS.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(bruh) {
  tie = false;
  outcome = false;
  text.innerHTML = "";
  const pS = bruh;
  const cS = getComputerChoice();
  console.log("Player chose: " + pS);
  console.log("Computer chose: " + cS);
  addItem("Player chose: " + pS);
  addItem("Computer chose: " + cS);
  compareInput(pS, cS);
  if (outcome == true) {
    playerWins++;
    incPlayer();
  } else if (outcome == false && tie == false) {
    compWins++;
    incComp();
  }

  if (playerWins == 5 || compWins == 5) {
    clear();
  }
}

function game() {}

function compareWins(playerWins, compWins) {
  if (playerWins > compWins) {
    winner = "Player ";
  } else if (compWins > playerWins) {
    winner = "Computer ";
  } else {
    winner = "No one ";
  }
  console.log(winner + "wins the game!");
}

function addItem(a) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(a));
  text.appendChild(li);
}

function compareInput(pS, cS) {
  const li = document.createElement("li");
  if (pS == "rock") {
    if (cS == "rock") {
      tie = true;
      outcome = false;
      li.appendChild(document.createTextNode("Tied Round"));
    } else if (cS == "paper") {
      outcome = false;
      li.appendChild(document.createTextNode("Paper beats Rock, you lose!"));
    } else {
      outcome = true;
      li.appendChild(document.createTextNode("Rock beats Scissors, you win!"));
    }
  }
  if (pS == "paper") {
    if (cS == "paper") {
      tie = true;
      outcome = false;
      li.appendChild(document.createTextNode("Tied Round"));
    } else if (cS == "scissors") {
      outcome = false;
      li.appendChild(document.createTextNode("Scissors beat Paper, you lose!"));
    } else {
      outcome = true;
      li.appendChild(document.createTextNode("Paper beats Rock, you win!"));
    }
  }
  if (pS == "scissors") {
    if (cS == "scissors") {
      tie = true;
      outcome = false;
      li.appendChild(document.createTextNode("Tied Round!"));
    } else if (cS == "rock") {
      outcome = false;
      li.appendChild(document.createTextNode("Rock beats Scissors, you lose!"));
    } else {
      outcome = true;
      li.appendChild(document.createTextNode("Scissors beats Paper, you win!"));
    }
  }
  return text.appendChild(li);
}

function incPlayer() {
  pScore.text = `Player score: ${playerWins}`;
}

function incComp() {
  cScore.text = `Computer score: ${compWins}`;
}

function clear() {
  pScore.text = `Player score: 0`;
  cScore.text = `Computer score: 0`;
  text.innerHTML = "";
  const li = document.createElement("li");
  if (playerWins == 5) {
    li.appendChild(document.createTextNode("You Won the Game!"));
    text.appendChild(li);
  } else {
    li.appendChild(document.createTextNode("You Lost the Game!"));
    text.appendChild(li);
  }
  playerWins = 0;
  compWins = 0;
}

/*
  old code
  if (pS == "rock") {
    if (cS == "rock") {
      tie = true;
      outcome = false;
      return "Tied Round!";
    } else if (cS == "paper") {
      outcome = false;
      return "Paper beats Rock, you lose!";
    } else {
      outcome = true;
      return "Rock beats Scissors, you win!";
    }
  }
  if (pS == "paper") {
    if (cS == "paper") {
      tie = true;
      outcome = false;
      return "Tied Round!";
    } else if (cS == "scissors") {
      outcome = false;
      return "Scissors beat Paper, you lose!";
    } else {
      outcome = true;
      return "Paper beats Rock, you win!";
    }
  }
  if (pS == "scissors") {
    if (cS == "scissors") {
      tie = true;
      outcome = false;
      return "Tied Round!";
    } else if (cS == "rock") {
      outcome = false;
      return "Rock beats Scissors, you lose!";
    } else {
      outcome = true;
      return "Scissors beats Paper, you win!";
    }
  }
*/
