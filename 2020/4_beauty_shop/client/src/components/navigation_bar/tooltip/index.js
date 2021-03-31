import React from 'react'
import style from './index.module.sass'

const NavigationBarTooltip = (props) => {

    const {show=false, children} = props

    if (show) {
        return (
            <div className={style.box}>
                {children}
            </div>
        )
    } else return null


}

export default NavigationBarTooltip