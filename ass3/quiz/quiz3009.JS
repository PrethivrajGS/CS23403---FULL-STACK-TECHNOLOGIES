const quizData = [
    {
        q: "1. What is the correct way to declare a variable in JavaScript?",
        options: ["var x=5", "variable x=5", "v x=5"],
        answer: "var x=5"
    },
    {
        q: "2. Which of these are valid loop types in JavaScript? (select all that apply)",
        options: ["for loop", "while loop", "loop", "repeat loop"],
        answer: "for loop,while loop"
    },
    {
        q: `3. What will be the output of : console.log("hello" + " " + "world")?`,
        inputType: "text", // Mark this question as input-based
        answer: "hello world"
    }
];

const qe = document.getElementById("q");
const ope = document.getElementById("options");
const subbtn = document.getElementById("submit");

let currentquestion = 0;
let score = 0;

function showques() {
    const question = quizData[currentquestion];
    qe.innerText = question.q;
    ope.innerHTML = "";

    if (question.inputType === "text") {
        // Create an input field for the user to type the answer
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "userAnswer";
        inputField.placeholder = "Type your answer here...";
        ope.appendChild(inputField);
    } else {
        // Create multiple-choice buttons
        if (Array.isArray(question.options)) {
            question.options.forEach(option => {
                const button = document.createElement("button");
                button.innerText = option;
                button.classList.add("quiz-button");
                ope.appendChild(button);
                button.addEventListener("click", selectAnswer);
            });
        } else {
            console.error("Options are not an array:", question.options);
        }
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentquestion].answer;

    const correctAnswers = answer.split(",").map(ans => ans.trim());

    if (correctAnswers.includes(selectedButton.innerText)) {
        score++;
    }

    nextQuestion();
}

function checkInputAnswer() {
    const userInput = document.getElementById("userAnswer").value.trim();
    const correctAnswer = quizData[currentquestion].answer;

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentquestion++;
    if (currentquestion < quizData.length) {
        showques();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score}/${quizData.length}</p>
    `;
}

subbtn.addEventListener("click", function () {
    const question = quizData[currentquestion];

    if (question.inputType === "text") {
        checkInputAnswer();
    }
});
    
document.addEventListener("DOMContentLoaded", showques);

