import React from 'react'
import style from './index.module.sass'
import StarRatingComponent from 'react-star-rating-component';
import Profile1JPG from '../../../../assets/images/profile_1.jpg'
import Profile2JPG from '../../../../assets/images/profile_2.jpg'
import Profile3JPG from '../../../../assets/images/profile_3.jpg'
import {setBackgroundImage} from "../../../../services/image";

const data = [
    {
        id: 1,
        image: Profile1JPG,
        rating: 3,
        name: 'Marcus bent',
        created_at: '02.11.2019',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis cumque\n' +
            '                                exercitationem impedit ipsum, iusto magnam modi, neque nihil non quam quidem ratione\n' +
            '                                reiciendis repudiandae?'
    },
    {
        id: 2,
        image: Profile2JPG,
        rating: 1,
        name: 'Dick Michael',
        created_at: '01.11.2019',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis cumque\n' +
            '                                exercitationem impedit ipsum, iusto magnam modi, neque nihil non quam quidem ratione\n' +
            '                                reiciendis repudiandae?'
    },
    {
        id: 3,
        image: Profile3JPG,
        rating: 4,
        name: 'Milena Purr',
        created_at: '03.12.2019',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis cumque\n' +
            '                                exercitationem impedit ipsum, iusto magnam modi, neque nihil non quam quidem ratione\n' +
            '                                reiciendis repudiandae?'
    }
]

const product_data = {
    id: 1,
    name: 'Columbiana coffee'
}

class ReviewsProductComponent extends React.Component {
    state = {}

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true,
                reviews: data,
                total_reviews: data.length,
                product: product_data
            })
        }, 1000)

    }


    render() {
        if (this.state.loaded) {
            const {reviews, total_reviews, product} = this.state
            return (
                <div className={style.box}>
                    <div className={style.reviewsNumber}>
                        <p className="paragraph paragraph--uppercaseRegular">{total_reviews} {total_reviews > 1 ? 'reviews' : 'review'} for {product.name}</p>
                    </div>

                    {
                        reviews.map(o => <div key={o.id} className={style.review}>
                            {/*Left box*/}
                            <div className={style.reviewContent}>
                                <div className={style.avatar} style={setBackgroundImage(o.image)}>
                                </div>
                            </div>
                            {/*Right box*/}
                            <div className={style.reviewContent}>
                                <div className={style.stars}>
                                    <StarRatingComponent
                                        name="review"
                                        editing={false}
                                        starCount={4}
                                        value={o.rating}
                                    />
                                </div>
                                <div className={style.name}>
                                    <h3 className="title title--regular title--smallSpace">{o.name}</h3>
                                </div>
                                <div className={style.date}>
                                    <p className="paragraph">{o.created_at}</p>
                                </div>
                                <div className={style.message}>
                                    <p className="paragraph">{o.review}</p>
                                </div>
                            </div>

                        </div>)
                    }


                    {/*Create Review Form*/}
                    <div className={style.reviewForm}>
                        <div className={style.reviewFormDetails}>
                            <p className="paragraph">Add a review</p>
                            <p className="paragraph">Your Email address will not be published. Required fields are
                                marked <span>*</span></p>
                        </div>

                        <form className={style.reviewForm}>
                            <div className={style.reviewFormStarting}>
                                <label className="paragraph">Your rating</label>
                                <StarRatingComponent
                                    name="review"
                                    editing={true}
                                    starCount={4}
                                />
                            </div>

                            <div className={style.reviewFormTextarea}>
                                <label className="paragraph">Your review</label>
                                <textarea className="textarea"></textarea>
                            </div>

                            <div
                                className={[style.reviewFormInput, style.reviewFormInputPadding].join(' ')}>
                                <label>Name *</label>
                                <input className="input" type="text" required={true}/>
                            </div>

                            <div className={style.reviewFormInput}>
                                <label>Email *</label>
                                <input className="input" type="email" required={true}/>
                            </div>

                            <div className={style.reviewFormButton}>
                                <button className="button button--full button--uppercase" type="submit">Submit</button>
                            </div>

                        </form>

                    </div>

                </div>
            )
        } else {
            return (
                <div className={style.box}>
                    <p className="paragraph">Loading...</p>
                </div>
            )
        }
    }
}

export default ReviewsProductComponent