import React, {useState} from "react";
import style from './index.module.sass'
import ProductUserInteraction from "../../../../components/product_user_interaction";
import DeleteProducts from "../../../../components/delete_products";
import Pagination from "../../../../components/pagination";
import MyFavoritesPageFilters from "./filters";
import {categories_data, products_data, sort_by_data, stock_data} from "../../../../assets/data";

// Temporary data



const MyFavoritesPage = () => {
    const [edit, setEdit] = useState(false)

    const [products, setProducts] = useState(products_data)

    return (
        <div className={style.box}>
            <div className={style.filters}>
                <MyFavoritesPageFilters categories={categories_data} sortBy={sort_by_data} stock={stock_data}/>
            </div>
            <Pagination align="center" info={false}>
                <div className={style.boxBulkDelete}>
                    <DeleteProducts edit={edit} setEdit={setEdit} products={products} setProducts={setProducts}/>
                </div>
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

export default MyFavoritesPage