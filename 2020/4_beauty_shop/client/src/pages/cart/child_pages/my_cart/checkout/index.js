import React from "react";
import style from './index.module.sass'

const CartPageCartCheckout = () => {
    return (
        <div className={style.box}>
            <div className={style.boxSummary}>
                <div className={style.boxRow}>
                    <p className="f-15 lts-2">Subtotal:</p><p className="f-15 lts-2">$
                    25.00</p></div>
                <div className={style.boxRow}>
                    <p className="f-15 lts-2">Shipping:</p><p className="f-15 lts-2">$
                    3.00</p></div>
            </div>

            <div className={style.boxTotal}>
                <div className={style.boxRow}>
                    <p className="f-15 lts-2 uppercase">Total:</p><p className="f-15 lts-2">$ 28.00</p>
                </div>
            </div>

            <div className={style.boxActions}>
                <button className="button uppercase f-14 buttonLong">customer checkout</button>
                <p className="f-14">or</p>
                <button className="button uppercase f-14 buttonEmpty buttonLong">guest checkout</button>
            </div>

        </div>
    )
}

export default CartPageCartCheckout