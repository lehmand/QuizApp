let currentIndex = 0;
let questionJavascript = javascriptQuestions[currentIndex];


function loadHTML(){
    let content = document.getElementById('quizbox');
    content.innerHTML = htmlTemplate();
}

function loadCSS(){
    let content = document.getElementById('quizbox');
    content.innerHTML = cssTemplate();
}

function loadJavascript(){
    let content = document.getElementById('quizbox');
    content.innerHTML = javascriptTemplate();
}

function nextQuestionHTML(){
    currentIndex++;
    loadHTML();
}

function nextQuestionCSS(){
    currentIndex++;
    loadCSS();
}

function nextQuestionJavascript(){
    currentIndex++;
    loadJavascript();
}

function checkAnswerHTML(option){
    let optionNum = Number(option.slice(-1));
    let correctAnswer = `answer${htmlQuestions[currentIndex].right_answer}`;
    
    if(optionNum == htmlQuestions[currentIndex].right_answer){
        document.getElementById(option).classList.add('bg-success');
    } else {
        document.getElementById(option).classList.add('bg-danger');
        document.getElementById(correctAnswer).classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function checkAnswerCSS(option){
    let optionNum = Number(option.slice(-1));
    let correctAnswer = `answer${cssQuestions[currentIndex].right_answer}`;
    
    if(optionNum == cssQuestions[currentIndex].right_answer){
        document.getElementById(option).classList.add('bg-success');
    } else {
        document.getElementById(option).classList.add('bg-danger');
        document.getElementById(correctAnswer).classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function checkAnswerJavascript(option){
    let optionNum = Number(option.slice(-1));
    let correctAnswer = `answer${javascriptQuestions[currentIndex].right_answer}`;
    
    if(optionNum == javascriptQuestions[currentIndex].right_answer){
        document.getElementById(option).classList.add('bg-success');
    } else {
        document.getElementById(option).classList.add('bg-danger');
        document.getElementById(correctAnswer).classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}