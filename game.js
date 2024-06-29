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
  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (humanChoice == computerChoice) {
      console.log("It's a tie!");
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log("Your score is: " + humanScore);
  console.log("Computer score is: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else if (humanScore == computerScore) {
    console.log("It's a tie!");
  }
}

playGame();
