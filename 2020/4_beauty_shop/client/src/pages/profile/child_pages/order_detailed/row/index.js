import React from "react";
import style from './index.module.sass'
import OrderDetailedPageRowItem from "./item";

const OrderDetailedPageRow = () => {
    return (
        <div>
            <div className={style.boxRow}>
                <div className={style.boxItems}>
                    <OrderDetailedPageRowItem/>
                    <OrderDetailedPageRowItem/>
                    <OrderDetailedPageRowItem/>
                </div>


                <div className={style.boxStatus}>
                    <p className="f-14 lts-2">All Shipped</p>
                </div>
            </div>


        </div>
    )
}

export default OrderDetailedPageRow