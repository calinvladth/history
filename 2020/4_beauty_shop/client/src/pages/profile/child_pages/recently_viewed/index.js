import React from "react";
import style from './index.module.sass'
import RecentlyViewedPageProducts from "./products";

const RecentlyViewedPage = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-22 lts-3 normal">Recently viewed</h1>
            </div>

            <div className={style.boxProducts}>
                <RecentlyViewedPageProducts/>
            </div>
        </div>
    )
}

export default RecentlyViewedPage