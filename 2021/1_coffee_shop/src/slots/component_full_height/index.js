import React from 'react'
import style from './index.module.sass'

const ComponentFullHeightSlot = ({children}) => (
    <div className={style.box}>
        {children}
    </div>
)

export default ComponentFullHeightSlot