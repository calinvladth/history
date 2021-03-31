import React from "react";
import style from './index.module.sass'
import {Link, withRouter} from "react-router-dom";
import {MatchRoute} from "../../../helpers/check_route";
import {HomeRoute} from "../../../pages/home/router";
import {ShopRoute} from "../../../pages/shop/router";
import {ContactRoute} from "../../../pages/contact/router";


const NavigationBarLinks = (props) => {
    const links = [
        {name: HomeRoute.name, route: HomeRoute.path},
        {name: ShopRoute.name, route: ShopRoute.path},
        {name: ContactRoute.name, route: ContactRoute.path},
    ]
    return (
        <div className={style.links}>
            {
                links.map(o => <span key={o.route}
                                     className={`f-16 lts-2 ${MatchRoute(o.route) && style.linkActive}`}>
                <Link to={o.route}>{o.name}</Link>
            </span>)
            }
        </div>
    )
}

export default withRouter(NavigationBarLinks)