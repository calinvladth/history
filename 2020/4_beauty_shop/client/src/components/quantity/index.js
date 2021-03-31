import React, {useEffect, useState} from 'react'
import style from './index.module.sass'

const QuantityComponent = (props) => {
    const {size = 4} = props
    const [number, setNumber] = useState(1)

    useEffect(() => {
        if (number < 1 || !number) setNumber(1)
    }, [number, setNumber])

    const sizeStyle = {
        width: `${size}rem`,
        height: `${size}rem`
    }

    return (
        <div className={style.box}>
            <div style={sizeStyle} onClick={() => setNumber(number > 1 && number - 1)}>
                <span className="f-25">-</span>
            </div>
            <div style={sizeStyle}><input type="number" className="f-16" value={number} min={1}
                                          onChange={(e) => setNumber(parseInt(e.target.value))}/></div>
            <div style={sizeStyle} onClick={() => setNumber(number + 1)}>
                <span className="f-25">+</span>
            </div>
        </div>
    )
}

export default QuantityComponent