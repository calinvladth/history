import React from "react";
import style from "../register/index.module.sass";
import ViewSvg from "../../../assets/icons/view_svg";

const AccountPageReset = () => {
    return (
        <div className={style.box}>

            <div className={style.boxForm}>

                <div className="input-box-group">
                    <label>Password</label>
                    <div className="input-box">
                        <input type="password" id="password1"/>
                        <span className="pointer"
                              onMouseEnter={() => document.getElementById('password1').type = 'text'}
                              onMouseLeave={() => document.getElementById('password1').type = 'password'}>
                            <ViewSvg/>
                        </span>
                    </div>
                </div>

                <div className="input-box-group">
                    <label>Confirm Password</label>
                    <div className="input-box">
                        <input type="password" id="password2"/>
                        <span className="pointer"
                              onMouseEnter={() => document.getElementById('password2').type = 'text'}
                              onMouseLeave={() => document.getElementById('password2').type = 'password'}>
                            <ViewSvg/>
                        </span>
                    </div>
                </div>

            </div>

            <div className={style.boxAction}>
                <button className="f-15 button buttonLong uppercase">
                    reset password
                </button>
            </div>
        </div>
    )
}

export default AccountPageReset