import React from "react";
import Product from "../../../../../components/product";
import Pagination from "../../../../../components/pagination";
import {products_data} from "../../../../../assets/data";

const RecentlyViewedPageProducts = () => {
    return (
        <Pagination>
            <div className="productsGrid">
                {products_data.map(o => <Product rating={false} name={o.name}/>)}
            </div>
        </Pagination>
    )
}

export default RecentlyViewedPageProducts