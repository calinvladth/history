import React from 'react'
import style from './index.module.sass'
import HeroPNG from '../../../../assets/images/hero.jpg'
import data from './data.json'
import {setBackgroundImage} from "../../../../services/image";
import {ShopPath} from "../../../shop/path";
import {Link} from "react-router-dom";

const HeroComponent = () => {
    return (
        <div className={style.box} style={setBackgroundImage(HeroPNG)}>
            <div className={style.boxContent}>
                <div className={style.detail}>
                    {/*Title*/}
                    <div className={style.detailTitle}>
                        <h1 className="font font__title">
                            {data.title}
                        </h1>
                    </div>

                    <div className={style.detailText}>
                        {/*Subtitle*/}
                        <div className={style.detailSubtitle}>
                            <h3 className="font font__subtitle">{data.subtitle}</h3>
                        </div>

                        {/*Description*/}
                        <div className={style.detailParagraph}>
                            <p className="font__paragraph">{data.text}</p>
                        </div>
                    </div>

                    {/*Actions*/}
                    <div className={style.detailAction}>
                        <Link to={ShopPath}>
                            <button className="button button--full">{data.action.name}</button>
                        </Link>
                    </div>
                </div>
                {/*Social*/}
                <div className={style.social}>
                    <div className={style.socialBox}>
                        {
                            data.social.map(o => <div key={o.name} className={style.socialBoxIcon}>
                                <span>{o.name_short}</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent