import React from "react";
import style from './index.module.sass'
import NavigationBarCartActive from "./active";
import NavigationBarCartEmpty from "./empty";
import {useSelector} from "react-redux";

const NavigationBarCart = (props) => {
    const cart = useSelector(state => state.cart)
    return (
        <div className={style.box}>
            {
                cart.data.length === 0
                    ?
                    <NavigationBarCartEmpty/>
                    :
                    <NavigationBarCartActive cart={cart}/>
            }

        </div>
    )
}

export default NavigationBarCart