import React, {useState} from "react";
import style from './index.module.sass'
import RemoveAlert from "../remove_alert";
import DeleteProductsPreDelete from "./pre_delete";
import DeleteProductsActiveDelete from "./active_delete";

const DeleteProducts = (props) => {
    const {edit, setEdit, products, setProducts} = props
    const [showModal, setShowModal] = useState(false)
    const [indicator, setIndicator] = useState(0)

    const deleteProducts = () => {
        setShowModal(false)
        setEdit(false)
        const toDelete = products.filter(o => o.checked)
        console.log('TO DELETE: ', toDelete)
    }
    return (
        <div className={`pointer ${style.box}`}>
            {
                edit
                    ?
                    <DeleteProductsActiveDelete setEdit={setEdit} setShowModal={setShowModal} products={products}
                                                setProducts={setProducts} setIndicator={setIndicator}/>
                    :
                    <DeleteProductsPreDelete setEdit={setEdit}/>
            }

            <RemoveAlert show={showModal} setShow={setShowModal} indicator={indicator}
                         deleteAction={deleteProducts}/>

        </div>
    )
}

export default DeleteProducts