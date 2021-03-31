import React from "react";
import style from './index.module.sass'

const HomePageHeroTitle = () => {
    return (
        <div className={style.box}>
            <h1 className="f-26 normal"><span>&middot;</span>You <span
                className="title skin_dark">deserve</span></h1>
            <h1 className="f-26 normal">To feel like a <span
                className="title skin_dark">goddess</span> <span>&middot;</span></h1>
        </div>
    )
}

export default HomePageHeroTitle
