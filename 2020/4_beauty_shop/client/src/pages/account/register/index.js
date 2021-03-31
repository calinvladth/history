import React, {useState} from "react";
import style from './index.module.sass'
import ViewSvg from "../../../assets/icons/view_svg";
import {useDispatch} from "react-redux";
import {Register} from "../../../redux/account/actions";

const AccountRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('PASSWORDS DOES NOT MATCH!')
        }
        const data = {
            email, password
        }
        dispatch(Register(data))
    }
    return (
        <form className={style.box} onSubmit={submit}>

            <div className={style.boxForm}>
                <div className="input-box-group">
                    <label>Full Name</label>
                    <div className="input-box">
                        <input type="test"/>
                    </div>
                </div>

                <div className="input-box-group">
                    <label>Email</label>
                    <div className="input-box">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
                    </div>
                </div>

                <div className="input-box-group">
                    <label>Password</label>
                    <div className="input-box">
                        <input type="password" id="password1" required={true} value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
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
                        <input type="password" id="password2" required={true} value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <span className="pointer"
                              onMouseEnter={() => document.getElementById('password2').type = 'text'}
                              onMouseLeave={() => document.getElementById('password2').type = 'password'}>
                            <ViewSvg/>
                        </span>
                    </div>
                </div>

                <div className="input-checkbox">
                    <input type="checkbox"/>
                    <label> I agree to afrodita.inc Terms and Conditions</label>
                </div>

            </div>

            <div className={style.boxAction}>
                <button type="submit" className="f-15 button buttonLong uppercase">
                    create account
                </button>
            </div>
        </form>
    )
}

export default AccountRegister