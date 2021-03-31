import React from 'react'
import style from "../index.module.sass";

const ProductTitle = ({name}) => {
    return (
        <div>
            <h2 className="f-15 capitalize">{name}</h2>
        </div>
    )
}

export default ProductTitle