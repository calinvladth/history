import React from 'react'
import style from './index.module.sass'
import ProductComponent from "../../../../components/product";

const ProductsShopComponent = ({data}) => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                {
                    data.data.map(o => <ProductComponent key={o.id} product={o}/>)
                }
            </div>
        </div>
    )
}

export default ProductsShopComponent