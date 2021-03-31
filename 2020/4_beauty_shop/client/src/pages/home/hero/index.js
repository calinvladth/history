import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../helpers/set_background_image";
import HeroBackground from "../../../assets/images/hero_background.jpg"
import HomePageHeroTitle from "./title";
import HomePageHeroActions from "./actions";
import HomePageHeroProduct from "./product";

const HomePageHero = () => {
    return (
        <div className={style.box}>

            <div className={style.grid}>
                <div>
                    <div className={style.boxTitle}>
                        <HomePageHeroTitle/>
                    </div>
                    <div className={style.boxActions}>
                        <HomePageHeroActions/>
                    </div>
                    <div className={style.boxProduct}>
                        <HomePageHeroProduct/>
                    </div>
                </div>

                <div>
                    <div className={style.boxImage} style={setBackgroundImage(HeroBackground)}>
                    </div>
                    <div className={style.boxLine}></div>
                </div>
            </div>

        </div>
    )
}

export default HomePageHero