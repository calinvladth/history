import React from 'react'
import style from './index.module.sass'
import HomePageAboutComponent from "./about";
import HomePageBestsellers from "./bestsellers";
import HomePageNewProduct from "./new_product";
import HomePageHero from "./hero";


const HomePage = () => (
    <div className={style.box}>
        <section className="box">
            <div className="boxContent">
                <HomePageHero/>
            </div>
        </section>
        <section className="box">
            <div className="boxContent">
                <HomePageAboutComponent/>
            </div>
        </section>
        <section className="box">
            <div className="boxContent">
                <HomePageBestsellers/>
            </div>
        </section>
        <section className="box">
            <div className="boxContent">
                <HomePageNewProduct/>
            </div>
        </section>
    </div>
)


export default HomePage