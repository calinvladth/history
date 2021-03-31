import React from 'react'
import style from './index.module.sass'
import {CartRoute} from "../../../../../pages/cart/router";
import {Link} from "react-router-dom";
import CartPageCartCheckout from "../../../../../pages/cart/child_pages/my_cart/checkout";
import {PlaceOrderRoute} from "../../../../../pages/cart/child_pages/place_order/router";

const NavigationBarCartActiveActions = () => {
    return (
        <div className={style.box}>
            <Link to={CartRoute.path}>
                <button className="button uppercase f-13 lts-1">
                    View cart
                </button>
            </Link>
            <Link to={PlaceOrderRoute.path}>
                <button className="button uppercase f-13 lts-1">Checkout</button>
            </Link>
        </div>
    )
}

export default NavigationBarCartActiveActions