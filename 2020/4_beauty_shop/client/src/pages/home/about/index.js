import React from 'react'
import style from './index.module.sass'
import HomePageAboutDescription from "./description";
import HomePageAboutImage from "./image";

const HomePageAbout = () => {
    return (
        <div className={style.box}>

            <div className={style.grid}>
                <div>
                    <HomePageAboutImage/>
                </div>
                <div>
                    <HomePageAboutDescription/>
                </div>

            </div>
        </div>
    )
}

export default HomePageAbout