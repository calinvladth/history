import React from 'react'
import style from './layout.module.sass'
import ShopSectionComponent from "./components/shop_section";
import {useSelector} from "react-redux";
import HeroComponent from "./components/hero";

const ShopPage = () => {
    const products = useSelector(state => state.products)

    return (
        <div className={style.box}>
            <section>
                <HeroComponent/>
            </section>

            <section className={style.shop}>
                <ShopSectionComponent data={products}/>
            </section>
        </div>
    )
}

export default ShopPage