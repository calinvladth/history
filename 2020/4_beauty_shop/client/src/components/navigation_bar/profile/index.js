import React from "react";
import style from './index.module.sass'
import NavigationBarProfileGuest from "./guest";
import NavigationBarProfileUser from "./user";
import {useSelector} from "react-redux";

const NavigationBarProfile = (props) => {
    const account = useSelector(state => state.account.data)
    const {is_authenticated = false} = account

    return (
        <div className={style.box}>
            {
                is_authenticated
                    ?
                    <NavigationBarProfileUser account={account}/>
                    :
                    <NavigationBarProfileGuest/>
            }

        </div>
    )
}

export default NavigationBarProfile