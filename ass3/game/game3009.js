let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw! ";
    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "stone") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You Win!  ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        result = `You Lose!  ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("playerScore").innerText = "0";
    document.getElementById("computerScore").innerText = "0";
}
