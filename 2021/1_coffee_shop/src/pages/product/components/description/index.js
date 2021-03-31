import React from 'react'
import style from './index.module.sass'
import {useSelector} from "react-redux";


const DescriptionProductComponent = () => {
    const product = useSelector(state => state.product)

    return (
        <div className={style.box}>
            <p className="font__paragraph">{product.data.description_long}</p>
        </div>
    )
}


export default DescriptionProductComponent