import React from "react";
import style from './index.module.sass'
import Rating from "../../../../../components/rating";
import PRODUCTPNG from '../../../../../assets/images/product.png'

const OrderReviewPageProduct = () => {
    return (
        <div className={style.box}>
            <div>
                <div className={style.image}>
                    <img src={PRODUCTPNG} alt=""/>
                </div>
                <div className={style.info}>
                    <h1 className="f-15 normal capitalize lts-2">Anti-aging eye cream</h1>
                    <p className="f-15 normal capitalize lts-2">Qty: <span>1</span></p>
                </div>
            </div>
            <div>
                <div className={style.rating}>
                    <h1 className="f-15 lts-2 normal">Rating:</h1>
                    <Rating rating={0} editable={true}/>
                </div>

                <div className={style.content}>
                    <h1 className="f-15 lts-2 normal">Content (optional)</h1>
                    <div className="input-box">
                        <textarea className={style.contentTextarea}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderReviewPageProduct