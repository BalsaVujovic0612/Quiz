const quizData = [
  {
    question: "Who is the main character in One Punch Man?",
    answers: ["Saitama", "Genos", "Sonic", "Mumen Rider"],
    correctAnswer: "Saitama"
  },
  {
    question: "What is Saitama's special attack called?",
    answers: ["Serious Punch", "Normal Punch", "Death Punch", "Super Punch"],
    correctAnswer: "Serious Punch"
  },
  // Dodaj ostala pitanja ovde...
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function buildQuiz() {
  for (let i = 0; i < quizData.length; i++) { // Prolazimo kroz sva pitanja
    const questionData = quizData[i];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = '<strong>' + questionData.question + '</strong><br>'; // Postavljamo tekst pitanja

    for (let j = 0; j < questionData.answers.length; j++) { // Prolazimo kroz sve odgovore za trenutno pitanje
      const answer = questionData.answers[j]; // Pristupamo trenutnom odgovoru
      const radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = 'question' + i;
      radioBtn.value = answer; // Postavljamo vrednost radio dugmeta na trenutni odgovor

      const label = document.createElement('label');
      label.innerHTML = answer + '<br>'; // Postavljamo tekst odgovora unutar label elementa

      questionElement.appendChild(radioBtn);
      questionElement.appendChild(label);
    }

    quizContainer.appendChild(questionElement); // Dodajemo trenutno pitanje u kontejner za kviz
  }
}

function showResult() {
  let score = 0
  for(let i = 0; i <quizData.length; i++){
    const correctAnswer = quizData[i].correctAnswer;
    const selectedAnswer = document.querySelector('input[name="question' + i + '"]:checked');
    if(selectedAnswer){
      if(selectedAnswer.value === correctAnswer){
        score++
      }
    }
  }
  resultContainer.textContent = 'Result ' + score + 'of ' + quizData.length;
}

buildQuiz();
submitButton.addEventListener('click', showResult)