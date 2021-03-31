import React from "react";
import style from './index.module.sass'

const HomePageAboutDescription = () => {
    return (
        <div className={style.box}>
            <div className={` ${style.boxTitle}`}>
                <h1 className="f-35 title">About us</h1>
            </div>
            <div>
                <p className="f-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                    deleniti enim facere
                    quis. Aspernatur dolor eaque eveniet fuga inventore, magnam reiciendis. Adipisci
                    culpa in ipsam laborum quasi similique temporibus vel voluptas voluptate voluptatum?
                    In non, ut.</p>
            </div>
        </div>
    )
}

export default HomePageAboutDescription