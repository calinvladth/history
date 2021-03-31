import React, {Component} from 'react';
import style from './index.module.sass'

class Button extends Component {
    render() {
        const {children, backgroundColor, borderColor, color, onClick, disabled} = this.props
        const newStyle = {
            backgroundColor: backgroundColor,
            color: color,
            borderColor: borderColor ? borderColor : backgroundColor
        }
        return (
            <button disabled={disabled && disabled} onClick={onClick} className={style.button} style={newStyle}>
                {children}
            </button>
        );
    }
}

export default Button;