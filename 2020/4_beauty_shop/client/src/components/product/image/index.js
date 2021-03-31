import React from "react";
import style from "./index.module.sass";
import {api} from "../../../config";

const ProductImage = (props) => {
    const {data, background} = props

    return (
        <div className={`${style.box} ${background && style.boxBackground}`}>
            <div>
                <img src={`${api}${data[0].path}`} alt=""/>
            </div>
        </div>
    )
}

export default ProductImage