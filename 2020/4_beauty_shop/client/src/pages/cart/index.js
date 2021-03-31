import React from 'react'
import style from './index.module.sass'
import {Route} from "react-router-dom";
import {MyCartRoute} from "./child_pages/my_cart/router";
import {PlaceOrderRoute} from "./child_pages/place_order/router";
import {PaymentRoute} from "./child_pages/payment/router";
import CartPageMenu from "./menu";
import {OrderConfirmedRoute} from "./child_pages/order_confirmed/router";

const CartPage = () => {
    return (
        <div className="box">
            <div className="boxContent">

                <div className={style.grid}>

                    <div>
                        <CartPageMenu/>
                    </div>

                    <div>
                        <React.Suspense fallback={<div>loading...</div>}>
                            <Route path={MyCartRoute.path} exact={true}>{MyCartRoute.component}</Route>
                            <Route path={PlaceOrderRoute.path}>{PlaceOrderRoute.component}</Route>
                            <Route path={PaymentRoute.path}>{PaymentRoute.component}</Route>
                            <Route path={OrderConfirmedRoute.path}>{OrderConfirmedRoute.component}</Route>
                        </React.Suspense>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartPage