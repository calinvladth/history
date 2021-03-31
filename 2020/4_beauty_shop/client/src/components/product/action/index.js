import React from 'react'
import style from './index.module.sass'
import {ProductRoute} from "../../../pages/product/router";
import {Link} from "react-router-dom";

const ProductAction = ({id}) => {
    return (
        <div className={style.box}>
            <Link to={`${ProductRoute.link}/${id}/`}>
                <button className="button buttonLong">
                    View Product
                </button>
            </Link>
        </div>
    )
}

export default ProductAction