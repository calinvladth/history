import React from "react";
import style from './index.module.sass'

const AccountPageComponent = ({children}) => {
    return (
        <div className={style.box}>
            {children}
        </div>
    )
}

export default AccountPageComponent