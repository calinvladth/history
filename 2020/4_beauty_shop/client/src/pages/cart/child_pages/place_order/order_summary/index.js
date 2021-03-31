import React, {useState} from "react";
import CartPagePanel from "../../../pannel";
import style from "./index.module.sass";
import Dropdown from "../../../../../components/dropdown";

const options = [
    {id: 1, name: 'Standard shipping', price: '3.00'},
    {id: 2, name: 'Express shipping', price: '9.50'},
]

const PlaceOrderPageOrderSummary = () => {
    const [shipping, setShipping] = useState(options[0])
    return (
        <CartPagePanel name="order summary">
            <div className={style.box}>
                <div className={style.boxSummary}>
                    <div className={style.boxRow}>
                        <p>Subtotal:</p>
                        <p>$ 25.00</p>
                    </div>
                    <div className={style.boxRow}>
                        <p>Shipping:</p>
                        <p>$ {shipping.price}</p>
                    </div>
                    <div className={style.boxRow}>
                        <div className={style.boxDropdown}>
                            <Dropdown options={options} selected={shipping} setSelected={setShipping}/>
                        </div>
                    </div>
                </div>

                <div className={style.boxTotal}>
                    <div className={style.boxRow}>
                        <p className="uppercase">Total:</p>
                        <p>$ 28.00</p>
                    </div>
                </div>

                <div className={style.boxActions}>
                    <button className="button uppercase buttonEmpty buttonLong">Place your order</button>
                </div>

            </div>
        </CartPagePanel>
    )
}

export default PlaceOrderPageOrderSummary