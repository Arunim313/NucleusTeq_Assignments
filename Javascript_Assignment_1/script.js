// Game state variables
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameActive = true;

// DOM elements
const player1Element = document.querySelector('.player-1');
const player2Element = document.querySelector('.player-2');
const player1SavedScore = document.getElementById('player1-saved-score');
const player2SavedScore = document.getElementById('player2-saved-score');
const player1CurrentScore = document.getElementById('player1-current-score');
const player2CurrentScore = document.getElementById('player2-current-score');
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const editPlayer1Btn = document.getElementById('edit-player1');
const editPlayer2Btn = document.getElementById('edit-player2');
const diceElement = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const messageElement = document.getElementById('message');
const winnerModal = document.getElementById('winner-modal');
const winnerMessage = document.getElementById('winner-message');
const playAgainBtn = document.getElementById('play-again-btn');
const diceDots = Array.from(document.querySelectorAll('.dice-dot'));

function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameActive = true;
    
    player1SavedScore.textContent = '0';
    player2SavedScore.textContent = '0';
    player1CurrentScore.textContent = '0';
    player2CurrentScore.textContent = '0';
    
    player1Element.classList.add('active');
    player2Element.classList.remove('active');
    
    messageElement.textContent = '';
    winnerModal.style.display = 'none';
    
    updateDiceDisplay(1);
    hideDice();

    player1Name.disabled = false;
    player2Name.disabled = false;

    editPlayer1Btn.style.display = 'inline-block';
    editPlayer2Btn.style.display = 'inline-block';
}


function resetGame() {
    init();
}

function rollDice() {
    if (!gameActive) return;
    
    const dice = Math.floor(Math.random() * 6) + 1;

    diceElement.classList.add('roll-animation');
    hideDice();
    
    setTimeout(() => {
        updateDiceDisplay(dice);
        diceElement.classList.remove('roll-animation');

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`player${activePlayer + 1}-current-score`).textContent = currentScore;
            messageElement.textContent = `Rolled a ${dice}!`;
        } else {
            messageElement.textContent = 'Oops! Rolled a 1 - turn lost!';
            switchPlayer();
        }
    }, 800);
}

function saveScore() {
    if (!gameActive || currentScore === 0) return;

    scores[activePlayer] += currentScore;
    document.getElementById(`player${activePlayer + 1}-saved-score`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        gameActive = false;
        const winnerName = document.getElementById(`player${activePlayer + 1}-name`).value;
        winnerMessage.textContent = `${winnerName} Wins!`;
        winnerModal.style.display = 'flex';
        messageElement.textContent = '';
    } else {
        messageElement.textContent = 'Score saved!';
        switchPlayer();
    }

    // Hiding name edir buttons when the game starts
    editPlayer1Btn.style.display = 'none';
    editPlayer2Btn.style.display = 'none';
}

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`player${activePlayer + 1}-current-score`).textContent = '0';
    
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player1Element.classList.toggle('active');
    player2Element.classList.toggle('active');
    hideDice();
}

function updateDiceDisplay(value) {
    diceDots.forEach(dot => dot.style.opacity = '0');

    switch(value) {
        case 1:
            document.getElementById('dot5').style.opacity = '1'; // Center
            break;
        case 2:
            document.getElementById('dot1').style.opacity = '1'; // Top-left
            document.getElementById('dot9').style.opacity = '1'; // Bottom-right
            break;
        case 3:
            document.getElementById('dot1').style.opacity = '1'; // Top-left
            document.getElementById('dot5').style.opacity = '1'; // Center
            document.getElementById('dot9').style.opacity = '1'; // Bottom-right
            break;
        case 4:
            document.getElementById('dot1').style.opacity = '1'; // Top-left
            document.getElementById('dot3').style.opacity = '1'; // Top-right
            document.getElementById('dot7').style.opacity = '1'; // Bottom-left
            document.getElementById('dot9').style.opacity = '1'; // Bottom-right
            break;
        case 5:
            document.getElementById('dot1').style.opacity = '1'; // Top-left
            document.getElementById('dot3').style.opacity = '1'; // Top-right
            document.getElementById('dot5').style.opacity = '1'; // Center
            document.getElementById('dot7').style.opacity = '1'; // Bottom-left
            document.getElementById('dot9').style.opacity = '1'; // Bottom-right
            break;
        case 6:
            document.getElementById('dot1').style.opacity = '1'; // Top-left
            document.getElementById('dot3').style.opacity = '1'; // Top-right
            document.getElementById('dot4').style.opacity = '1'; // Middle-left
            document.getElementById('dot6').style.opacity = '1'; // Middle-right
            document.getElementById('dot7').style.opacity = '1'; // Bottom-left
            document.getElementById('dot9').style.opacity = '1'; // Bottom-right
            break;
    }
}

function hideDice() {
    diceDots.forEach(dot => dot.style.opacity = '0');
}

function handleNameEdit(inputElement) {
    inputElement.focus();
    inputElement.select();
}

rollBtn.addEventListener('click', rollDice);
saveBtn.addEventListener('click', saveScore);
resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', resetGame);

editPlayer1Btn.addEventListener('click', () => handleNameEdit(player1Name));
editPlayer2Btn.addEventListener('click', () => handleNameEdit(player2Name));

player1Name.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        this.blur();
    }
});

player2Name.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        this.blur();
    }
});

document.addEventListener('DOMContentLoaded', init);