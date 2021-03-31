import React from "react";
import style from './index.module.sass'
import OrderDetailedPageBottomInfoTotal from "./total";
import OrderedDetailedBottomInfoBilling from "./billing";
import OrderDetailedPageBottomInfoShipping from "./shipping";
import OrderDetailedPageBottomInfoShippingMethod from "./shipping_method";
import OrderDetailedPageBottomInfoPaymentMethod from "./payment_method";

const OrderDetailedPageBottomInfo = () => {
    return (
        <div className={style.box}>
            <section className={style.boxTotal}>
                <OrderDetailedPageBottomInfoTotal/>
            </section>

            <section className={style.boxBilling}>
                <OrderedDetailedBottomInfoBilling/>
            </section>

            <section className={style.boxShipping}>
                <OrderDetailedPageBottomInfoShipping/>
            </section>

            <section className={style.boxShippingMethod}>
                <OrderDetailedPageBottomInfoShippingMethod/>
            </section>

            <section className={style.boxPaymentMethod}>
                <OrderDetailedPageBottomInfoPaymentMethod/>
            </section>
        </div>
    )
}


export default OrderDetailedPageBottomInfo