import React from "react";
import style from "./index.module.sass";
import LOGOPNG from "../../../assets/logo.png";

const AccountPageTop = () => {
    return (
        <div className={style.box}>
            <div>
                <img src={LOGOPNG} alt=""/>
            </div>
        </div>
    )
}

export default AccountPageTop