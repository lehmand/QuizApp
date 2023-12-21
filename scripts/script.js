let currentIndex = 0;
let questionCSS = cssQuestions[currentIndex];
let questionJavascript = javascriptQuestions[currentIndex];


function loadHTML(){
    let content = document.getElementById('quizbox');
    content.innerHTML = htmlTemplate();
}

function loadCSS(){

}

function loadJavascript(){
    
}

function nextQuestion(){
    currentIndex++;
    loadHTML();
}

function checkAnswer(option){
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