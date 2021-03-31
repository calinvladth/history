import React from "react";
import style from './index.module.sass'
import HeroContactJPG from '../../../../assets/images/hero_contact.jpg'
import {setBackgroundImage} from "../../../../services/image";


const HeroComponent = () => (
    <div className={style.box} style={setBackgroundImage(HeroContactJPG)}>
        <div className={style.content}>
            <div className={style.contentTitle}>
                <h1 className="font font__title">Contact</h1>
            </div>
        </div>
    </div>
)

export default HeroComponent