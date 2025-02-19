const target = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const Input = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const feedbackDiv = document.getElementById('feedback');
const attemptsDiv = document.getElementById('attempts');
function handleGuess() {
    const userGuess = parseInt(Input.value);
    attempts++;
    if (userGuess < target) {
        feedbackDiv.innerHTML = `"Too low!"`;
    } else if (userGuess > target) {
        feedbackDiv.innerHTML = `"Too high!"`;
    } else {
        feedbackDiv.innerHTML = `"Correct! You took ${attempts} attempts."`;
        attemptsDiv.innerHTML = ""; 
        Input.disabled = true; 
        submitButton.disabled = true; 
        return;
    }
    attemptsDiv.innerHTML = `Attempts: ${attempts}`;
}
submitButton.addEventListener('click', handleGuess);