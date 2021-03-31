import React from 'react'
import style from './index.module.sass'
import Rating from "../rating";
import ProductPrice from "./price";
import ProductBanner from "./banner";
import ProductAction from "./action";
import ProductImage from "./image";
import ProductTitle from "./title";

const Product = (props) => {

    const {background = true, flag, rating = true, data} = props

    if (data) {
        return (
        <div className={style.box}>
            <ProductBanner flag={flag}/>
            <ProductImage data={data.images} background={background}/>
            <div className={style.boxInfo}>
                <ProductTitle name={data.name}/>
                <ProductPrice data={data.price_info}/>
                {
                    rating && <div className={style.boxInfoRating}>
                        <Rating rating={4.3}/>
                    </div>
                }

                <ProductAction id={data.id}/>
            </div>
        </div>
    )
    } else {
        return <p>No data available ...</p>
    }


}

export default Product