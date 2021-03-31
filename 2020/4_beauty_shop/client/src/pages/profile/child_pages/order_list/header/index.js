import React from "react";
import style from './index.module.sass'

const OrderListPageHeader = () => {
    return (
        <div className={style.boxTitle}>
            <div>
                <p className="f-13 lts-2">Products</p>
            </div>
            <div>
                <p className="f-13 lts-2">Total</p>
            </div>
            <div>
                <p className="f-13 lts-2">Commodity operation</p>
            </div>
            <div>
                <p className="f-13 lts-2">Status</p>
            </div>
            <div>
                <p className="f-13 lts-2">Order operation</p>
            </div>
        </div>
    )
}

export default OrderListPageHeader