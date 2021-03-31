import React from "react";
import style from "./index.module.sass";

const ShopPageHeroTitle = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-22">Beauty can be simple and natural</h1>
                <h1 className="f-35 title">Explore a new world with Afrodita</h1>
            </div>
            <div className={style.boxAction}>
                <button className="button f-18">get 30% discount</button>
            </div>
        </div>
    )
}

export default ShopPageHeroTitle