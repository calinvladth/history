import React from "react";
import style from './index.module.sass'
import {withRouter} from "react-router-dom";
import {OrderReviewRoute} from "../../order_review/router";
import {OrderDetailedRoute} from "../../order_detailed/router";

const OrderListPageActions = (router) => {
    return (
        <div className={style.box}>
            <div>
                <button className="button buttonEmpty lts-2 uppercase"
                        onClick={() => router.history.push(OrderDetailedRoute.path)}>Show order details
                </button>
            </div>

            <div>
                <button className="button buttonEmpty lts-2 uppercase"
                        onClick={() => router.history.push(OrderReviewRoute.path)}>Review order
                </button>
            </div>
        </div>
    )
}

export default withRouter(OrderListPageActions)