const quizDB = [
    {
        question: "Q:1 what is the fullform of html?",
        a: "hello to my land",
        b: "hey text markup language",
        c: "hypper text makup language",
        d: "hypertext markup language",
        ans: "ans1"
    },
    {
        question: "Q:2 what is the fullform of css?",
        a: "hello to my land",
        b: " cascading style sheet",
        c: "hypper text makup language",
        d: "hypertext makke it ",
        ans: "ans2"
    },
    {
        question: "Q:3 what is java script?",
        a: "hello to my land",
        b: "it is a scripting language",
        c: "hypper text makup language",
        d: "hypertext markup language",
        ans: "ans3"
    },
    {
        question: "Q:4 what is the full form of sass?",
        a: "Syntactically Awesome Stylesheet",
        b: "hey text markup language",
        c: "hypper text makup language",
        d: "hypertext markup language",
        ans: "ans4"
    },
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    // console.log(quizDB[0])
    const questionList = quizDB[questionCount];
    console.log(questionList)
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.b;
    option4.innerText = questionList.a;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;

        }
    });
    return answer;
};
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    // console.log(quizDB[questionCount].ans)
    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>you scored ${score}/${quizDB.length} </h3>
        <button onclick='location.reload()' class='btn'>play again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});