import React, {useState} from "react";
import style from './index.module.sass'
import {Link, withRouter} from "react-router-dom";
import ViewSvg from "../../../assets/icons/view_svg";
import {useDispatch} from "react-redux";
import {Login} from "../../../redux/account/actions";

const AccountLogin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        const data = {
            email, password
        }
        dispatch(Login(data))
    }

    return (
        <form className={style.box} onSubmit={submit}>
            <div className={style.boxForm}>
                <div className="input-box-group">
                    <label>Email</label>
                    <div className="input-box">
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="input-box-group">
                    <label>Password</label>
                    <div className="input-box">
                        <input type="password" id="password" required value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <span className="pointer"
                              onMouseEnter={() => document.getElementById('password').type = 'text'}
                              onMouseLeave={() => document.getElementById('password').type = 'password'}>
                            <ViewSvg/>
                        </span>
                    </div>
                </div>
            </div>

            <div className={style.boxAction}>
                <button type="submit" className="f-15 button buttonLong uppercase">
                    sign in
                </button>

                <div className={style.boxActionLink}>
                    <Link to={{pathname: props.location.pathname, search: 'account=true&forgot=true'}}
                          className="f-12">Forgot your password?</Link>
                </div>
            </div>
        </form>
    )
}

export default withRouter(AccountLogin)