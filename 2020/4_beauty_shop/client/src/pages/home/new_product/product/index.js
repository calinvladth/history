import React from "react";
import style from './index.module.sass'
import HomePageNewProductInfo from "../info";
import ImagePNG from "../../../../assets/images/new_product.png";

const HomePageNewProductProduct = () => {
    return (
        <div className={style.box}>
            <div>
                <HomePageNewProductInfo
                    title={'Cruelty free'}/>
            </div>
            <div>
                <HomePageNewProductInfo
                    title={'Made with baby\s breath extract'}
                    variant={1}/>
            </div>
            <div>
                <HomePageNewProductInfo
                    title={'For sensitive skin'}
                    variant={2}
                    right={true}/>
            </div>
            <div>
                <button className="button buttonLong uppercase f-15">
                    explore our catalog
                </button>
            </div>

            <div>
                <img src={ImagePNG} alt=""/>
            </div>
        </div>
    )
}

export default HomePageNewProductProduct