
let start = document.querySelector("#btn");
let quiz = document.querySelector("#quiz");
let container = document.querySelector(".container");
let time = document.querySelector("#timer");
let questionText = document.querySelector("#questionText");
let choices = Array.from(document.querySelectorAll('.choiceOption'));
let nextButton = document.querySelector("#next");
let progressText = document.querySelector("#progressText");



let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timer = 60;



start.addEventListener("click", function() {
    container.style.display = "none";
    quiz.style.display = "block";
  });

let questions =[
    {
        question: 'Arrays in Javascript can be used to store',
        choiceA: 'numbers and strings',
        choiceB: 'other arrays',
        choiceC: 'booleans',
        choiceD: 'all of the above',
        answer: 'all of the above'
},
{
    question: 'String Values must be enclosed within ________ when being assigned to variables',
    choiceA: 'commas',
    choiceB: 'paranthesis',
    choiceC: 'quotes',
    choiceD: 'curly brackets',
    answer: "quotes"
},
{
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choiceA: 'Javascript',
    choiceB: 'terminal/bash',
    choiceC: 'for loops',
    choiceD: 'console log',
    answer: "console log"
},
{
    question: 'Commonly used data types do NOT include:',
    choiceA: 'strings',
    choiceB: 'booleans',
    choiceC: 'alerts',
    choiceD: 'numbers',
    answer: "alerts"
},
{
    question: 'The condition in an if/else statement is enclosed with ',
    choiceA: 'quotes',
    choiceB: 'curly brackets',
    choiceC: 'paranthesis',
    choiceD: 'square brackets',
    answer:"quotes"
},
]


const SCORE_POINTS = 100
const MAX_QUESTIONS = 5


startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length===0|| questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return 
    }

    questionCounter++
    progressText.innerText= `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    questionText.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset[`number`]
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true

    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        return; // if no choice is selected, don't do anything
    }
    const selectedAnswer = selectedChoice.value;
    if (selectedAnswer === currentQuestion.answer) {
        // if the selected answer is correct, update the score
        score++;
    }
}

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            increment(SCORE_POINTS)
        }

            selectedChoice.parentElement.classList.add(classToApply)
           
            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()
            }, 1000)
            })
    })


    startQuiz()


    //for end of quiz

    const username = document.querySelector('#username');
    const saveBtn = document.querySelector('#saveButton');
    const highScoresForm = document.querySelector('#highScoresForm');

saveBtn.addEventListener('click', e => {
    e.preventDefault();
    const score = {
        username: username.value,
        score: score,
    };
    // save the score to localStorage
    localStorage.setItem('highScores', JSON.stringify(score));
});
