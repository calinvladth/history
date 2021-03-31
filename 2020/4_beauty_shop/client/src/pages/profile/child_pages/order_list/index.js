import React from "react";
import style from './index.module.sass'
import OrderListPageInfo from "./info";
import OrderListPageHeader from "./header";
import OrderListPageRow from "./row";
import OrderListPageActions from "./actions";
import Pagination from "../../../../components/pagination";

const OrderListPage = () => {
    return (
        <Pagination align="flex-end" info={false}>

            <div className={style.box}>

                <section>
                    <OrderListPageHeader/>
                </section>


                <section>
                    <OrderListPageInfo/>
                    <OrderListPageRow/>
                </section>

                <section>
                    <OrderListPageActions/>
                </section>


            </div>
        </Pagination>

    )
}

export default OrderListPage