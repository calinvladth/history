import React, {useEffect} from "react";
import style from './index.module.sass'
import CartPagePanel from "../../pannel";
import CartPageCartCheckout from "./checkout";
import CartPageCartItemsItem from "./items/item";
import {useDispatch, useSelector} from "react-redux";
import {GetCartItems} from "../../../../redux/cart/actions";

const MyCartPage = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCartItems())
    }, [cart.success])

    return (
        <div className={style.box}>
            <div className="row">
                <div className={`col-7 ${style.boxCart}`}>
                    <CartPagePanel name="Shopping bag">
                        <div className={style.boxCartItems}>
                            {
                                cart.data.length > 0
                                    ?
                                    cart.data.map(o => {
                                        return <CartPageCartItemsItem key={o.id} data={o}/>
                                    })
                                    :
                                    <p>{cart.success ? 'No items in the cart' : 'Loading ...'}</p>
                            }
                        </div>
                    </CartPagePanel>
                </div>
                <div className="col-5">
                    <CartPagePanel name="Checkout"><CartPageCartCheckout/></CartPagePanel>
                </div>
            </div>
        </div>
    )
}

export default MyCartPage