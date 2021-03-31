import React, {useState} from "react";
import style from './index.module.sass'
import Dropdown from "../../../../../components/dropdown";
import {categories_data} from "../../../../../assets/data";

const NotifyInStockPageFilters = () => {
    const [selectedCategory, setSelectedCategory] = useState({})

    return (
        <div className={style.box}>
            <Dropdown options={categories_data} selected={selectedCategory} setSelected={setSelectedCategory} defaultName="Category" color={false}/>
        </div>
    )
}

export default NotifyInStockPageFilters