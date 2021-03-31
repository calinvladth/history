import React from 'react'
import style from "./index.module.sass";

const ProductBanner = (props) => {
    const {flag} = props
    if (flag === 'sale' || flag === 'new') {
        return (
            <div className={style.box}>
                <span className="f-14 uppercase">{flag}</span>
            </div>
        )
    } else {
        return null
    }


}

export default ProductBanner