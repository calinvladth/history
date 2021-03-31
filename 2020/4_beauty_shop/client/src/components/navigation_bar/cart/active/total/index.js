import React from "react";
import style from './index.module.sass'

const NavigationBarCartActiveTotal = () => {
    return (
        <div className={style.box}>
            <p className="f-14 lts-2">Total:</p>
            <p className="f-14 lts-2">$ 25.99</p>
        </div>
    )
}

export default NavigationBarCartActiveTotal