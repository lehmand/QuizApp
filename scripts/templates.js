function htmlTemplate(){
    let questionHTML = htmlQuestions[currentIndex];
    let currentQuestion = currentIndex + 1;
    return /*html*/`
            <div class="card">
                <img src="./assets/img/questionmark.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${questionHTML.question}</h5>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer1" onclick="checkAnswerHTML('answer1')">
                            <span class="answerOption">${questionHTML.answer1}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer2" onclick="checkAnswerHTML('answer2')">
                            <span class="answerOption">${questionHTML.answer2}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer3" onclick="checkAnswerHTML('answer3')">
                            <span class="answerOption">${questionHTML.answer3}</span>
                        </div>
                    </div>
                    
                    <div class="card-bottom">
                        <span><b>${currentQuestion}</b> of <b>${htmlQuestions.length}</b> Questions</span>
                        <button class="btn btn-primary" onclick="nextQuestion('html')" id="nextButton" disabled>Next Question</button>
                    </div>
                </div>
            </div>
    `
}

function cssTemplate(){
    let questionCSS = cssQuestions[currentIndex];
    let currentQuestion = currentIndex + 1;
    return /*html*/`
            <div class="card">
                <img src="./assets/img/questionmark.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${questionCSS.question}</h5>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer1" onclick="checkAnswerCSS('answer1')">
                            <span class="answerOption">${questionCSS.answer1}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer2" onclick="checkAnswerCSS('answer2')">
                            <span class="answerOption">${questionCSS.answer2}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer3" onclick="checkAnswerCSS('answer3')">
                            <span class="answerOption">${questionCSS.answer3}</span>
                        </div>
                    </div>
                    
                    <div class="card-bottom">
                        <span><b>${currentQuestion}</b> of <b>${cssQuestions.length}</b> Questions</span>
                        <button class="btn btn-primary" onclick="nextQuestion('css')" id="nextButton" disabled>Next Question</button>
                    </div>
                </div>
            </div>
    `
}

function javascriptTemplate(){
    let questionJavascript = javascriptQuestions[currentIndex];
    let currentQuestion = currentIndex + 1;
    return /*html*/`
            <div class="card">
                <img src="./assets/img/questionmark.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${questionJavascript.question}</h5>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer1" onclick="checkAnswerJavascript('answer1')">
                            <span class="answerOption">${questionJavascript.answer1}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer2" onclick="checkAnswerJavascript('answer2')">
                            <span class="answerOption">${questionJavascript.answer2}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer3" onclick="checkAnswerJavascript('answer3')">
                            <span class="answerOption">${questionJavascript.answer3}</span>
                        </div>
                    </div>
                    
                    <div class="card-bottom">
                        <span><b>${currentQuestion}</b> of <b>${javascriptQuestions.length}</b> Questions</span>
                        <button class="btn btn-primary" onclick="nextQuestion('javascript')" id="nextButton" disabled>Next Question</button>
                    </div>
                </div>
            </div>
    `
}

function welcome(){
    return /*html*/`
        <h1 class="welcomeText">Viel Spass beim Quizzen</h1>
          <span>Welches Quiz möchtest du spielen?</span>
    `
}

function endscreenTemplate(){
    return /*html*/`
        <div class="">
            <img src="./assets/img/brainresult.png" class="">
            <div class="">
                <span>Test</span>
                <img src="./assets/img/tropy.png">          
            </div>
        </div>
`
}