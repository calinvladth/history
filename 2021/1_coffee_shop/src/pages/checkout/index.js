import React from "react";
import style from './layout.module.sass'
import CheckoutSectionComponent from "./components/checkout_section";
import {useSelector} from "react-redux";
import PaymentComponent from "./components/payment";
import {Elements} from "@stripe/react-stripe-js";
import EmptyComponent from "./components/empty";
import {loadStripe} from "@stripe/stripe-js";


const CheckoutPage = () => {
    const cart = useSelector(state => state.cart)
    const config = useSelector(state => state.config)

    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <section>
                    <div className={style.checkoutTitle}>
                        <h1 className="font font__title">Checkout</h1>
                    </div>
                </section>

                {
                    cart.success && cart.data.products.length && config.loaded> 0 &&
                    <div>
                        <section>
                            <CheckoutSectionComponent/>
                        </section>

                        <section>
                            <Elements stripe={loadStripe(config.data.payment.stripe_public)}>
                                <PaymentComponent price={cart.data.total_price}/>
                            </Elements>
                        </section>
                    </div>
                }

                {
                    cart.success && cart.data.products.length < 1 && <EmptyComponent/>
                }


            </div>
        </div>
    )
}

export default CheckoutPage