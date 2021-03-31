import React, {useState} from "react";
import style from "./index.module.sass";
import DeleteProducts from "../../../../components/delete_products";
import ProductUserInteraction from "../../../../components/product_user_interaction";
import Pagination from "../../../../components/pagination";
import {products_data} from "../../../../assets/data";
import NotifyInStockPageFilters from "./filters";

const NotifyInStockPage = () => {
    const [edit, setEdit] = useState(false)
    const [products, setProducts] = useState(products_data)

    return (
        <div className={style.box}>
            <div className={style.boxTop}>
                <div>
                    <NotifyInStockPageFilters/>
                </div>
                <div>
                    <DeleteProducts edit={edit} setEdit={setEdit} products={products} setProducts={setProducts}/>
                </div>
            </div>
            <Pagination align="center" info={false}>
                <div className="productsGrid">
                    {
                        products.map(o => {
                            return <ProductUserInteraction key={o.id} allProducts={products} product={o}
                                                           setProducts={setProducts} flag="none"
                                                           bulkDelete={edit}/>
                        })
                    }
                </div>
            </Pagination>
        </div>
    )
}

export default NotifyInStockPage