import React from "react";
import style from './index.module.sass'
import Modal from "../modal";

const RemoveAlert = (props) => {
    const {show, setShow, indicator = 'this item', deleteAction} = props
    return (
        <div>
            <Modal show={show} setShow={setShow}>
                <div className={style.boxTitle}>
                    <h1 className="f-15 lts-2 normal"> Are you sure you want to delete {indicator}?</h1>
                </div>
                <div className={style.boxActions}>
                    <div onClick={() => setShow(false)}>
                        <button className="button buttonEmpty buttonLong uppercase f-15 lts-2">no</button>
                    </div>
                    <div onClick={() => deleteAction()}>
                        <button className="button buttonOrange buttonLong uppercase f-15 lts-2">yes</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default RemoveAlert