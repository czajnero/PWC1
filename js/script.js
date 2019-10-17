const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const boxElement1 = document.getElementById('box1');
const boxElement2 = document.getElementById('box2');
const boxElement3 = document.getElementById('box3');
const questionContainerElement = document.getElementById('question-container');
const ContainerElement = document.getElementById('container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('boxes-area');
const resultElement = document.getElementById('result-container')


let firstA = 0;
let firstB = 0;
let firstC = 0;


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    ContainerElement.classList.remove('hide');
    shuffledQuestions = questions;
    currentQuestionIndex = 0;
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    let i=1;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('box')
        button.setAttribute("id", `box${i}`);
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        i++;
    })
}

function resetState() {
    nextButton.classList.add('hide')
    resultElement.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;

    console.log(e.target.id);
    if (document.getElementById(`${e.target.id}`) == box1) {
       firstA++;
       console.log(firstA);
    }
    if (document.getElementById(`${e.target.id}`) == box2) {
        beingClicked()
    }
    if (document.getElementById(`${e.target.id}`) == box3) {
        beingClicked()
    }

    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        resultElement.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
}

var counter = 0;

function beingClicked() {
    console.log('workin');
    counter++;
}


const questions = [
    {
        question: '1. Która strefa podczas PwC Day podobała Ci się najbardziej?',
        answers: [
            { text: 'strefa Then'},
            { text: 'strefa Now'},
            { text: 'strefa Tomorrow'}
        ]
    },
    {
        question: '2. Co ze strefy Then najbardziej przeniosło Cię w klimat lat 90-tych?',
        answers: [
            { text: 'Aranżacja przestrzeni - fotele, sofa dywany'},
            { text: 'Przekąski - gumy Turbo, gumy kulki'},
            { text: 'Gry - Mario, bierki, Jenga'}
        ]
    },
    {
        question: '3. Czego dowiedziałeś się w strefie Now?',
        answers: [
            { text: 'Szczegółów dotyczących PwC jako pracodawcy'},
            { text: 'Informacji o możliwości rozwoju w PwC'},
            { text: 'Szczegółów dotyczących interesującego mnie działu'}
        ]
    },
    {
        question: '4. Co zaciekawiło Cię w strefie Tomorrow?',
        answers: [
            { text: 'Warsztat design thinking z wykorzystaniem starych przedmiotów'},
            { text: 'Możliwości zobaczenia przedmiotów z przeszłości'},
            { text: 'Virtual Reality i możliwości rozbrojenia bomby'}
        ]
    },
    {
        question: '5. Skąd dowiedziałeś/dowiedziałaś się o PwC Day na Twojej uczelni?',
        answers: [
            { text: 'Facebook'},
            { text: 'Zaprosił mnie influencer PwC'},
            { text: 'Byłem/byłam w tym czasie na uczelni'}
        ]
    },
    {
        question: '6. Czy poleciłbyś udział w PwC Day swojemu znajomemu?',
        answers: [
            { text: 'Zdecydowanie tak, jest super! :)'},
            { text: 'Tak, jest ok!'},
            { text: 'Nie podobało mi się :<'}
        ]
    }
]
