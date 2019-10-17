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
const hiddenElement = document.getElementById('hiddenStats')

// let itemsArray = [0, 0, 0];

// //itemsArray.push(input.value)

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

let array0 = [0,0,0];
let array1 = [0,0,0];
let array2 = [0,0,0];
let array3 = [0,0,0];
let array4 = [0,0,0];
let array5 = [0,0,0];

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

hiddenElement.addEventListener('click', showStats);

function showStats () {
    alert('Pierwsze ' + array0 + ' Drugie ' + array1 + ' Trzecie ' + array2 + ' Czwarte ' + array3 + 'Piąte ' + array4 + ' Szóste ' + array5)
}

//currentQuestionIndex = 0;

function startQuiz() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    ContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    shuffledQuestions = questions;
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
    questionContainerElement.classList.remove('hide')
    resultElement.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    if (document.getElementById(`${e.target.id}`) == box1) {
        if (`array${currentQuestionIndex}[0]` == 'array0[0]') {
        array0[0]++
        }
        if (`array${currentQuestionIndex}[0]` == 'array1[0]') {
        array1[0]++
        }
        if (`array${currentQuestionIndex}[0]` == 'array2[0]') {
        array2[0]++
        }
        if (`array${currentQuestionIndex}[0]` == 'array3[0]') {
        array3[0]++
        }
        if (`array${currentQuestionIndex}[0]` == 'array4[0]') {
        array4[0]++
        }
        if (`array${currentQuestionIndex}[0]` == 'array5[0]') {
        array5[0]++
        }
    }
    if (document.getElementById(`${e.target.id}`) == box2) {
        if (`array${currentQuestionIndex}[1]` == 'array0[1]') {
            array0[1]++
            }
            if (`array${currentQuestionIndex}[1]` == 'array1[1]') {
            array1[1]++
            }
            if (`array${currentQuestionIndex}[1]` == 'array2[1]') {
            array2[1]++
            }
            if (`array${currentQuestionIndex}[1]` == 'array3[1]') {
            array3[1]++
            }
            if (`array${currentQuestionIndex}[1]` == 'array4[1]') {
            array4[1]++
            }
            if (`array${currentQuestionIndex}[1]` == 'array5[1]') {
            array5[1]++
            }
    }
    if (document.getElementById(`${e.target.id}`) == box3) {
        if (`array${currentQuestionIndex}[2]` == 'array0[2]') {
            array0[2]++
            }
            if (`array${currentQuestionIndex}[2]` == 'array1[2]') {
            array1[2]++
            }
            if (`array${currentQuestionIndex}[2]` == 'array2[2]') {
            array2[2]++
            }
            if (`array${currentQuestionIndex}[2]` == 'array3[2]') {
            array3[2]++
            }
            if (`array${currentQuestionIndex}[2]` == 'array4[2]') {
            array4[2]++
            }
            if (`array${currentQuestionIndex}[2]` == 'array5[2]') {
            array5[2]++
            }
    }

    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    } else {
        pushToLocal()
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        resultElement.classList.remove('hide')
        questionContainerElement.classList.add('hide')
    }
}


function pushToLocal () {
    localStorage.setItem('items0', JSON.stringify(array0))
    const data0 = JSON.parse(localStorage.getItem('items0'))
    localStorage.setItem('items1', JSON.stringify(array1))
    const data1 = JSON.parse(localStorage.getItem('items1'))
    localStorage.setItem('items2', JSON.stringify(array2))
    const data2 = JSON.parse(localStorage.getItem('items2'))
    localStorage.setItem('items3', JSON.stringify(array3))
    const data3 = JSON.parse(localStorage.getItem('items3'))
    localStorage.setItem('items4', JSON.stringify(array4))
    const data4 = JSON.parse(localStorage.getItem('items4'))
    localStorage.setItem('items5', JSON.stringify(array5))
    const data5 = JSON.parse(localStorage.getItem('items5'))
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
