import React from "react";
import style from './index.module.sass'

const ChangePasswordPageForm = () => {
    return (
        <form className={style.box}>

            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">Current password</label>
                </div>
                <div className="input-box">
                    <input type="password"/>
                </div>
            </div>

            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">New password</label>
                </div>
                <div className="input-box">
                    <input type="password"/>
                </div>
            </div>

            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">Retype new password</label>
                </div>
                <div className="input-box">
                    <input type="password"/>
                </div>
            </div>

            <div className={style.submit}>
                <button className="button capitalize f-14 lts-2">
                    confirm edit
                </button>
            </div>
        </form>
    )
}

export default ChangePasswordPageForm