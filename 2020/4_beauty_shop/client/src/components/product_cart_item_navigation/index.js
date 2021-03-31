import React from "react";
import style from './index.module.sass'
import {api} from "../../config";

const ProductCartItemNavigation = ({data}) => {
    const {product} = data

    return (
        <div className={style.box}>
            <div>
                <img src={`${api}${product.images[0].path}`} alt=""/>
            </div>
            <div>
                <div>
                    <p className="f-13">{product.name}</p>
                    <p className="f-13">Quantity: 1</p>
                </div>
                <p>$ {product.price_info.base_price}</p>
            </div>
        </div>
    )
}

export default ProductCartItemNavigation