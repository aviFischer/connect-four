import React from 'react'

import './ArrowRow.css'

class ArrowRow extends React.Component {

    renderArrow(number, onClick) {
        var output = []
        for(var i = 0; i < 7; i ++) {
            output.push(<button 
                className = 'Arrow' 
                style = {{top: 40, left: 130 + number * 100}}
                onClick = {() => onClick(number)}
            />)
        }
        return output
    }

    render() {
        return(
            <div>
                {this.renderArrow(0, this.props.onClick)}
                {this.renderArrow(1, this.props.onClick)}
                {this.renderArrow(2, this.props.onClick)}
                {this.renderArrow(3, this.props.onClick)}
                {this.renderArrow(4, this.props.onClick)}
                {this.renderArrow(5, this.props.onClick)}
                {this.renderArrow(6, this.props.onClick)}
            </div>
        )
    }
}

export default ArrowRow