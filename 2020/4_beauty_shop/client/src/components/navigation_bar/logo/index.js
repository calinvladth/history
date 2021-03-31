import React from "react";
import style from './index.module.sass'
import LOGOPNG from "../../../assets/logo.png";
import {HomeRoute} from "../../../pages/home/router";
import {withRouter} from "react-router-dom";

const NavigationBarLogo = (props) => {
    return (
        <div className={style.logo} onClick={() => props.history.push(HomeRoute.path)}>
            <img src={LOGOPNG} alt=""/>
        </div>
    )
}

export default withRouter(NavigationBarLogo)