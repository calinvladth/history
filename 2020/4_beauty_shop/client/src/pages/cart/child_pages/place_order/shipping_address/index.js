import React from "react";
import style from './index.module.sass'
import CartPagePanel from "../../../pannel";

const PlaceOrderPageShippingAddress = () => {
    return (
        <CartPagePanel name="shipping address">
            <form className={style.box}>
                <div>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">First Name</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Last Name</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Email</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Address</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <textarea className={`f-15 lts-2 ${style.boxTextarea}`}/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Destination Country/Region</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">City/Town</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">State</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Postcode/ZIP</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>
                <div className={style.boxFull}>
                    <div className="label">
                        <label className="f-14 lts-2 capitalize">Phone Number</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input className="f-15 lts-2" type="text"/>
                    </div>
                </div>

                <div className={style.boxFull}>
                    <div className={style.boxAction}>
                        <button className="button buttonOrange uppercase">Save and continue</button>
                    </div>
                </div>

            </form>
        </CartPagePanel>
    )
}

export default PlaceOrderPageShippingAddress