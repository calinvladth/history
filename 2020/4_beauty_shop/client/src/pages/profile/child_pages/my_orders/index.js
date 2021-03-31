import React from "react";
import style from './index.module.sass'
import {OrderListRoute} from "../order_list/router";
import {OrderReviewRoute} from "../order_review/router";
import {Link, Route, useRouteMatch, withRouter} from "react-router-dom";
import {OrderDetailedRoute} from "../order_detailed/router";
import {MatchRoute} from "../../../../helpers/check_route";


const MyOrdersPage = (router) => {
    console.log(useRouteMatch(OrderReviewRoute.path))
    const pages = [
        {name: 'Order List', link: OrderListRoute.path},
        {name: 'Order Review', link: OrderReviewRoute.path},
        {name: 'Order Detailed', link: OrderDetailedRoute.path},
    ]
    return (
        <div>
            <div className={style.menu}>
                {
                    pages.map(({name, link}) => {
                        let show = false
                        if (link === OrderListRoute.path || MatchRoute(link)) show = true

                        if (show) return <Link key={link}
                                               className={`f-15 uppercase lts-2 ${style.link} ${MatchRoute(link) && style.active}`}
                                               to={link}>{name}</Link>

                    })
                }
            </div>

            <div className={style.page}>
                <Route path={OrderListRoute.path} exact={true}>{OrderListRoute.component}</Route>
                <Route path={OrderReviewRoute.path} exact={true}>{OrderReviewRoute.component}</Route>
                <Route path={OrderDetailedRoute.path} exact={true}>{OrderDetailedRoute.component}</Route>
            </div>
        </div>
    )
}

export default withRouter(MyOrdersPage)