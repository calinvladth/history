import React from "react";
import style from './index.module.sass'
import CartPageItemsItem from "./item";

const CartPageCartItems = () => {
    return (
        <div className={style.box}>
            <div className={style.boxBanner}>
                <span className="f-14 uppercase lts-3">Items</span>
            </div>

            <div className={style.boxItems}>
                <div className={style.boxItem}>
                    <CartPageItemsItem/>
                </div>
                <div className={style.boxItem}>
                    <CartPageItemsItem/>
                </div>
                <div className={style.boxItem}>
                    <CartPageItemsItem/>
                </div>
                <div className={style.boxItem}>
                    <CartPageItemsItem/>
                </div>
                <div className={style.boxItem}>
                    <CartPageItemsItem/>
                </div>

            </div>
        </div>
    )
}

export default CartPageItems