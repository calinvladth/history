import React from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import ShopPreviewComponent from "./components/shop_preview";
import NewsLetterComponent from "../../components/news_letter";
import UserReviewsComponent from "../../components/user_reviews";
import AboutComponent from "./components/about";

class HomePage extends React.Component {
    render() {
        return (
            <div className={style.box}>
                <section>
                    <HeroComponent/>
                </section>

                <section className={style.boxTopAndBottom}>
                    <ShopPreviewComponent/>
                </section>

                <section>
                    <AboutComponent/>
                </section>

                <section className={style.boxTopAndBottom}>
                    <NewsLetterComponent/>
                </section>

                <section className={style.boxBottom}>
                    <UserReviewsComponent/>
                </section>
            </div>
        )
    }
}

export default HomePage