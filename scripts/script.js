let currentIndex = 0;
// let questionHTML = htmlQuestions[currentIndex];
let questionCSS = cssQuestions[currentIndex];
let questionJavascript = javascriptQuestions[currentIndex];
let firstQuestion = currentIndex + 1;

function loadHTML(){
    let content = document.getElementById('quizbox');
    content.innerHTML = '';
    content.innerHTML = htmlTemplate();
}

function nextQuestion(){
    currentIndex++;
    loadHTML();
}