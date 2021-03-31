import React from "react";
import CartPagePanel from "../../../pannel";
import style from "./index.module.sass";
import {Link} from "react-router-dom";
import {CartRoute} from "../../../router";
import ProductCartItem from "../../../../../components/product_cart_item";

const PlaceOrderPageCart = () => {
    return (
        <CartPagePanel name="cart">
            <div className={style.box}>
                <div className={style.boxInfo}>
                    <p className="f-14">1 item in your cart</p>
                    <Link className={`f-14 pointer ${style.boxLink}`} to={CartRoute.path}>Edit</Link>
                </div>

                <div className={style.boxProducts}>
                    <div>
                        <ProductCartItem/>
                    </div>

                    <div>
                        <ProductCartItem/>
                    </div>

                    <div>
                        <ProductCartItem/>
                    </div>
                </div>
            </div>
        </CartPagePanel>
    )
}

export default PlaceOrderPageCart