import React from "react";
import style from './index.module.sass'

const OrderDetailedPageBottomInfoTotal = () => {
    return (
        <div className={style.box}>
            <div>
                <p className="f-16 lts-2 normal capitalize">Sub total:</p>
                <p className="f-16 lts-2 normal">$ 55.99</p>
            </div>
            <div>
                <p className="f-16 lts-2 normal capitalize">Shipping fee:</p>
                <p className="f-16 lts-2 normal">$ 12.00</p>
            </div>
            <div>
                <p className="f-16 lts-2 normal capitalize">Discound code:</p>
                <p className="f-16 lts-2 normal">- $ 5.00</p>
            </div>
            <div>
                <p className="f-16 lts-2 normal capitalize">Total:</p>
                <p className="f-16 lts-2 normal">- $ 62.00</p>
            </div>
        </div>
    )
}

export default OrderDetailedPageBottomInfoTotal