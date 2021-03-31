import React from "react";
import style from './index.module.sass'
import HeartSvg from "../../../../../../assets/icons/heart";
import IMAGEPNG from '../../../../../../assets/images/product.png'
import QuantityComponent from "../../../../../../components/quantity";
import {api} from "../../../../../../config";
import {useDispatch} from "react-redux";
import {RemoveCartItem} from "../../../../../../redux/cart/actions";

const CartPageCartItemsItem = ({data}) => {

    const {product} = data
    const dispatch = useDispatch()
    return (
        <div className={style.box}>

            <div className="row">

                <div className={`col-3 ${style.boxImage}`}>
                    <div>
                        <img src={`${api}${product.images[0].path}`} alt=""/>
                    </div>
                </div>

                <div className={`col-7 ${style.boxInfo}`}>
                    <div className={style.boxNamePrice}>
                        <span className="f-18">$ {product.price_info.base_price}</span>
                        <h1 className="f-14 capitalize lts-2">{product.name}</h1>
                    </div>

                    <div className={style.boxActions}>
                        <div className={style.boxWishlist}>
                            <span><HeartSvg/></span>
                            <p className="f-15 lts-2">Save for later</p>
                        </div>
                        <div className={style.boxDelete} onClick={() => dispatch(RemoveCartItem(data.id))}>
                            <p className="f-15 lts-2">Delete</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${style.boxEdit}`}>
                    <div>
                        <QuantityComponent size={3}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartPageCartItemsItem