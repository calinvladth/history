import React from "react";
import style from './index.module.sass'

const ConfirmationComponent = ({icon, children}) => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div>
                <div className={style.icon}>
                    {icon}
                </div>

                <div className={style.children}>
                    {children}
                </div>
            </div>


        </div>
    </div>
)

export default ConfirmationComponent