import React from "react";
import style from './index.module.sass'
import PRODUCTPNG from '../../../../../../assets/images/new_product.png'

const OrderDetailedPageRowItem = () => {
    return (
        <div className={style.box}>
            <div className={style.boxDetail}>
                <div className={style.boxImage}>
                    <img src={PRODUCTPNG} alt=""/>
                </div>
                <div className={style.boxInfo}>
                    <p className="f-13 lts-2">Skin cleanser</p>
                    <p className="f-13 lts-2">Quantity: <span>1</span></p>
                </div>
            </div>
            <div>
                <p className="f-14 lts-2"><span>$ </span>62.99</p>
            </div>
        </div>
    )
}

export default OrderDetailedPageRowItem