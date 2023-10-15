// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    attempts++;

    if (guess == secretNumber) {
        displayMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else if (guess < secretNumber) {
        displayMessage('Too low. Try again.');
    } else {
        displayMessage('Too high. Try again.');
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
