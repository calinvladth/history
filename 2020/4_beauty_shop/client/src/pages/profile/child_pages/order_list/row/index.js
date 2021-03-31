import React from "react";
import style from './index.module.sass'

const OrderListPageRow = () => {
    return (
        <div className={style.box}>
            <div>
                <p className="f-14 lts-2">2</p>
            </div>
            <div>
                <p className="f-14 lts-2"><span>$ </span>62.99</p>
            </div>
            <div>
                <button className="button f-13 lts-2 capitalize">Track</button>
            </div>
            <div>
                <p className="f-14 lts-2">Shipped</p>
            </div>
            <div>
                <button className="button f-13 lts-2 capitalize">Confirm delivery</button>
            </div>
        </div>
    )
}

export default OrderListPageRow