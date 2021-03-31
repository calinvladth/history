import React from "react";
import style from './index.module.sass'
import {useSelector} from "react-redux"

const AlertManager = () => {

    const alerts = useSelector(state => state.alerts)
    const {show, success, message} = alerts
    const color = success ? 'green' : 'red'

    if (show) {
        return (
            <div className="boxContent">
                <div className={style.box} style={{backgroundColor: color}}>
                    <h1 className="f-15 normal uppercase">{message}</h1>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default AlertManager