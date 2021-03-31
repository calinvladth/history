import React from 'react'
import style from './index.module.sass'

const ProductPageBottomInfoAdditionalInfo = ({data}) => {
    return (
        <div className={style.box}>
            {
                data.map(o => <div className={style.boxOption} key={o.id}>
                    <p className="f-16 uppercase">{o.name} - <span>{o.value}</span></p>
                </div>)
            }
        </div>
    )
}

export default ProductPageBottomInfoAdditionalInfo