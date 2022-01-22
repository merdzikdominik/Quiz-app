const quizData = [
    {
        question: 'How much do you like fries?',
        a: 'a lot',
        b: 'fries are fine',
        c: 'a bit',
        d: 'not at all',
        correct: 'c'
    },
    {
        question: 'How much do you hate vegetables?',
        a: 'a lot',
        b: 'vegetables are fine',
        c: 'a bit',
        d: 'not at all',
        correct: 'a'
    }
];

let currentQuestion = 0;

const finalNotification = document.getElementById('quiz');
const question = document.getElementById('question');

const a = document.getElementById('a-text');
const b = document.getElementById('b-text');
const c = document.getElementById('c-text');
const d = document.getElementById('d-text');

const submitButton = document.getElementById('submit');

function loadQuestion() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    question.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;

}

//initial run
loadQuestion();

let correctAnswersCounter = 0;

function getSelected() {
    const answersEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answersEls.forEach((answerEl) => {

        if (answerEl.checked) {
            answer = answerEl.id;

            return answer;
        }
    });

    return answer;
}

function deselectAnswers() {
    const answersEls = document.querySelectorAll('.answer');

    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitButton.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) correctAnswersCounter++;

        currentQuestion++;

    }

    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
    else {
        finalNotification.innerHTML = '<h2 style="display: flex; align-items: center; justify-content: center;">You have scored ' + correctAnswersCounter + '/' + quizData.length + ' points</h2>';
    }
});

