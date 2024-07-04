const result = document.querySelector(".result");
const your_score = document.querySelector(".your-score");
const comp_score = document.querySelector(".comp-score");
const winner = document.querySelector(".winner");

function getComputerChoice() {
  const choicesArr = ["rock", "paper", "scissors"];
  return choicesArr[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let input = prompt(
    "Please enter either rock, paper, or scissors: "
  ).toLowerCase();
  if (input == "rock") {
    return "rock";
  } else if (input == "paper") {
    return "paper";
  } else if (input == "scissors") {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "paper") {
      result.textContent = "Round Result: You lose! Paper beats Rock";
      computerScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (computerScore == 5) {
        winner.textContent =
          "Game over! You lose! Refresh the browser to play again!";
      }
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      result.textContent = "Round Result: You win! Rock beats Scissors";
      humanScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (humanScore == 5) {
        winner.textContent =
          "Game over! You win! Refresh the browser to play again!";
      }
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      result.textContent = "Round Result: You win! Paper beats Rock";
      humanScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (humanScore == 5) {
        winner.textContent =
          "Game over! You win! Refresh the browser to play again!";
      }
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      result.textContent = "Round Result: You lose! Scissors beats Paper";
      computerScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (computerScore == 5) {
        winner.textContent =
          "Game over! You lose! Refresh the browser to play again!";
      }
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      result.textContent = "Round Result: You lose! Rock beats Scissors";
      computerScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (computerScore == 5) {
        winner.textContent =
          "Game over! You lose! Refresh the browser to play again!";
      }
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      result.textContent = "Round Result: You win! Scissors beats Paper";
      humanScore++;
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
      if (humanScore == 5) {
        winner.textContent =
          "Game over! You win! Refresh the browser to play again!";
      }
    } else if (humanChoice == computerChoice) {
      result.textContent = "Round Result: It's a tie!";
      your_score.textContent = "Your Score: " + humanScore;
      comp_score.textContent = "Computer Score: " + computerScore;
    }
  }
  const r_btn = document.querySelector("#r-btn");
  r_btn.addEventListener("click", () => {
    playRound("rock");
  });

  const p_btn = document.querySelector("#p-btn");
  p_btn.addEventListener("click", () => {
    playRound("paper");
  });

  const s_btn = document.querySelector("#s-btn");
  s_btn.addEventListener("click", () => {
    playRound("scissors");
  });
}

playGame();
