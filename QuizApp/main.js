const quizData = [
    {
        question: 'What is the largest planet in our solar system?',
        a: 'Earth',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Saturn',
        correctAns: 'c'
    }, {
        question: 'Who wrote the famous play "Romeo and Juliet"?',
        a: 'J.K. Rowling',
        b: 'William Shakespeare',
        c: 'Charles Dickens',
        d: 'Mark Twain',
        correctAns: 'b'
    }, {
        question: 'What is the chemical symbol for gold?',
        a: 'Au',
        b: 'Ag',
        c: 'Fe',
        d: 'Pb',
        correctAns: 'a'
    }, {
        question: 'Which of the following animals is known for its ability to change colors?',
        a: 'Octopus',
        b: 'Chameleon',
        c: 'Elephant',
        d: 'Giraffe',
        correctAns: 'b'
    }, {
        question: 'What is the capital of Australia?',
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Canberra',
        d: 'Brisbane',
        correctAns: 'c'
    }
];

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEL = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        };
    });
    return answer;
}

function deSelected(){
    answersEls.forEach((answerEl) => {
        answerEl.checked  = false;
    });
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    console.log(answer)
    if(answer){
        if(answer === quizData[currentQuiz].correctAns){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>Your Correct score: ${score}/${quizData.length}</h2><button onclick="location.reload()">Answer Again?</button>`
        }
    }
});