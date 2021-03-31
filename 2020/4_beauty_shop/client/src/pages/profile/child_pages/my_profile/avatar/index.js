import React from "react";
import style from './index.module.sass'
import PLACEHOLDERIMAGE from "../../../../../assets/images/add-user.png";

const MyProfileAvatar = () => {
    return (
        <div className={style.box}>
            <span className="f-10 uppercase">add photo</span>
                <img src={PLACEHOLDERIMAGE} alt=""/>
        </div>
    )
}

export default MyProfileAvatar