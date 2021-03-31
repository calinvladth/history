import React, {useState} from "react";
import style from './index.module.sass'
import Product from "../product";
import DeleteSvg from "../../assets/icons/delete_svg";
import RemoveAlert from "../remove_alert";

const ProductUserInteraction = (props) => {
    const {flag, bulkDelete = false, product, allProducts, setProducts} = props
    const [showModal, setShowModal] = useState(false)

    function showAlert() {
        setShowModal(true)
    }

    function deleteProduct() {
        console.log('DELETE: x')
        setShowModal(false)
    }

    function checkProduct(product) {
        const index = allProducts.findIndex(o => o.id === product.id)
        allProducts[index].checked = !product.checked
        setProducts([...allProducts])
    }

    return (
        <div>
            <div className={style.box}>
                {
                    bulkDelete
                        ?
                        <span className={style.boxCheck}>
                            <input type="checkbox" checked={product.checked} onChange={() => checkProduct(product)}/>
                        </span>
                        :
                        <span className={style.boxDelete} onClick={() => showAlert()}>
                            <DeleteSvg/>
                        </span>
                }


                <Product rating={false} flag={flag}/>
            </div>

            <RemoveAlert show={showModal} setShow={setShowModal} indicator={'Hand cream'} deleteAction={deleteProduct}/>
        </div>
    )
}

export default ProductUserInteraction