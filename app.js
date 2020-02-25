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
            x.removeEventListener('click', avoidOverlap);
        } else {
            x.innerText = `O`;
            this.player1Info.classList.add('yourTurn');
            this.player2Info.classList.remove('yourTurn');
            x.removeEventListener('click', avoidOverlap);
        }
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    const inputs = Array.from(document.getElementsByClassName('input'));
    const playerOneInput = document.getElementById('player-1-input-name');
    const playerTwoInput = document.getElementById('player-2-input-name');
    const startBtn = document.getElementById('start-btn');
    let squares = Array.from(document.getElementsByClassName('square'));
    let ttt = new TicTacToe();

    inputs.forEach(input => 
        input.addEventListener('keyup', () => {
            if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
                ttt.startBtnAppears()
                } 
                else {
                    startBtn.classList.add('hide')
            };
        })
    )

    startBtn.addEventListener('click', () => {
        ttt.startGame();
    });

    squares.forEach(square => {
        square.addEventListener('click', avoidOverlap);
        });
}

function avoidOverlap(event) {
    let ttt = new TicTacToe();
    ttt.writeSign(event.target);
}
