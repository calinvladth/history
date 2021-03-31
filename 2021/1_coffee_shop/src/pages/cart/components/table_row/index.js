import React from "react";
import style from './index.module.sass'
import AddSvg from "../../../../assets/svg/add";
import SubtractSvg from "../../../../assets/svg/subtract";

import IMAGEPNG from '../../../../assets/images/product_3.png'
import {useDispatch, useSelector} from "react-redux";
import {PostCartItem, RemoveCartItem} from "../../../../redux/cart/actions";
import {api} from "../../../../config";
import {OrderByIndex} from "../../../../services/reorder";


const TableRowCartComponent = ({product}) => {
    const dispatch = useDispatch()
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    function editQuantity(add) {
        let new_product = {product: product.id, quantity: add ? product.quantity + 1 : product.quantity - 1}
        if (new_product.quantity > 0) dispatch(PostCartItem(new_product.product, new_product.quantity, true))

    }

    return (
        <tr>
            <td className={style.product}>
                <div className={style.productImage}>
                    {
                        product.images.length > 0
                            ? <img src={api + OrderByIndex(product.images)[0].path} alt=""/>
                            : <img src={IMAGEPNG} alt=""/>
                    }

                </div>
                <div className={style.productDetails}>
                    <div className={style.productParagraph}>
                        <p className="font__paragraph">{product.name}</p>
                    </div>
                    <div className={style.productParagraph}>
                        <p className="paragraph">{product.category.category.name}</p>
                    </div>
                    <div className={style.productRemove}>
                        <p className="font__paragraph" onClick={() => dispatch(RemoveCartItem(product.id))}>remove</p>
                    </div>
                </div>
            </td>
            <td className={style.price}>
                <p className="font__paragraph">{product.price} {currency}</p>
            </td>
            <td className="tableCartComponent__quantitybox">

                <div className={['quantity', style.quantityInput].join(' ')}>
                    <input type="number" min="1" max={product.quantity_limit} value={product.quantity}
                           readOnly={true}/>
                    <div>
                        <div
                            className={['quantity__button', style.quantityButton].join(' ')}
                            onClick={() => editQuantity(true, product)}>
                            <AddSvg/>
                        </div>
                        <div
                            className={['quantity__button', style.quantityButton].join(' ')}
                            onClick={() => editQuantity(false, product)}>
                            <SubtractSvg/>
                        </div>
                    </div>
                </div>
            </td>
            <td className={style.total}>
                <p className="font__paragraph">{product.total_price} {currency}</p>
            </td>
        </tr>
    );
}


export default TableRowCartComponent