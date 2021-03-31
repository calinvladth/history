import React from "react";
import style from '../index.module.sass'

const data = [
    'Timothy J Travis',
    '347-323-4289',
    '4843',
    'Hanover Street',
    'New York'
]

const OrderDetailedPageBottomInfoShipping = () => {
    return (
        <div className={style.boxInfo}>
            <h1 className="f-16 capitalize normal lts-2">Shipping Information</h1>
            <div>
                {
                    data.map(o => <span key={o} className="f-14 lts-2">{o}</span>)
                }
            </div>
        </div>
    )

}

export default OrderDetailedPageBottomInfoShipping