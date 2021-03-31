import React, {useEffect} from 'react'
import style from './index.module.sass'


const Rating = (props) => {
    const stars = [1, 2, 3, 4, 5]
    const {editable, rating, setRating} = props // Requirements

    useEffect(() => {
        document.title = `Rating is: ${props.rating}`
    }, [editable, rating, setRating])

    const starRest = rating.toString().split('.', 2)

    return stars.map(star =>
        <span
            className={`
            f-22 ${style.star} ${star <= rating && style.starActive}
            ${parseInt(starRest[0]) + 1 === star && parseInt(starRest[1]) > 2 && style.starLast}
            `}
            key={star}
            onClick={() => {
                if (editable) setRating(star)
            }}
        >&#9733;</span>
    )


}

export default Rating

// ${star === 1 + parseInt(rating) && starRest !== 0 ? style.starLast + '-' + starRest : ''}