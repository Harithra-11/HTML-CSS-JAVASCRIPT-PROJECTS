const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
let shuffledQuestions,currectQuestionIndex;
let quizScore=0;

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currectQuestionIndex++
    setNextQuestion()
})
function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    quizScore=0;
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach((answer)=>{
        const button=document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currectQuestionIndex+1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText="Restart"
        startButton.classList.remove('hide')
    }
    if(selectedButton.dataset=correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    {
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=
[
    {
        question:'which one of these is a JavaScript Library?',
        answers:[
            {
                text:'Python',correct:false
            },
            {
                text:'Eclipse',correct:false
            },
            {
                text:'React',correct:false
            },
            {
                text:'DJango',correct:false
            },
        ],
    },
    {
        question:'Which of these languages is not object oriented?',
        answers:[
            {
                text:'Python',correct:false
            },
            {
                text:'Java',correct:false
            },
            {
                text:'C++',correct:true
            },
            {
                text:'C',correct:false
            },
        ],
    },
    {
        question:'Which one of these symbols is used as an universal selector in CSS?',
        answers:[
            {
                text:'*',correct:true
            },
            {
                text:'&',correct:false
            },
            {
                text:'#',correct:false
            },
            {
                text:'\\',correct:false
            },
        ],
    },
    {
        question:'Which operator is used to access the values of the properties in an object?',
        answers:[
            {
                text:'?',correct:false
            },
            {
                text:'.',correct:true
            },
            {
                text:'-',correct:false
            },
            {
                text:'!',correct:false
            },
        ],
    },
]