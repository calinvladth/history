import React from "react";
import style from './index.module.sass'
import ProductComponent from "../../../../components/product";

const HomePageBestsellersProducts = () => {
    return (
        <div className={style.box}>

            <div>
                <ProductComponent background={false} rating={false}/>
            </div>
            <div>
                <ProductComponent background={false} rating={false}/>
            </div>
            <div>
                <ProductComponent background={false} rating={false}/>
            </div>

        </div>
    )
}

export default HomePageBestsellersProducts