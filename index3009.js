/*console.log("WELCOME TO FULL STOCK TECHNOLOGIES");
window.alert("WELCOME TO FST");*/

/*console.log("STRING:"+ "HELLO");
console.log("number:" + 12);
console.log("boolean :"+ true);
console.log("boolean :"+ false);

let trees=["apple","guava"];
console.log("ARRAY:"+ trees);
*/
/*
const now= new Date();
const year= now.getDay();
const month= now.getMonth();
const hour= now.getHours();
const min= now.getMinutes();
const sec= now.getSeconds();
const date= now.toLocaleDateString();
const time= now.toLocaleTimeString();

console.log(`DATE: ${date}`);
console.log(`YEAR: ${year}`);
console.log(`MONTH: ${month}`);
console.log(`HOUR: ${hour}`);
console.log(`MINUTES: ${min}`);
console.log(`SECONDS: ${sec}`);
window.alert(`CURRENT TIME IS: ${time}`);
*/

/*
let F;
let C;
document.getElementById("btn").onclick = function() {
    C = document.getElementById("input").value;
    F = ((C / 5) * 9) + 32;
    document.getElementById("output").innerHTML = `It is ${C}C and ${F.toFixed(2)}F`;
}
*/

let radius;
let Area;
let C;
document.getElementById("btn").onclick=function(){
    const PI=3.1415;
     radius=document.getElementById("inputr").value;
     A=PI*radius*radius;
     C=2*PI*radius;
     A=A.toFixed(2)
     C=C.toFixed(2)
    document.getElementById("area").textContent=`Area= ${A}`;
    document.getElementById("cir").innerHTML=`Circumferance= ${C}`;
}


/*
let count=0;
 function display()
 {
    document.getElementById("count").innerText=count;
 }
function increment()
{
    count++;
    display();
}
function decrement()
{
    count--;
    display(); 
}
function reset()
{
    count=0;
    display();
}
*/

/*
let x=3.7;

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("gsp").textContent=`round of x is:${Math.round(3.7)}`;
document.getElementById("gsp1").textContent=`floor of x is:${Math.floor(3.7)}`;
document.getElementById("gsp2").textContent=`ceil of x is:${Math.ceil(3.7)}`;
document.getElementById("gsp3").textContent=`sign of x is:${Math.sign(3.7)}`;
document.getElementById("gsp4").textContent=`truncate of x is:${Math.trunc(3.7)}`;
document.getElementById("gsp5").textContent=`power of x is:${Math.pow(3.7,2).toFixed(2)}`;
document.getElementById("gsp6").textContent=`sqrt of x is:${Math.sqrt(3.7).toFixed(2)}`;
document.getElementById("gsp7").textContent=`sine of x is:${Math.sin(3.7*(Math.PI)/180).toFixed(2)}`;
});
*/
/*
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
`;*/
/*
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
*/
/*
let originalString = "123.45";
function displayConversions() {
    let outputDiv = document.getElementById('output');
    let output = '';

    let original = "123.45";
    output =output+ `Original: "${original}" (${typeof original})\n`;

    let toNumber = Number(original);
    output += `To number: ${toNumber} (${typeof toNumber})\n`;

    let toInteger = parseInt(original);
    output += `To integer: ${toInteger} (${typeof toInteger})\n`;

    let toFloat = parseFloat(original);
    output += `To float: ${toFloat} (${typeof toFloat})\n\n`;

    let originalBooleanString = "true";
    output += `Original: "${originalBooleanString}" (${typeof originalBooleanString})\n`;

    let toBoolean = originalBooleanString.toLowerCase() === "true";
    output += `To boolean: ${toBoolean} (${typeof toBoolean})\n\n`;

    let originalNumber = 123;
    output += `Original: ${originalNumber} (${typeof originalNumber})\n`;
    let toString = originalNumber.toString();
    output += `To string: "${toString}" (${typeof toString})`;
    outputDiv.innerText = output;
}
displayConversions();

*/
/*
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
*/
