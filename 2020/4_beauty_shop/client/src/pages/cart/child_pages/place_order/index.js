import React from "react";
import style from './index.module.sass'
import PlaceOrderPageShippingAddress from "./shipping_address";
import PlaceOrderPageOrderSummary from "./order_summary";
import PlaceOrderPageCart from "./cart";

const PlaceOrderPage = () => {
    return (
        <div className={style.box}>
            <div>
                <PlaceOrderPageShippingAddress/>
            </div>
            <div>
                <div>
                    <PlaceOrderPageOrderSummary/>
                </div>
                <div>
                    <PlaceOrderPageCart/>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderPage