import React from 'react'
import style from './index.module.sass'
import Rating from "../../../components/rating";
import QuantityComponent from "../../../components/quantity";
import HeartSvg from "../../../assets/icons/heart";
import {useDispatch} from "react-redux";
import {PostCartItem} from "../../../redux/cart/actions";

const ProductPageTopInfo = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-25 lts-5 normal capitalize">{product.name}</h1>
            </div>

            <div className={style.boxPrice}>
                <p className="f-22">$ {product.price_info.base_price}</p>
            </div>

            <div className={style.boxRating}>
                <Rating rating={4} editable={false}/>
                <p>(1 customer review)</p>
            </div>

            <div className={style.boxShortDescription}>
                <p className="f-16">{product.description_short}</p>
            </div>

            <div className={style.boxAction}>
                <div>
                    <QuantityComponent/>
                </div>
                <div>
                    <button onClick={() => dispatch(PostCartItem(product.id))} className="button f-16 uppercase">Add to
                        cart
                    </button>
                </div>
            </div>
            <div className={style.boxWishlist}>
                <div>
                    <HeartSvg/>
                </div>
                <div>
                    <h3 className="f-25 title">Add to wishlist</h3>
                </div>
            </div>

            <div className={style.boxInfo}>
                <p className="f-16 uppercase">SKU: 205</p>
                <p className="f-16 uppercase">Category: Bath products</p>
            </div>
        </div>
    )
}

export default ProductPageTopInfo