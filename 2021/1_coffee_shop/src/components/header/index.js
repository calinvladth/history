import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import LogoLightPNG from "../../assets/images/logo_light.png";
import LogoDarkPNG from "../../assets/images/logo_dark.png";
import {Link, useLocation} from "react-router-dom";
import CartSVG from "../../assets/svg/cart";
import {HomePath} from "../../pages/home/path";
import {ShopPath} from "../../pages/shop/path";
import {ContactPath} from "../../pages/contact/path";
import {CartPath} from "../../pages/cart/path";
import {useSelector} from "react-redux";

const HeaderComponent = () => {
    const [light, setLight] = useState(false)
    const location = useLocation()
    const lightPaths = [HomePath]

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        const isLight = lightPaths.filter(o => o === location.pathname)
        if (isLight.length === 1) setLight(true)
        else setLight(false)
    }, [location.pathname])

    return (
        <div className={style.box}>
            <div className={`${style.boxContent} ${light ? style.boxContentLight : null}`}>

                <div className={style.logo}>
                    {
                        light
                            ?
                            <img src={LogoLightPNG} alt=""/>
                            :
                            <img src={LogoDarkPNG} alt=""/>
                    }
                </div>
                <div className={style.content}>

                    <div className={style.pages}>
                        <div className={location.pathname === HomePath ? style.linkActive : null}>
                            <Link to={HomePath} className="font__paragraph"><span>
                                Home
                            </span></Link>
                        </div>
                        <div className={location.pathname === ShopPath ? style.linkActive : null}>
                            <Link to={ShopPath} className="font__paragraph">Shop</Link>
                        </div>
                        <div className={location.pathname === ContactPath ? style.linkActive : null}>
                            <Link to={ContactPath}
                                  className="font__paragraph">Contact</Link>
                        </div>
                    </div>

                    <div className={style.icons}>
                        <Link to={CartPath}>
                            <div
                                className={`${style.iconCart}`}>
                                {
                                    cart.data.total_quantity > 0
                                    &&
                                    <span>
                                        <span>{cart.data.total_quantity}</span>
                                    </span>
                                }

                                <CartSVG/>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default HeaderComponent