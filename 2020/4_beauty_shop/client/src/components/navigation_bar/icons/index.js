import React from "react";
import style from './index.module.sass'
import PersonSvg from "../../../assets/icons/person_svg";
import HeartSvg from "../../../assets/icons/heart";
import ShoppingBagSvg from "../../../assets/icons/shopping_bag_svg";
import SearchSvg from "../../../assets/icons/search_svg";
import {withRouter} from "react-router-dom";
import {CartRoute} from "../../../pages/cart/router";
import {MyFavoritesRoute} from "../../../pages/profile/child_pages/my_favorites/router";
import NavigationBarProfile from "../profile";
import NavigationBarCart from "../cart";
import {ProfileRoute} from "../../../pages/profile/router";
import {useSelector} from "react-redux";

const NavigationBarIcons = (props) => {
    const account = useSelector(state => state.account)

    const {activeIcon, setActiveIcon, setShowTooltip} = props

    const icons = [
        {
            icon: <PersonSvg/>,
            route: account.data.is_authenticated ? ProfileRoute.path : `${props.history.location.pathname}?account=true`,
            component: <NavigationBarProfile/>,
            tooltip: true
        },
        {icon: <HeartSvg/>, route: MyFavoritesRoute.path, tooltip: false},
        {icon: <ShoppingBagSvg/>, route: CartRoute.path, component: <NavigationBarCart/>, tooltip: true},
        {icon: <SearchSvg/>, route: `${props.history.location.pathname}?search=true`, tooltip: false},
    ]
    return (
        <div className={style.icons}>
            {
                icons.map(o => <div key={o.route}>
                <span className={`${activeIcon.route === o.route && style.iconActive}`}
                      onClick={() => props.history.push(o.route)} onMouseEnter={() => {
                    setShowTooltip(o.tooltip)
                    setActiveIcon(o)
                }}>
                    {o.icon}
                </span>
                </div>)
            }
        </div>
    )
}

export default withRouter(NavigationBarIcons)