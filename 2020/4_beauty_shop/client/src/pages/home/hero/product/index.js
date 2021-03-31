import React from "react";
import style from './index.module.sass'
import ImagePNG from "../../../../assets/images/heroarea.png";

const HomePageHeroProduct = () => {
    return (
        <div className={style.box}>
            <img src={ImagePNG} alt=""/>
        </div>
    )
}

export default HomePageHeroProduct