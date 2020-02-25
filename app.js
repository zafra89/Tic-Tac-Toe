class TicTacToe {
    constructor() {
        this.playerOneInput = document.getElementById('player-1-input-name');
        this.playerTwoInput = document.getElementById('player-2-input-name');
        this.playersInputs = document.getElementById('players-info');
        this.startBtn = document.getElementById('start-btn');
        this.firstOverlay = document.getElementById('first-overlay');
        this.secondOverlay = document.getElementById('second-overlay');
        this.playerOneName = document.getElementById('player-1-name');
        this.playerTwoName = document.getElementById('player-2-name');
        this.player1Info = document.getElementById('player-1-info');
        this.player2Info = document.getElementById('player-2-info');
        this.squares = Array.from(document.getElementsByClassName('square'));
    }
    startBtnAppears() {
            this.startBtn.classList.remove('hide');
    }
    startGame() {
        this.firstOverlay.classList.add('hide');
        this.secondOverlay.classList.remove('hide');
        this.playerOneName.innerText = this.playerOneInput.value.toUpperCase();
        this.playerTwoName.innerText = this.playerTwoInput.value.toUpperCase();
    }
    writeSign(x) {
        if (this.player1Info.classList.contains('yourTurn')) {
            x.innerText = `X`;
            this.player1Info.classList.remove('yourTurn');
            this.player2Info.classList.add('yourTurn');
            x.removeEventListener('click') //Here some problem
        } else {
            x.innerText = `O`;
            this.player1Info.classList.add('yourTurn');
            this.player2Info.classList.remove('yourTurn');
            x.removeEventListener('click') //Here some problem
        }
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    const playerOneInput = document.getElementById('player-1-input-name');
    const playerTwoInput = document.getElementById('player-2-input-name');
    const startBtn = document.getElementById('start-btn');
    const squares = Array.from(document.getElementsByClassName('square'));
    const ttt = new TicTacToe();

    playerOneInput.addEventListener('keyup', () => {
        if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
            ttt.startBtnAppears();
        } else (startBtn.classList.add('hide'));
    });

    playerTwoInput.addEventListener('keyup', () => {
        if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
            ttt.startBtnAppears();
        } else (startBtn.classList.add('hide'));
    });

    startBtn.addEventListener('click', () => {
        ttt.startGame();
    });

    squares.forEach(square => {
        square.addEventListener('click', (event) => {
            ttt.writeSign(event.target);
        });
    });
}