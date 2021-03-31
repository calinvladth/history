import React from 'react'
import {withRouter} from "react-router-dom";
import Product from "../../components/product";

const TestPage = (props) => {

    const products = [{id: 1, name: 'Hand cream'}, {id: 2, name: 'Face mask'}, {id: 3, name: 'Bath salt'}, {
        id: 4,
        name: 'Skin scrub'
    }]

    return (
        <div>
            <h1>Test page</h1>
            <p>Products Grid</p>
            <div className="boxContent">
                <div className="productsGrid">
                    {products.map(o => <Product key={o.id} name={o.name}/>)}
                </div>
            </div>

        </div>
    )
}

export default withRouter(TestPage)