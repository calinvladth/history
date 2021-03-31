import React from "react";
import style from './index.module.sass'
import ChangePasswordPageForm from "./form";

const ChangePasswordPage = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-18 uppercase normal">Change password</h1>
            </div>

            <div className={style.boxForm}>
                <ChangePasswordPageForm/>
            </div>

        </div>
    )
}

export default ChangePasswordPage