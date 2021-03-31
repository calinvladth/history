import React from 'react'
import style from './index.module.sass'
import Rating from "../../../components/rating";
import ImageJPG from '../../../assets/images/review.jpg'
import {setBackgroundImage} from "../../../helpers/set_background_image";

const ProductPageReview = () => {
    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h3 className="f-16 normal uppercase">1 review for bath salt</h3>
            </div>

            <div className={style.grid}>
                <div style={setBackgroundImage(ImageJPG)}>
                </div>
                <div>
                    <div className={style.reviewNameAndRating}>
                        <div className={style.reviewName}>
                            <h1 className="f-25 title lts-5">Megan Johns</h1>
                        </div>
                        <div className={style.reviewRating}>
                            <Rating rating={4.3}/>
                        </div>
                    </div>

                    <div className={style.reviewDate}>
                        <p className="f-14">02.11.2019</p>
                    </div>

                    <div className={style.reviewText}>
                        <p className="f-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
                            asperiores laudantium
                            modi officiis quo reiciendis sequi, sit! Consequatur, ipsum magnam maiores ratione rerum
                            similique.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageReview