(function () {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `Je hebt ${numCorrect} van de ${myQuestions.length} vragen goed beantwoord`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "1. Wat is de meest voorkomende aanval?",
            answers: {
                a: "Een absence",
                b: "De focale aanval",
                c: "De tonisch-clonische aanval"
            },
            correctAnswer: "b"
    },
        {
            question: "2. Gaat epilepsie weer over?",
            answers: {
                a: "Ja, als iemand 10 jaar aanvalsvrij is en de laatste 5 jaar geen anti-epileptica heeft gebruikt, wordt geacht dat epilepsie over is",
                b: "Nee, nooit",
                c: "Ja, tussen je 20e en 60e kan je geen epilepsie hebben"
            },
            correctAnswer: "a"
    },
        {
            question: "3. Is epilepsie erfelijk?",
            answers: {
                a: "Nee",
                b: "Ja",
                c: "Ja, erfelijkheid kan een rol spelen bij epilepsie",
                d: "Dit is (nog) niet bekend"
            },
            correctAnswer: "c"
    },
        {
            question: "4. Sterven bij elke aanval hersencellen af?",
            answers: {
                a: "Nee, alleen bij (grote) aanvallen van meer dan 20 tot 30 minuten bestaat er een risico dat hersencellen beschadigd raken.",
                b: "Ja, dat kan al bij een aanval van maar 5 minuten",
                c: "Dat ligt aan hoeveel hersencellen je hebt"
            },
            correctAnswer: "a"
    },
        {
            question: "5. Moet epilepsie altijd worden behandeld?",
            answers: {
                a: "Nee, alleen wanneer je elke dag een aanval hebt",
                b: "Ja, altijd",
                c: "Nee, epilepsie hoeft niet altijd behandeld te worden"
            },
            correctAnswer: "c"
    }
  ];

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();
