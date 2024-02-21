const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");


let player;
let computer;
let result;
let playerScore = 0; // Declare playerScore globally
let computerScore = 0; // Declare computerScore globally


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = result;
    updateScore(result);

    // if (playerScore >=5 || computerScore >= 5){
    //   alert("Game Over! Resetting...");
    //   resetGame();
    // }
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1; //or * choices.length

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"

    
    }
    
}

function updateScore(result) {
  if (result === 'You Win!') {
      playerScore++;
  } else if (result === 'You Lose!') {
      computerScore++;
  }
  document.getElementById('playerScoreDisplay').textContent = playerScore;
  document.getElementById('computerScoreDisplay').textContent = computerScore;
}
