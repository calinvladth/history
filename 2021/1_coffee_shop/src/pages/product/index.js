import React, {useEffect} from 'react'
import style from './layout.module.sass'
import ProductViewProductComponent from "./components/product_view";
import RelatedProductsComponent from "./components/related_products";
import TabsProductComponent from "./components/tabs";
import {useDispatch, useSelector} from "react-redux";
import {ClearProductState, GetProductByPk} from "../../redux/product";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const {id} = useParams()


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(GetProductByPk(id))

        return function cleanup() {
            dispatch(ClearProductState())
        }

    }, [id, dispatch])


    if (product.success) {
        return (
            <div className={style.box}>
                <div className={style.boxContent}>

                    <div className={style.product}>
                        <ProductViewProductComponent/>
                    </div>

                    <div className={style.tabs}>
                        <TabsProductComponent/>
                    </div>

                    <div className={style.relatedProducts}>
                        <div className={style.relatedProductsTitle}>
                            <h1 className="font font__subtitle font__subtitle--big">Related
                                Products</h1>
                        </div>
                        <div className={style.relatedProductsContent}>
                            <RelatedProductsComponent/>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return <p>Loading ...</p>
    }
}

export default ProductPage