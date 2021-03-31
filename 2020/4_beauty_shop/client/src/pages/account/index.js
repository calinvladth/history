import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {withRouter} from "react-router-dom";
import ModalPage from "../../components/modal";
import AccountLogin from "./sign_in";
import AccountRegister from "./register";
import AccountPageTop from "./top";
import AccountPageOptions from "./options";
import AccountPageComponent from "./component";
import AccountForgot from "./forgot";
import AccountPageReset from "./reset";
import {useSelector} from "react-redux";

const AccountPage = (props) => {
    let params = new URLSearchParams(props.location.search)
    let account = params.get('account')
    let forgot = params.get('forgot')
    let reset = params.get('reset')

    let options = []

    if (account === 'true') {
        options = [
            {
                name: 'Sign in',
                component: <AccountLogin/>
            },
            {
                name: 'Create an account', component: <AccountRegister/>
            }
        ]
    }

    if (forgot === 'true') {
        options = [
            {
                name: 'Recover password',
                component: <AccountForgot/>
            }
        ]
    }

    if (reset === 'true') {
        options = [
            {
                name: 'Reset Password',
                component: <AccountPageReset/>
            }
        ]
    }

    const [currentOption, setCurrentOption] = useState({name: '', component: false})

    useEffect(() => {
        let updateState = true

        if (currentOption) {
            options.forEach(option => {
                if (currentOption.name === option.name) {
                    updateState = false
                }
            })
        }

        if (updateState) {
            setCurrentOption(options[0])
        }
    }, [options, currentOption])


    if (account === 'true') {
        if (currentOption) {
            return (
                <ModalPage show={true}>
                    <div className={style.box}>
                        <AccountPageTop/>

                        <AccountPageOptions options={options} currentOption={currentOption}
                                            setCurrentOption={setCurrentOption}/>

                        <AccountPageComponent>
                            {currentOption.component}
                        </AccountPageComponent>

                    </div>
                </ModalPage>
            )
        } else return <p className="f-14 lts-2">Loading ...</p>
    } else {
        return null
    }
}

export default withRouter(AccountPage)