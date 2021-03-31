import React from 'react'
import style from "./index.module.sass";


const ProductPrice = (props) => {
    const {data} = props
    if (data.flag === 'sale') {
        return (
            <div className={`${style.box} ${style.boxSale}`}>
                <p className="f-15">$ {data.base_price}</p>
                <p className="f-15">$ {data.old_price}</p>
            </div>
        )

    } else {
        return (
            <div className={style.box}>
                <p className="f-15">$ {data.base_price}</p>
            </div>
        )
    }


}

export default ProductPrice