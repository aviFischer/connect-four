import React from 'react';

import Board from './Board'
import ArrowRow from './ArrowRow'

class App extends React.Component {
  constructor() {
    super()

    var emptyBoard = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];

    var arrowsHovered = Array(7).fill(false)
    
    this.state = {
        board: emptyBoard,
        arrows: arrowsHovered,
        redTurn: false
    }

    this.onClickArrow = this.onClickArrow.bind(this)
    this.clear = this.clear.bind(this)
  }

  clear() {
    this.setState({
        board: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],
        redTurn: false
    })
  }

  onClickArrow(col) {
    console.log('placing a piece in column ' + col)
    var board = Array.from(this.state.board)
    for(var row = 5; row >= 0; row = row - 1){
      if(board[row][col] == 0){
        board[row][col] = this.state.redTurn ? 1 : -1
        this.setState({
          redTurn: !this.state.redTurn,
          board: Array.from(board)
        })
        return
      }
      if(row == 0){
        alert('A piece can\'t be placed in this column')
      }
    }
  }

  render() {
    return (
      <div>
        <ArrowRow arrowRow = {this.state.board} onClick = {(col) => this.onClickArrow(col)}/>
        <Board board = {this.state.board}/>
        <button onClick = {this.clear}>Clear</button>
      </div>
    );
  }
}

export default App;
