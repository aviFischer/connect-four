import React from 'react'
import './Board.css'

function renderCircles(board) {
    var circles = []
    for(var row = 0; row < 6; row ++) {
        for(var col = 0; col < 7; col ++) {
            if(board[row][col] == 0)
                circles.push(<div className = 'White-Circle' style = {{top: 120 + row * 100, left : 120 + col * 100}}/>)
            else if(board[row][col] == 1)
                circles.push(<div className = 'Red-Circle' style = {{top: 120 + row * 100, left : 120 + col * 100}}/>)
            else
                circles.push(<div className = 'Yellow-Circle' style = {{top: 120 + row * 100, left : 120 + col * 100}}/>)
        }
    }
    return circles
}

function Board(props) {
    return(
        <div>
            <div className = 'Big-Rectangle'/>
            <div className = 'Long-Rectangle'/>
            {renderCircles(props.board)}
        </div>
    )
}

export default Board