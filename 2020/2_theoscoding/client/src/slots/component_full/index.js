import React from 'react'
import './index.sass'

const ComponentFullSlot = ({children, id}) => (
    <div className="ComponentFullSlot" id={id}>
        {children}
    </div>
)

export default ComponentFullSlot