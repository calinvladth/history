import React from "react";
import style from "../sign_in/index.module.sass";
import {Link, withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Forgot} from "../../../redux/account/actions";

const AccountForgot = (props) => {
    const dispatch = useDispatch()

    const submit = () => {
        dispatch(Forgot())
    }

    return (
        <div className={style.box}>

            <div className={style.boxForm}>
                <div className="input-box-group">
                    <label>Email</label>
                    <div className="input-box">
                        <input type="email"/>
                    </div>
                </div>
            </div>

            <div className={style.boxAction}>
                <button className="f-15 button buttonLong uppercase" onClick={() => submit()}>
                    send email
                </button>

                <div className={style.boxActionLink}>
                    <Link to={{pathname: props.location.pathname, search: 'account=true'}}
                          className="f-12">Sign in / Register</Link>
                </div>

            </div>
        </div>
    )
}

export default withRouter(AccountForgot)