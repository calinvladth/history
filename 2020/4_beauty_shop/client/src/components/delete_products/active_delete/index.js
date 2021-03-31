import React from "react";
import style from './index.module.sass'
import common from '../common.module.sass'
import DeleteSvg from "../../../assets/icons/delete_svg";

const DeleteProductsActiveDelete = (props) => {
    const {setEdit, setShowModal, products, setProducts, setIndicator} = props
    const numberOfProducts = products.filter(o => o.checked).length
    const selectAllChecked = products.filter(o => o.checked).length === products.length

    function selectAll(selectAllChecked) {
        if (selectAllChecked) {
            const uncheckedProducts = products.map(o => {
                o.checked = false
                return o
            })
            setProducts(uncheckedProducts)
        } else {
            const checkedProducts = products.map(o => {
                o.checked = true
                return o
            })
            setProducts(checkedProducts)
        }
    }

    function bulkDeleteModal() {
        setIndicator(`${numberOfProducts} ${numberOfProducts > 1 ? 'products' : 'product'}`)
        setShowModal(true)
    }

    return (
        <div className={style.box}>
            <div className={style.cancel}>
                <p className="f-14 lts-2" onClick={() => setEdit(false)}>Cancel</p>
            </div>

            <div className={style.selectAll}>
                <input type="checkbox" checked={selectAllChecked} onChange={() => selectAll(selectAllChecked)}/>
                <p className="f-14 lts-2">Select all</p>
            </div>
            <div>
                <p className="f-14 lts-2">
                    ({numberOfProducts} selected)
                </p>
            </div>
            {
                numberOfProducts > 0 && <div className={style.icon}>

                <span className={common.icon} onClick={() => bulkDeleteModal()}>
                    <DeleteSvg/>
                </span>

                </div>
            }


        </div>
    )
}

export default DeleteProductsActiveDelete