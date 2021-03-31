import React from "react";
import style from './index.module.sass'
import OrderReviewPageProduct from "./product";

const OrderReviewPage = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-25 normal lts-3">Write a Review</h1>
            </div>

            <div className={style.boxProducts}>
                <section>
                    <OrderReviewPageProduct/>
                </section>

                <section>
                    <OrderReviewPageProduct/>
                </section>

            </div>

            <div className={style.boxAction}>
                <button className="button uppercase f-16 lts-2">Submit</button>
            </div>

        </div>
    )
}

export default OrderReviewPage