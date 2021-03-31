import React from "react";
import style from './index.module.sass'

const NavigationBarCartEmpty = () => {
    return (
        <div className={style.box}>
            <div className={style.boxInfo}>
                <span className="f-14 lts-2">
                    Your shopping bag is empty
                </span>
            </div>
        </div>
    )
}

export default NavigationBarCartEmpty