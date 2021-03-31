import React from "react";
import {Route} from "react-router-dom";
import style from './index.module.sass'
import ProfilePageMenu from "./menu";
import {MyProfileRoute} from "./child_pages/my_profile/router";
import {MyOrdersRoute} from "./child_pages/my_orders/routes";
import {RecentlyViewedRoute} from "./child_pages/recently_viewed/router";
import {MyFavoritesRoute} from "./child_pages/my_favorites/router";

import {AddressBookRoute} from "./child_pages/address_book/routes";
import {ChangePasswordRoute} from "./child_pages/change_password/routes";
import {NotifyInStockRoute} from "./child_pages/notify_in_stock/router";

const ProfilePage = () => {
    return (
        <div className="box">
            <div className="boxContent">

                <div className={style.grid}>
                    <div>
                        <ProfilePageMenu/>
                    </div>
                    <div>
                        <React.Suspense fallback={<div>loading...</div>}>
                            <Route path={MyProfileRoute.path} exact={true}>{MyProfileRoute.component}</Route>
                            <Route path={MyOrdersRoute.path}>{MyOrdersRoute.component}</Route>
                            <Route path={RecentlyViewedRoute.path}>{RecentlyViewedRoute.component}</Route>
                            <Route path={MyFavoritesRoute.path}>{MyFavoritesRoute.component}</Route>
                            <Route path={AddressBookRoute.path}>{AddressBookRoute.component}</Route>
                            <Route path={ChangePasswordRoute.path}>{ChangePasswordRoute.component}</Route>
                            <Route path={NotifyInStockRoute.path}>{NotifyInStockRoute.component}</Route>
                        </React.Suspense>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage