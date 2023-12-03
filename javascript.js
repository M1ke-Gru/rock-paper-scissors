function game() {
  const buttons = document.querySelectorAll(".rock, .paper, .scissors");
  let scoreandround = [0, 0, 0];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const playerChoice = playerMove(i);
      const computerChoice = computerMove();
      updateGame(playerChoice, computerChoice, scoreandround);

      if (scoreandround[0] === 5 || scoreandround[1] === 5) {
        const roundNumber = document.querySelector(".round");
        let winner =
          scoreandround[0] > scoreandround[1] ? "You win" : "Computer wins";
        roundNumber.textContent = winner;

        // Remove the click event listener for all buttons
        buttons.forEach((button) =>
          button.removeEventListener("click", arguments.callee),
        );
      }
    });
  }
}

function playerMove(choice) {
  const choices = ["rock", "paper", "scissors"];
  return choices[choice];
}

function computerMove() {
  const images = [
    "./images/rock.png",
    "./images/paper.png",
    "./images/scissors.png",
  ];
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  const showMove = document.querySelector(".compmove");
  showMove.src = images[random];
  return choices[random];
}

function updateGame(playerChoice, computerChoice, score) {
  const playerText = document.querySelector(".vs1");
  const computerText = document.querySelector(".vs2");
  const roundNumber = document.querySelector(".round");

  console.log("Player Text Element:", playerText);
  console.log("Computer Text Element:", computerText);

  if (!playerText || !computerText) {
    console.error("Player or computer text element not found");
    return;
  }

  score[2]++;
  roundNumber.textContent = "Round " + score[2].toString();
  if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log("Player wins");
    score[0]++;
    playerText.textContent = "You: " + score[0].toString();
  } else if (playerChoice !== computerChoice) {
    console.log("Computer wins");
    score[1]++;
    computerText.textContent = "Computer: " + score[1].toString();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  game();
});
