import React from 'react'
import './index.sass'

const ComponentSlot = ({children, background, id}) => (
    <div className="componentSlot" style={{backgroundColor: background}} id={id}>
        <div className="componentSlot__container">
            {children}
        </div>
    </div>
)

export default ComponentSlot