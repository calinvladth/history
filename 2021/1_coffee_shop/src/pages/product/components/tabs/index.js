import DescriptionProductComponent from "../description";
import React from "react";
import style from './index.module.sass'

const TabsProductComponent = () => {
    return (
            <div className={style.box}>
                <div className={style.titlebox}>
                    <div
                        className={[style.titleboxTitle, style.titleboxTitleActive].join(' ')}>
                        <h1 className="font font__subtitle">Description</h1>
                    </div>
                </div>
                <div className={style.component}>

                    <DescriptionProductComponent/>

                </div>
            </div>
        );
}

export default TabsProductComponent