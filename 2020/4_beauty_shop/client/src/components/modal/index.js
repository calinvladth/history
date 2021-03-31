import React from "react";
import style from "./index.module.sass";
import CancelSvg from "../../assets/icons/cancel_svg";
import {withRouter} from "react-router-dom";

const Modal = (props) => {
    const {children, show, history, width = 50, setShow} = props
    const size = {
        width: `${width}rem`
    }

    const closeModal = () => {
        if (setShow) {
            setShow(false)
        } else {
            history.push(props.location.pathname)
        }

    }
    if (show) {
        return (
            <div className={`${style.box} hideScrollbar`}>
                <div className={`${style.boxContent}`} style={size}>
                    <div className={style.boxClose} onClick={() => closeModal()}>
                        <CancelSvg/>
                    </div>
                    <div className={style.boxChildren}>
                        {children}
                    </div>
                </div>
            </div>
        )
    } else return null
}


export default withRouter(Modal)