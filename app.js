class TicTacToe {
    constructor() {
        this.playerOneInput = document.getElementById('player-1-input-name');
        this.playerTwoInput = document.getElementById('player-2-input-name');
        this.playersInputs = document.getElementById('players-info');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn')
        this.firstOverlay = document.getElementById('first-overlay');
        this.secondOverlay = document.getElementById('second-overlay');
        this.playerOneName = document.getElementById('player-1-name');
        this.playerTwoName = document.getElementById('player-2-name');
        this.player1Info = document.getElementById('player-1-info');
        this.player2Info = document.getElementById('player-2-info');
        this.squares = Array.from(document.getElementsByClassName('square'));
        this.sq1 = document.getElementById('square-1');
        this.sq2 = document.getElementById('square-2');
        this.sq3 = document.getElementById('square-3');
        this.sq4 = document.getElementById('square-4');
        this.sq5 = document.getElementById('square-5');
        this.sq6 = document.getElementById('square-6');
        this.sq7 = document.getElementById('square-7');
        this.sq8 = document.getElementById('square-8');
        this.sq9 = document.getElementById('square-9');
        this.winnerMsg = document.getElementById('winner-message');
        this.drawMsg = document.getElementById('draw-message');
        this.actualWinner = document.getElementById('actual-winner');
        this.playersInfo = document.getElementById('players-info');
    }
    startBtnAppears() {
            this.startBtn.classList.remove('hide');
    }
    startGame() {
        this.firstOverlay.classList.add('hide');
        this.secondOverlay.classList.remove('hide');
        this.startBtn.classList.add('hide');
        this.playerOneName.innerText = this.playerOneInput.value.toUpperCase();
        this.playerTwoName.innerText = this.playerTwoInput.value.toUpperCase();
    }
    writeSign(event) {
        if (this.player1Info.classList.contains('yourTurn')) {
            event.innerText = `X`;
            this.player1Info.classList.remove('yourTurn');
            this.player2Info.classList.add('yourTurn');
            event.removeEventListener('click', avoidOverlap);
        } else {
            event.innerText = `O`;
            this.player1Info.classList.add('yourTurn');
            this.player2Info.classList.remove('yourTurn');
            event.removeEventListener('click', avoidOverlap);
        }
        this.winner();
    }

    winner() {
        const winner = this.getWinner();
        if (winner) {
          this.winnerMsg.classList.remove('hide');
          this.actualWinner.innerText = `Player ${winner}`;
          this.restartBtn.classList.remove('hide');
          this.playersInfo.classList.add('hide');
          this.squares.forEach(square => 
            square.removeEventListener('click', avoidOverlap));
        } else if (this.squares.every(square =>
            square.innerText !== ''
            )) {
            this.drawMsg.classList.remove('hide');
            this.restartBtn.classList.remove('hide');
            this.playersInfo.classList.add('hide');
        }
      }
      getWinner() {
        const victory = (n) => this[`sq${n}`].innerText;
        const allSame = (a, b, c) => victory(a) === victory(b) && victory(b) === victory(c);
      
        for(let i = 0; i < 3; i++) {
          if (allSame(i * 3 + 1, i * 3 + 2, i * 3 + 3)) return victory(i * 3 + 1);
          if (allSame(i + 1, i + 4, i + 7)) return victory(i + 1);
        }
        if (allSame(1, 5, 9)) return victory(1);
        if (allSame(3, 5, 7)) return victory(3);
        return null;
      }
    
    restartGame() {
        this.startBtnAppears();
        this.firstOverlay.classList.remove('hide');
        this.secondOverlay.classList.add('hide');
        this.restartBtn.classList.add('hide');
        this.squares.forEach(square => {
            square.innerText = ``;
            square.addEventListener('click', avoidOverlap);
        });
        this.winnerMsg.classList.add('hide');
        this.drawMsg.classList.add('hide');
        this.playerOneInput.value = '';
        this.playerTwoInput.value = ''; 
        this.startBtn.classList.add('hide');
        this.playersInfo.classList.remove('hide');
        this.player1Info.classList.add('yourTurn');
        this.player2Info.classList.remove('yourTurn');
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
    const restartBtn = document.getElementById('restart-btn');
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

    restartBtn.addEventListener('click', () => {
        ttt.restartGame();
    });

    squares.forEach(square => {
        square.addEventListener('click', avoidOverlap);
        });
}

function avoidOverlap(event) {
    let ttt = new TicTacToe();
    ttt.writeSign(event.target);
}