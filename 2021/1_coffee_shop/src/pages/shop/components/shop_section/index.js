import React from "react";
import style from "./index.module.sass";
import ProductComponent from "../../../../components/product";
import Pagination from "../../../../components/pagination";
import {useDispatch} from "react-redux";
import {GetProducts} from "../../../../redux/products/actions";

const ShopSectionComponent = ({data}) => {
    const dispatch = useDispatch()

    function pagination(page = 1) {
        dispatch(GetProducts(page))
    }

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <Pagination data={data.pagination} action={pagination}>
                    <div className={style.boxProducts}>
                        {
                            data.data.map(o => <ProductComponent key={o.id} product={o}/>)
                        }
                    </div>
                </Pagination>
            </div>
        </div>
    )

}

export default ShopSectionComponent