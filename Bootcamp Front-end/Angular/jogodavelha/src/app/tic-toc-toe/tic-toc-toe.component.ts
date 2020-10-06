import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-toc-toe',
  templateUrl: './tic-toc-toe.component.html',
  styleUrls: ['./tic-toc-toe.component.css'],
})
export class TicTocToeComponent {
  currentPlayer: string = 'X';
  playerCurrent: string = '';
  playerOne: string = 'Tonico';
  playerTwo: string = 'Tinôco';
  winner: string = '';
  scoreX: number = 0;
  scoreO: number = 0;
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  arrayTicTacToe: number[] = [0, 1, 2];

  initialPlayer() {
    if (this.currentPlayer === 'X') {
      return (this.playerCurrent = this.playerOne);
    } else {
      return (this.playerCurrent = this.playerTwo);
    }
  }

  processPlay(line: number, col: number) {
    console.log(`Jogada na linha ${line}, coluna ${col}`);
    if (this.board[line][col] === '' && this.winner === '') {
      this.board[line][col] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        if (this.currentPlayer === 'X') {
          this.scoreX++;
          this.winner = this.currentPlayer;
          setTimeout(() => {
            alert(`Parabéns ${this.playerOne}, você ganhou a partida!`);
            if (this.scoreX === 2) {
              setTimeout(() => {
                this.winner = this.playerOne;
                alert(`Parabéns ${this.winner}, você venceu o jogo!`);
              }, 500);
            }
          }, 250);
        } else if (this.currentPlayer === 'O') {
          this.scoreO++;
          setTimeout(() => {
            alert(`Parabéns ${this.playerTwo}, você ganhou a partida!`);
            if (this.scoreO === 2) {
              setTimeout(() => {
                this.winner = this.playerTwo;
                alert(`Parabéns ${this.winner}, você venceu o jogo!`);
              }, 500);
            }
          }, 250);
        }
        this.empty();
      }
      if (this.currentPlayer === 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] === player &&
        this.board[i][1] === player &&
        this.board[i][2] === player
      ) {
        return true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] === player &&
        this.board[1][i] === player &&
        this.board[2][i] === player
      ) {
        return true;
      }
    }
    if (
      this.board[0][0] === player &&
      this.board[1][1] === player &&
      this.board[2][2] === player
    ) {
      return true;
    }
    if (
      this.board[0][2] === player &&
      this.board[1][1] === player &&
      this.board[2][0] === player
    ) {
      return true;
    }
    return false;
  }

  reset() {
    this.currentPlayer = 'O';
    this.scoreX = 0;
    this.scoreO = 0;
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
  empty() {
    if (this.currentPlayer === 'O') {
      this.currentPlayer = 'X';
    } else {
      this.currentPlayer = 'O';
    }
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
