function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Test cases
const test1 = getRandomNumber(1, 100);
const test2 = getRandomNumber(1, 10);
const test3 = getRandomNumber(50, 60);

// Displaying the results
const result = document.getElementById('results');
result.innerHTML = `
    <p class="result"><strong>Random number between 1 and 100:</strong> ${test1}</p>
    <p class="result"><strong>Random number between 1 and 10:</strong> ${test2}</p>
    <p class="result"><strong>Random number between 50 and 60:</strong> ${test3}</p>
`;