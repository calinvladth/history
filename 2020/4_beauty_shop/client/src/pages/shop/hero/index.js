import React from 'react'
import style from './index.module.sass'
import ImageJPG from '../../../assets/images/heroarea_shop.jpg'
import {setBackgroundImage} from "../../../helpers/set_background_image";
import ShopPageHeroTitle from "./title";


const ShopPageHero = () => {
    return (
        <div className={style.box} style={setBackgroundImage(ImageJPG)}>
            <div className="boxContent">

                <div className={style.grid}>

                    <div>
                        <ShopPageHeroTitle/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShopPageHero