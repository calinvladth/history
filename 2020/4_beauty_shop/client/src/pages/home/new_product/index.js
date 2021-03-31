import React from "react";
import style from './index.module.sass'
import HomePageNewProductProduct from "./product";

const HomePageNewProduct = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-35 title">New Product</h1>
            </div>

            <div className={style.boxProduct}>
                <HomePageNewProductProduct/>
            </div>
        </div>
    )
}


export default HomePageNewProduct