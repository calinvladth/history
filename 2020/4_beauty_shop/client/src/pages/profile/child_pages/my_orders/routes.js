import React from "react";
import MyOrdersPage from "./index";

const name = 'my_orders'

export const MyOrdersRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <MyOrdersPage/>
}