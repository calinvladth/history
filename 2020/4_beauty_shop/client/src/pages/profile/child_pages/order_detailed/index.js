import React from "react";
import style from './index.module.sass'
import OrderDetailedPageHeader from "./header";
import OrderDetailedPageTopInfo from "./top_info";
import OrderDetailedPageRow from "./row";
import OrderDetailedPageBottomInfo from "./bottom_info";

const OrderDetailedPage = () => {
    return (
        <div className={style.box}>
            <section>
                <OrderDetailedPageHeader/>
            </section>

            <section>
                <OrderDetailedPageTopInfo/>
                <OrderDetailedPageRow/>
            </section>

            <section>
                <OrderDetailedPageBottomInfo/>
            </section>

        </div>
    )
}


export default OrderDetailedPage