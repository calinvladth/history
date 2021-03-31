import React from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import MessageSvg from "../../assets/icons/message";

const MessageSuccessPage = () => (
    <ConfirmationComponent icon={<MessageSvg/>}>
        <div className={style.box}>
            <h1 className="font font__subtitle font__subtitle--big">Thank you for your message</h1>
            <p className="font__paragraph">We will get back to you as soon as we can</p>
        </div>
    </ConfirmationComponent>
)

export default MessageSuccessPage