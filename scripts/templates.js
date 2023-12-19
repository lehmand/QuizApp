function htmlTemplate(){
    let questionHTML = htmlQuestions[currentIndex];
    return /*html*/`
            <div class="card">
                <img src="./assets/img/questionmark.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${questionHTML.question}</h5>
    
                    <div class="card mb-3">
                        <div class="card-body">
                            <span class="answerOption">${questionHTML.answer1}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3">
                        <div class="card-body">
                            <span class="answerOption">${questionHTML.answer2}</span>
                        </div>
                    </div>
    
                    <div class="card mb-3">
                        <div class="card-body">
                            <span class="answerOption">${questionHTML.answer3}</span>
                        </div>
                    </div>
                    
                    <div class="card-bottom">
                        <span><b>${firstQuestion}</b> of <b>${htmlQuestions.length}</b> Questions</span>
                        <button class="btn btn-primary" onclick="nextQuestion()">Next Question</button>
                    </div>
                </div>
            </div>
    `
}