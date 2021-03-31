import React from "react";
import style from "../index.module.sass";

const OrderDetailedPageBottomInfoPaymentMethod = () => {
    return (
        <div className={style.boxInfo}>
            <h1 className="f-16 capitalize normal lts-2">Payment method</h1>
            <div>
                <span className="f-14 lts-2">Credit / Debit card</span>
            </div>
        </div>
    )
}

export default OrderDetailedPageBottomInfoPaymentMethod