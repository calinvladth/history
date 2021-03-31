import React from 'react'
import DetailedView from "../../../components/detailed_view";
import ProductPageBottomInfoDescription from "../description";
import ProductPageBottomInfoAdditionalInfo from "../additional_info";
import ProductPageReview from "../reviews";

const ProductPageBottomInfo = ({product}) => {
    const options = [
        {
            name: 'description',
            component: <ProductPageBottomInfoDescription data={product.description_full}/>
        },
        {
            name: 'additional information',
            component: <ProductPageBottomInfoAdditionalInfo data={product.specs}/>
        },
        {
            name: 'reviews',
            component: <ProductPageReview/>
        },

    ]

    return (
        <div>
            <DetailedView options={options}/>
        </div>
    )
}

export default ProductPageBottomInfo
