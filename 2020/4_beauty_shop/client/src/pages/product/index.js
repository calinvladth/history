import React, {useEffect} from "react";
import style from './index.module.sass'
import ProductPageImages from "./images";
import ProductPageTopInfo from "./top_info";
import ProductPageBottomInfo from "./bottom_info";
import ProductPageRelatedProducts from "./related_products";
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router";
import {GetProductById} from "../../redux/product/actions";

const ProductPage = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    const match = useRouteMatch()
    const id = match.params.id

    useEffect(() => {
        dispatch(GetProductById(id))
    }, [product.success])

    if (product.success) {
        return (
            <div className="boxContent">
                <div className={style.box}>

                    <section className={style.boxTop}>
                        <div>
                            <ProductPageImages data={product.data.images}/>
                        </div>
                        <div>
                            <ProductPageTopInfo
                                product={product.data}
                            />
                        </div>
                    </section>

                    <section>
                        <ProductPageBottomInfo product={product.data}/>
                    </section>

                    <section>
                        <ProductPageRelatedProducts/>
                    </section>
                </div>
            </div>
        )
    } else {
        return <div className="boxContent"><p>Loading ...</p></div>
    }


}


export default ProductPage