
alert("Welkom in de open dag");

function openZoekvenster() {
    
    document.getElementById('zoekvenster').style.display = 'block';
}

function sluitZoekvenster() {
    
    document.getElementById('zoekvenster').style.display = 'none';
}

function voerZoekopdrachtUit() {
    
    sluitZoekvenster();
}

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('button');

let currentQuestion = 0;
let score = 0;

const questions = [
    { text: 'Zijn programmeervaardigheden nodig voor aanmelding ?', answer: 'yes' },
    { text: 'Is een vooropleiding in software vereist voor de MBO 4 software-opleiding ?', answer: 'no' },
    { text: 'Is werkervaring in de IT-sector een vereiste voor toelating??', answer: 'yes' },
    { text: 'Zijn specifieke vakken op de middelbare school verplicht??', answer: 'yes' },
    { text: 'Is er een beperkt aantal beschikbare plaatsen??', answer: 'no' }
];

function showQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].text;
    } else {
        endQuiz();
    }
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

function endQuiz() {
    quizContainer.innerHTML = `<p>Quiz Complete!</p><p>Your score is: ${score} out of ${questions.length}</p>`;
}

showQuestion();

