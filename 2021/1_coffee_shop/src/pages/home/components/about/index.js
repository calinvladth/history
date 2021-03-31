import React from "react";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import IMAGE_1 from '../../../../assets/images/content_1.png'
import IMAGE_2 from '../../../../assets/images/content_2.png'
import {ContactPath} from "../../../contact/path";

const AboutComponent = () => (
    <div className={style.box}>


        <div className={style.content}>
            <div className={style.contentImage}>
                <img src={IMAGE_1} alt=""
                     className={style.imageLeft}/>
            </div>
            <div className={style.contentDescription}>
                <div>
                    <div
                        className={style.contentDescriptionTitleRight}>
                        <h1 className="font font__subtitle font__subtitle--big">{'Get your dream coffee'}</h1>
                    </div>
                    <div className={style.contentDescriptionText}>
                        <p className="font__paragraph">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate dicta dolorem ducimus error esse, fugit impedit inventore ipsa itaque molestias nemo nobis nostrum numquam officiis quaerat quibusdam repellendus similique sit soluta. Aspernatur dolore, est maiores pariatur quasi quibusdam sunt. Architecto autem dolorum ducimus facilis nihil, nostrum officia quasi quidem!'}</p>
                    </div>
                    <div className={style.contentDescriptionAction}>
                        <button
                            className="button button--full">{'Shop'}</button>

                    </div>
                </div>
            </div>
        </div>

        <div className={style.content}>
            <div className={style.contentDescription}>
                <div>
                    <div
                        className={style.contentDescriptionTitleLeft}>
                        <h1 className="font font__subtitle font__subtitle--big">{'Visit us at the store?'}</h1>
                    </div>
                    <div className={style.contentDescriptionText}>
                        <p className="font__paragraph">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate dicta dolorem ducimus error esse, fugit impedit inventore ipsa itaque molestias nemo nobis nostrum numquam officiis quaerat quibusdam repellendus similique sit soluta. Aspernatur dolore, est maiores pariatur quasi quibusdam sunt. Architecto autem dolorum ducimus facilis nihil, nostrum officia quasi quidem!'}</p>
                    </div>
                    <div className={style.contentDescriptionAction}>
                        <Link to={ContactPath}>
                            <button
                                className="button button--border">{'Contact'}</button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className={style.contentImage}>
                <img src={IMAGE_2} alt=""
                     className={style.imageRight}/>
            </div>
        </div>


    </div>
)

export default AboutComponent
