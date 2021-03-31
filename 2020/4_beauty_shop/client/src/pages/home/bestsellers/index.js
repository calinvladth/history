import React from "react";
import style from './index.module.sass'
import HomePageBestsellersProducts from "./products";

const HomePageBestsellers = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-35 title">Best sellers</h1>
            </div>

            <div className={style.boxProducts}>
                <HomePageBestsellersProducts/>
            </div>
        </div>
    )
}

export default HomePageBestsellers