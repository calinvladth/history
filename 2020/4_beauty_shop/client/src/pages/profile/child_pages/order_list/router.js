import React from "react";
import OrderListPage from "./index";

const name = 'my_orders'

export const OrderListRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <OrderListPage/>
}