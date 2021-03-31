import React from "react";
import style from './index.module.sass'
import common from '../common.module.sass'
import DeleteSvg from "../../../assets/icons/delete_svg";

const DeleteProductsPreDelete = (props) => {
    const {setEdit} = props
    return (
        <div className={style.box} onClick={() => setEdit(true)}>
                <span className={common.icon}>
                    <DeleteSvg/>
                </span>
            <p className="f-14 lts-2">Delete</p>
        </div>
    )
}

export default DeleteProductsPreDelete
