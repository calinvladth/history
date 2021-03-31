import React from "react";
import style from './index.module.sass'
import {MyProfileRoute} from "../child_pages/my_profile/router";
import {Link, withRouter} from "react-router-dom";
import {MyOrdersRoute} from "../child_pages/my_orders/routes";
import {RecentlyViewedRoute} from "../child_pages/recently_viewed/router";
import {MyFavoritesRoute} from "../child_pages/my_favorites/router";
import {AddressBookRoute} from "../child_pages/address_book/routes";
import {NotifyInStockRoute} from "../child_pages/notify_in_stock/router";
import {ChangePasswordRoute} from "../child_pages/change_password/routes";
import {CheckRoute} from "../../../helpers/check_route";

const pagesTop = [
    {name: 'My profile', link: MyProfileRoute.path},
    {name: 'My orders', link: MyOrdersRoute.path},
    {name: 'Recently viewed', link: RecentlyViewedRoute.path},
    {name: 'My favorites', link: MyFavoritesRoute.path}
]

const pagesBottom = [
    {name: 'Address book', link: AddressBookRoute.path},
    {name: 'Change password', link: ChangePasswordRoute.path},
    {name: 'Notify in stock', link: NotifyInStockRoute.path},
]

const ProfilePageMenu = (router) => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-18 uppercase normal lts-3">My account</h1>
            </div>

            <div className={style.boxLinks}>
                {
                    pagesTop.map(({name, link}) => <Link key={link} to={link}
                                                         className={`f-16 lts-3 ${CheckRoute(router.location.pathname, link) && style.active}`}>{name}</Link>)
                }
            </div>

            <div className={style.boxLinks}>
                {
                    pagesBottom.map(({name, link}) => <Link key={link} to={link}
                                                            className={`f-16 lts-3 ${CheckRoute(router.location.pathname, link) && style.active}`}>{name}</Link>)
                }
            </div>


        </div>
    )
}

export default withRouter(ProfilePageMenu)