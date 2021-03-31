import React, {useState} from "react";
import style from './index.module.sass'
import Dropdown from "../../../../../components/dropdown";

const MyFavoritesPageFilters = (props) => {
    const {categories, stock = [], sortBy = []} = props

    const [selectCategory, setSelectCategory] = useState({})
    const [selectStock, setSelectStock] = useState({})
    const [selectSortBy, setSelectSortBy] = useState(sortBy[0])
    return (
        <div className={style.box}>
            <div>
                <Dropdown options={categories} defaultName="Category" color={false} selected={selectCategory}
                          setSelected={setSelectCategory}/>
            </div>
            <div>
                <Dropdown options={stock} defaultName="Stock" color={false} selected={selectStock} setSelected={setSelectStock}/>
            </div>
            <div>
                <div className={style.sortBy}>
                    <p className="f-15 lts-2">Sort by</p>
                    <Dropdown options={sortBy} color={false} selected={selectSortBy} setSelected={setSelectSortBy}/>
                </div>
            </div>
        </div>
    )
}

export default MyFavoritesPageFilters