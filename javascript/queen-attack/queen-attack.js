export class QueenAttack {
  constructor(coordinates = { white: [0, 3], black: [7, 3] }) {
    this.white = coordinates.white;
    this.black = coordinates.black;
    [this.whiteX, this.whiteY] = this.white;
    [this.blackX, this.blackY] = this.black;
    this.size = 8;
    this.emptySpace = '_';
    this.board = this.createBoard();
    this.canAttack();
  }

  canAttack() {
    const xAxis = this.whiteX - this.blackX;
    const yAxis = this.whiteY - this.blackY;
    if ((xAxis === 0) && (yAxis === 0)) {
      throw new Error('Queens cannot share the same space');
    } else if (Math.abs(xAxis) === Math.abs(yAxis)) {
      return true;
    } else if ((xAxis === 0) || (yAxis === 0)) {
      return true;
    }
    return false;
  }

  createBoard() {
    const board = [];
    for (let row = 0; row < this.size; row += 1) {
      board.push([]);
      for (let col = 0; col < this.size; col += 1) {
        if (this.whiteX === row && this.whiteY === col) {
          board[row].push('W');
        } else if (this.blackX === row && this.blackY === col) {
          board[row].push('B');
        } else {
          board[row].push(this.emptySpace);
        }
      }
    }
    return board;
  }

  toString() {
    let strBoard = '';
    for (let row = 0; row < this.size; row += 1) {
      strBoard += this.board[row].join(' ');
      strBoard += '\n';
    }
    return strBoard;
  }
}
