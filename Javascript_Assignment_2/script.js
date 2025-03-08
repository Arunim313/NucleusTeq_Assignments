// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const playerNameInput = document.getElementById('player-name');
const playerNameDisplay = document.getElementById('player-name-display');
const playerResult = document.getElementById('player-result');
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerBar = document.getElementById('timer-bar');
const feedbackElement = document.getElementById('feedback');
const currentScoreElement = document.getElementById('current-score');
const totalQuestionsElement = document.getElementById('total-questions');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsCounterElement = document.getElementById('total-questions-counter');
const finalScoreElement = document.getElementById('final-score');
const loader = document.getElementById('loader');
const gameContent = document.getElementById('game-content');

// Game variables
let playerName = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let selectedOption = null;

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);

async function startGame() {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert('Please enter your name to start the game.');
        return;
    }
    
    changeScreen(startScreen, gameScreen);
    loader.style.display = 'block';
    gameContent.style.display = 'none';

    // Fetch questions from api
    try {
        const category = categorySelect.value;
        const difficulty = difficultySelect.value;
        
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        const data = await response.json();
        
        if (data.response_code === 0) {
            questions = data.results.map(question => {
                const options = [...question.incorrect_answers];
                const randomIndex = Math.floor(Math.random() * 4);
                options.splice(randomIndex, 0, question.correct_answer);
                
                return {
                    question: question.question,
                    options: options,
                    correctAnswer: question.correct_answer
                };
            });
            
            loader.style.display = 'none';
            gameContent.style.display = 'block';
            
            currentQuestionIndex = 0;
            score = 0;
            
            playerNameDisplay.textContent = playerName;
            
            totalQuestionsElement.textContent = questions.length;
            totalQuestionsCounterElement.textContent = questions.length;
            
            currentScoreElement.textContent = score;
            
            displayQuestion();
        } else {
            throw new Error('Failed to fetch questions');
        }
    } catch (error) {
        alert('Error fetching questions. Please try again.');
        resetGame();
    }
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    selectedOption = null;
    feedbackElement.style.display = 'none';
    
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    questionElement.innerHTML = decodeHTML(currentQuestion.question);
    
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `${String.fromCharCode(65 + index)}. ${decodeHTML(option)}`;
        optionElement.addEventListener('click', () => selectOption(index, option));
        optionsElement.appendChild(optionElement);
    });
    
    startTimer();
}

function selectOption(index, option) {
    if (selectedOption !== null) return;
    
    selectedOption = option;
    
    const options = document.querySelectorAll('.option');
    options[index].classList.add('selected');
    
    clearInterval(timer);
    checkAnswer();
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.className = 'feedback correct';
        score++;
        currentScoreElement.textContent = score;
    } else {
        feedbackElement.textContent = 'Incorrect! The correct answer is: ' + decodeHTML(currentQuestion.correctAnswer);
        feedbackElement.className = 'feedback incorrect';
    }
    
    options.forEach(option => {
        const optionText = option.textContent.substring(3);
        
        if (decodeHTML(optionText) === decodeHTML(currentQuestion.correctAnswer)) {
            option.classList.add('correct');
        } else if (option.classList.contains('selected')) {
            option.classList.add('incorrect');
        }
    });
    
    feedbackElement.style.display = 'block';
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function startTimer() {
    timeLeft = 15;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / 15) * 100;
        timerBar.style.width = `${percentage}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (selectedOption === null) {
                // Time's up - check the answer
                checkAnswer();
            }
        }
    }, 1000);
}

// End the game
function endGame() {
    playerResult.textContent = `${playerName}'s Result`;
    finalScoreElement.textContent = `Your score: ${score}/${questions.length}`;
    changeScreen(gameScreen, endScreen);
}

// Reset the game
function resetGame() {
    changeScreen(endScreen, startScreen);
}

// Helper function to change screens
function changeScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
}

// Helper function to decode HTML entities
function decodeHTML(html) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
}