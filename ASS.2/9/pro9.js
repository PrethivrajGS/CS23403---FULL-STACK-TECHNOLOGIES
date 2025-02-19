document.getElementById('myButton').addEventListener('click', () => {
    const ageIn = document.getElementById('ageInput').value.trim();
    const output = document.getElementById('output');

    if (isNaN(ageIn) || ageIn === '') {
        output.textContent = 'enter a valid number';
        return;
    }
    const age = parseInt(ageIn);
    if (age < 0) {
        output.textContent = 'Please enter a valid age';
    } else {
        const message = age >= 18 ? 'You are an adult' : 'You are a minor';

        output.textContent = message;
    }
});
