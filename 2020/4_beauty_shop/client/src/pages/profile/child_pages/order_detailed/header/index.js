import React from "react";
import style from './index.module.sass'

const OrderDetailedPageHeader = () => {
    return (
        <div className={style.boxTitle}>
            <div>
                <p className="f-13 lts-2">Products</p>
            </div>
            <div>
                <p className="f-13 lts-2">Total</p>
            </div>
            <div>
                <p className="f-13 lts-2">Status</p>
            </div>
        </div>
    )
}

export default OrderDetailedPageHeader