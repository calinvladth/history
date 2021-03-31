import React from "react";
import style from "./index.module.sass";

const HomePageNewProductInfo = (props) => {
    const {right, variant, title} = props
    const width = 160

    let borderStyle = {
        position: 'absolute',
        top: '3.4rem',
        width: width + '%',
        height: '100%',
        zIndex: 0
    }

    let boxStyle = {
        textAlign: right ? 'left' : 'right'
    }

    let boxTitleStyle = {
        padding: right ? '2rem 2rem 2rem 0' : '2rem 0 2rem 2rem'
    }

    if (right) {
        borderStyle.right = 0
        boxStyle.paddingLeft = '2.5rem'
    } else {
        borderStyle.left = 0
        boxStyle.paddingRight = '2.5rem'
    }

    if (variant === 1) {
        const left = 35
        borderStyle.left = left + '%'
        borderStyle.width = width - left + '%'
        borderStyle.height = '75%'
    }
    if (variant === 2) {
        const right = 75
        borderStyle.right = right + '%'
        borderStyle.right = right + '%'
        borderStyle.width = width - right + '%'
    }


    return (
        <div className={style.box} style={boxStyle}>
            <div className={`${style.boxTitle}`} style={boxTitleStyle}>
                <span className={style.boxTitleBorder} style={borderStyle}></span>
                <h1 className="f-20 normal">{title}</h1>
            </div>
            <div className={style.boxParagraph}>
                <p className="f-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur deserunt,
                    magni nihil ratione sunt veritatis!</p>
            </div>
        </div>
    )
}

export default HomePageNewProductInfo