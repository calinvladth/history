import React from "react";
import {ProductPathBase} from "../../pages/product/path";
import style from "./index.module.sass";
import {api} from "../../config";
import Product1Png from "../../assets/images/product_1.png";
import {Link} from "react-router-dom";
import {OrderByIndex} from "../../services/reorder";
import {useSelector} from "react-redux";

const initialProduct = {
    id: 0,
    name: 'product name',
    images: [],
    price: 0,
    category: ''
}

const ProductComponent = ({product = initialProduct}) => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    return (
        <div>
            <Link to={`${ProductPathBase}/${product.id}/`} className={style.product}>

                <div className={style.image}>
                    {
                        product.images.length > 0 ? <img src={api + OrderByIndex(product.images)[0].path} alt=""/> :
                            <img src={Product1Png} alt=""/>
                    }

                </div>
                <div className={style.box1}>
                    <div className={style.box1Title}>
                        <h1 className="font font__subtitle">{product.name}</h1>
                    </div>


                </div>
                <div className={style.box2}>
                    <div className={style.box2Category}>
                        <p className="font__paragraph"><strong>{product.category.category.name || "Category"}</strong>
                        </p>
                    </div>
                    <div className={style.box1Price}>
                        <p className="font__paragraph">{product.price} {currency}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default ProductComponent