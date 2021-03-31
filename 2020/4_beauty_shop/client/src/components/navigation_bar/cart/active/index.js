import React from "react";
import style from "./index.module.sass";
import NavigationBarCartActiveTotal from "./total";
import NavigationBarCartActiveActions from "./actions";
import ProductCartItemNavigation from "../../../product_cart_item_navigation";

const NavigationBarCartActive = ({cart}) => {

    return (
        <div className={style.box}>

            <div className={`${style.boxItems} hideScrollbar`}>
                {
                    cart.data.map(o => <ProductCartItemNavigation key={o.id} data={o}/>)
                }

            </div>

            <div className={style.boxTotal}>
                <NavigationBarCartActiveTotal/>
            </div>

            <div className={style.boxActions}>
                <NavigationBarCartActiveActions/>
            </div>
        </div>
    )
}

export default NavigationBarCartActive