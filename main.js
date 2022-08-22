const choices = ["rock", "paper", "scissors"];
let outcome = false;
let tie = false;
let playerWins = 0;
let compWins = 0;

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
}

function game() {
  let playerWins = 0;
  let compWins = 0;
  for (let i = 0; i < 5; i++) {
    console.log("Round: " + (i + 1));
    console.log(playRound());
    if (outcome == true) {
      playerWins++;
    } else if (outcome == false && tie == false) {
      compWins++;
    }
    console.log("Player has won " + playerWins + " round(s)");
    console.log("Computer has won " + compWins + " round(s)");
  }
  compareWins(playerWins, compWins);
}

function getPlayerChoice() {
  let input = prompt("Rock, paper, or scissors?");
  while (input == null) {
    input = prompt("Rock, paper, or scissors?");
  }
  input = input.toLowerCase();
  check = validatePlayer(input);
  while (check == false) {
    input = prompt("Rock, paper, or scissors?");
    input = input.toLowerCase();
    check = validatePlayer(input);
  }
  return input;
}

function validatePlayer(choice) {
  return choices.includes(choice);
}

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
