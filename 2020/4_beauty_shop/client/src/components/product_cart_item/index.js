import React from "react";
import style from './index.module.sass'
import PRODUCTPNG from '../../assets/images/product_2.png'

const ProductCartItem = () => {
    return (
        <div className={style.box}>
            <div>
                <img src={PRODUCTPNG} alt=""/>
            </div>
            <div>
                <p className="f-14">Skin Cleaner</p>
                <p className="f-14">Quantity: 1</p>
            </div>
            <div>
                <p>$ 25.00</p>
            </div>
        </div>
    )
}

export default ProductCartItem