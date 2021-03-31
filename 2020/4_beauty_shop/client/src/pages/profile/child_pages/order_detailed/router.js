import React from "react";
import OrderDetailedPage from "./index";

const name = 'my_orders'

export const OrderDetailedRoute = {
    'name': name,
    'path': `/profile/${name}/:order_id`,
    'component': <OrderDetailedPage/>
}