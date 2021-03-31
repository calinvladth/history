import React from 'react'
import './index.sass'

const Button = ({handleClick, next, dark}) => {
    const darkButton = () => {
        if (dark) {
            return {
                backgroundColor: 'black',
                color: 'white'
            }
        }
    }

    return handleClick
        ?
        <button style={darkButton()} className="button" onClick={() => handleClick(next)}>{next}</button>
        :
        <button style={darkButton()} className="button">{next}</button>
}

export default Button
