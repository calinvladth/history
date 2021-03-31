import React from "react";
import style from './index.module.sass'
import {MyProfileRoute} from "../../../../pages/profile/child_pages/my_profile/router";
import {MyOrdersRoute} from "../../../../pages/profile/child_pages/my_orders/routes";
import {RecentlyViewedRoute} from "../../../../pages/profile/child_pages/recently_viewed/router";
import {MyFavoritesRoute} from "../../../../pages/profile/child_pages/my_favorites/router";
import {Link, withRouter} from "react-router-dom";
import {MatchRoute} from "../../../../helpers/check_route";
import {useDispatch} from "react-redux";
import {SignOut} from "../../../../redux/account/actions";
import {ShopRoute} from "../../../../pages/shop/router";

const NavigationBarProfileUser = (props) => {
    const {account} = props
    const dispatch = useDispatch()
    const links = [
        {name: 'My profile', path: MyProfileRoute.path},
        {name: 'My orders', path: MyOrdersRoute.path},
        {name: 'Recently viewed', path: RecentlyViewedRoute.path},
        {name: 'My favorites', path: MyFavoritesRoute.path}
    ]

    function submitSignOut() {
        dispatch(SignOut())
    }

    return (
        <div className={style.box}>
            <div>
                <span className="f-13 capitalize lts-2">Hello {account.email}</span>
            </div>
            <div className={style.boxLinks}>
                {
                    links.map(o => {
                        return <span key={o.name} className={`f-15 lts-2 ${MatchRoute(o.path) && style.boxLinkActive}`}><Link
                        to={o.path}>{o.name}</Link></span>
                    })
                }
            </div>
            <div className={style.boxSignOut}>
                <span className="f-13 uppercase lts-2 pointer" onClick={() => submitSignOut()}>Sign Out</span>
            </div>
        </div>
    )
}

export default withRouter(NavigationBarProfileUser)