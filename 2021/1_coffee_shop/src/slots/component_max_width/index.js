import React from 'react'
import style from './index.module.sass'

const ComponentMaxWidthSlot = ({children}) => (
    <div className={style.box}>
        <div className={style.boxContent}>
            {children}
        </div>
    </div>
)

export default ComponentMaxWidthSlot