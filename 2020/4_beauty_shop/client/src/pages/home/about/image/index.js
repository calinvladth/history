import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../helpers/set_background_image";
import ImageJPG from "../../../../assets/images/about.jpg";

const HomePageAboutImage = () => {
    return (
        <div className={style.box}>
            <div style={setBackgroundImage(ImageJPG)}></div>
        </div>
    )
}

export default HomePageAboutImage