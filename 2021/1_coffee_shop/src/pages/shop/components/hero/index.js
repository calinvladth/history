import React from "react";
import style from "./index.module.sass";
import HeroContactJPG from "../../../../assets/images/shop_hero_full.jpg";
import {setBackgroundImage} from "../../../../services/image";

const HeroComponent = () => (
    <div className={style.box} style={setBackgroundImage(HeroContactJPG)}>
        <div className={style.content}>
            <div className={style.contentTitle}>
                <h1 className="font font__title">Shop</h1>
            </div>
        </div>
    </div>
)

export default HeroComponent