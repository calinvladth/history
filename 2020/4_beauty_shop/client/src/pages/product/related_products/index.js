import React from 'react'
import style from './index.module.sass'
import ProductComponent from "../../../components/product";

const ProductPageRelatedProducts = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-20 uppercase normal lts-5">Related products</h1>
            </div>

            <div className={style.boxProducts}>
                <div>
                    <ProductComponent/>
                </div>
                <div>
                    <ProductComponent/>
                </div>
                <div>
                    <ProductComponent/>
                </div>
            </div>
        </div>
    )
}

export default ProductPageRelatedProducts