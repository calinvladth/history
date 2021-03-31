import React from "react";
import OrderReviewPage from "./index";

const name = 'my_orders'

export const OrderReviewRoute = {
    'name': name,
    'path': `/profile/${name}/:order_id/order_review`,
    'component': <OrderReviewPage/>
}

export const OrderReviewRouteQuery = (order_id) => {
    return `/profile/${name}/${order_id ? order_id : order_id}/order_review/`
}