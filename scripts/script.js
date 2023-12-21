let currentIndex = 0;

function loadQuestions(choice){
    let content = document.getElementById('quizbox');
    if(choice == 'html'){
        content.innerHTML = htmlTemplate();
    } else if (choice == "css"){
        content.innerHTML = cssTemplate();
    } else {
        content.innerHTML = javascriptTemplate();
    }
}

function nextQuestion(choice){
    let content = document.getElementById('quizbox');
    currentIndex++;
    
    if(currentIndex < htmlQuestions.length || currentIndex < cssQuestions.length || currentIndex < javascriptQuestions.length){
        loadQuestions(choice);        
    } else {
        content.innerHTML = '';
        content.innerHTML = endscreenTemplate();
    }
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