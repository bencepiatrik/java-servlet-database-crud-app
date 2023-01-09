
let questions = [
  {
    question: "What HTML stands for?",
    answer: {
      a:"Transmission Control Protocol",
      b:"Programming language",
      c:"Hypertext Markup Language",
      d:"Javascript library"
    },
    correct: 'c'
  },
  {
  question: "CSS is used for...",
  answer: {
    a:"data mining",
    b:"defining styles for a webpage",
    c:"the markup of the webpage",
    d:"compiling C# code"
  },
  correct: 'b'
  },
  {
    question: "React.js is a/an ...",
    answer: {
      a:"javascript framework",
      b:"javascript library",
      c:"VSCode extension",
      d:"online translator"
    },
    correct: 'a'
  },
  {
    question: "1 + 1 =",
    answer: {
      a:"2",
      b:"1",
      c:"0",
      d:"3"
    },
    correct: 'a'
  },
  {
    question: "100 / 5 + 1 =",
    answer: {
      a:"18",
      b:"19",
      c:"20",
      d:"21"
    },
    correct: 'd'
    }
  ]

let quizQuestion = document.querySelector('.quiz-question')
let quizAnswer = document.querySelectorAll('.answer')
let nextBtn = document.querySelector('.next-question')
let answerContainer = document.querySelectorAll('.answer-container')
let submitBtn = document.querySelector('.submit')
let resultContainer = document.querySelector('.results')
let quizContainer = document.querySelector('.quiz-answers')
let btnTriangle = document.querySelector('.btn-triangle')

let answers = []
let final;

questionsTotal = questions.length - 1;
let goodAnswers = []

for(let i=0; i < questionsTotal+1; i++) {
  goodAnswers.push(0)
}

let current = 0;
let maxPercent = 0;
let correctAnswer = 0;
let percentage = 0;

document.querySelector(`.question-stop-${current+1}`).style.backgroundColor = '#03D1DB'

nextBtn.addEventListener("click", function() {
  setStopBg()
  current++;
  document.querySelector(`.question-stop-${current+1}`).style.backgroundColor = '#03D1DB'
  answerContainer.forEach(container => {    
    container.style.pointerEvents = "auto";
    container.style.transition = "all 0s"
    container.style.backgroundColor = "#e7e7e7"
    container.style.transition = "all .25s"
  })
  if(current >= questionsTotal){ 
    current = questionsTotal
    nextBtn.style.display = 'none'
    submitBtn.style.display = 'block'
    build()
  }
  if(current <= 0){
    current = 0
    build()
  }
  build();
})

answerContainer.forEach(container => {    
  container.addEventListener('mouseenter', () => {
    container.style.opacity = '.7'
  })
  container.addEventListener('mouseleave', () => {
    container.style.opacity = '1'
  })
})

answerContainer.forEach(container => {
  container.addEventListener('click', () => {
    answers.push(answerContainer[container.id].textContent)
    answerContainer[container.id].style.backgroundColor = '#03D1DB'
    answerContainer.forEach(container => {    
      container.style.pointerEvents = "none";
    })   
    check()
  })
})


build = () => {
  quizQuestion.innerHTML = questions[current].question
  quizAnswer[0].innerHTML = questions[current].answer.a
  quizAnswer[1].innerHTML = questions[current].answer.b
  quizAnswer[2].innerHTML = questions[current].answer.c
  quizAnswer[3].innerHTML = questions[current].answer.d
}
build();

let correctOption
check = () => {
  final = answers[current].trim()
  let findIt = questions[current].correct
  let correct = questions[current].answer[findIt]
  if (final === correct) {
    goodAnswers[current] = goodAnswers[current] + 1

  }else {
    goodAnswers[current] = 0
  }
  correctAnswer = goodAnswers.reduce((a,b) => a + b ,0)
  maxPercent = Math.round(((100 / (questionsTotal+1))*correctAnswer)*100)/100

  
}

resultContainer.innerHTML = `
<h1 class="outof">${correctAnswer} out of ${questionsTotal+1}</h1>
<h2 class="percentage">${maxPercent}%</h2> 
` 

submitBtn.addEventListener('click', () => {
  setStopBg()
  quizQuestion.style.display = 'none'
  quizContainer.style.display = 'none'
  resultContainer.style.display = "block";
  let counting = setInterval(() => {
    if(percentage < maxPercent){
      percentage = percentage + 1
      resultContainer.innerHTML = `
      <h1 class="outof">${correctAnswer} out of ${questionsTotal+1}</h1>
      <h2 class="percentage">${ Math.round(percentage*100)/100}%</h2> `
    }
    else {
      clearInterval(counting)
    }
  }, 5);
})

let setStopBg = () => {
  if (goodAnswers[current]){
    document.querySelector(`.right-${current+1}`).style.transform = 'translate(-50%, -50%) scale(1)'
    document.querySelector(`.question-stop-${current+1}`).style.backgroundColor = '#AAD8D3'
  } else {
    document.querySelector(`.wrong-${current+1}`).style.transform = 'translate(-50%, -50%) scale(1)'
    document.querySelector(`.question-stop-${current+1}`).style.backgroundColor = '#EDA3A3'
  }
}

let btns = [nextBtn, submitBtn]

btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btnTriangle.style.bottom = '-105px'  
  })
  btn.addEventListener('mouseleave', () => {
    btnTriangle.style.bottom = '-95px'  
  })
})