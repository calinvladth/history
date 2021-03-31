import React from 'react'
import style from './index.module.sass'
import ProductPNG from '../../../assets/images/product.png'
import {api} from "../../../config";

const ProductPageImages = ({data}) => {
    return (
        <div className={style.box}>
            <div>
                <div className={`${style.boxImage} hideScrollbar`}>
                    {
                        data.map(o => <div key={o.id}>
                            <img src={`${api}${o.path}/`} alt=""/>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <div className={style.boxCurrentImage}>
                    <div>
                        <img src={`${api}${data[0].path}/`} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageImages