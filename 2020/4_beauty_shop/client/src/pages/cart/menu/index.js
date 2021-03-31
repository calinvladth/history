import React from "react";
import style from './index.module.sass'
import {CartRoute} from "../router";
import {MatchRoute} from "../../../helpers/check_route";
import {PlaceOrderRoute} from "../child_pages/place_order/router";
import {PaymentRoute} from "../child_pages/payment/router";
import {OrderConfirmedRoute} from "../child_pages/order_confirmed/router";

const CartPageMenu = () => {

    const links = [
        {name: 'cart', link: CartRoute.path},
        {name: 'place order', link: PlaceOrderRoute.path},
        {name: 'payment', link: PaymentRoute.path},
        {name: 'order confirmed', link: OrderConfirmedRoute.path},
    ]
    return (
        <div className={style.box}>
            {
                links.map(o => <div key={o.name} className={`${MatchRoute(o.link) && style.active}`}>
                    <h1 className="f-14 capitalize lts-3 normal">{o.name}</h1>
                </div>)
            }

        </div>
    )
}

export default CartPageMenu