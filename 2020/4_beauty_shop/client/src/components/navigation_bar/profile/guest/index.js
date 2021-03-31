import React from "react";
import style from "./index.module.sass";
import {withRouter} from "react-router-dom";

const NavigationBarProfileGuest = (props) => {
    return (
        <div className={style.box}>
            <div>
                <span onClick={() => {
                    props.history.push({pathname: props.history.location.pathname, search: 'account=true'})
                }} className="f-13 uppercase lts-2 pointer">Sign in/Register</span>
            </div>
        </div>
    )
}

export default withRouter(NavigationBarProfileGuest)