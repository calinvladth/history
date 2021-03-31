import React from "react";
import NotifyInStockPage from "./index";

const name = 'notify_in_stock'

export const NotifyInStockRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <NotifyInStockPage/>
}