import React from "react";
import style from './index.module.sass'

const CartPagePanel = (props) => {
    const {name = 'No name available', children = 'No component available'} = props
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-16 uppercase lts-3">{name}</h1>
            </div>

            <div className={style.boxComponent}>
                {children}
            </div>
        </div>
    )
}

export default CartPagePanel