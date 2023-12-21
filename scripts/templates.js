function htmlTemplate(){
    let questionHTML = htmlQuestions[currentIndex];
    let currentQuestion = currentIndex + 1;
    return /*html*/`
            <div class="card">
                <img src="./assets/img/questionmark.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${questionHTML.question}</h5>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer1" onclick="checkAnswer('answer1')">
                            <span class="answerOption">${questionHTML.answer1}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer2" onclick="checkAnswer('answer2')">
                            <span class="answerOption">${questionHTML.answer2}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3 answerOption">
                        <div class="card-body" id="answer3" onclick="checkAnswer('answer3')">
                            <span class="answerOption">${questionHTML.answer3}</span>
                        </div>
                    </div>
                    
                    <div class="card-bottom">
                        <span><b>${currentQuestion}</b> of <b>${htmlQuestions.length}</b> Questions</span>
                        <button class="btn btn-primary" onclick="nextQuestion()" id="nextButton" disabled>Next Question</button>
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