import React, {useEffect, useState} from 'react'
import style from './index.module.sass'
import ShopPageHero from "./hero";
import ShopPageCategories from "./categories";
import Dropdown from "../../components/dropdown";
import SearchComponent from "../../components/search";
import Pagination from "../../components/pagination";
import {sort_by_data} from "../../assets/data";
import Product from "../../components/product";
import {useDispatch, useSelector} from "react-redux";
import {GetProducts} from "../../redux/products/actions";

const ShopPage = () => {
    const products = useSelector(state => state.products)
    const [success, setSuccess] = useState(products.success)

    const [selected, setSelected] = useState(sort_by_data[0])
    const [searchName, setSearchName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        pagination()
        setSuccess(products.success)
    }, [success])

    function pagination(page = 1) {
        dispatch(GetProducts(page))
    }

    return (
        <div className={style.box}>
            <section className="box">
                <ShopPageHero/>
            </section>

            <section className="box">
                <div className="boxContent">

                    <div className={style.grid}>

                        <div className={style.boxFilters}>
                            <section>
                                <ShopPageCategories/>
                            </section>
                            <section>
                                <Dropdown
                                    selected={selected}
                                    defaultName="Sort by"
                                    setSelected={setSelected}
                                    options={sort_by_data}
                                />
                            </section>
                            <section>
                                <SearchComponent name={searchName} setName={setSearchName}/>
                            </section>
                        </div>

                        <div>
                            <section>
                                {
                                    products.success &&
                                    <Pagination data={products.pagination} action={pagination}>
                                        <div className={style.boxProducts}>
                                            <div className="productsGrid">
                                                {products.data.map(o => <Product key={o.id} data={o}/>)}
                                            </div>
                                        </div>
                                    </Pagination>
                                }

                            </section>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default ShopPage