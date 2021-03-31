import React, {useEffect, useState} from 'react'
import style from './index.module.sass'
import {api, productQuantityLimit} from "../../../../config";
import AddSvg from "../../../../assets/svg/add";
import SubtractSvg from "../../../../assets/svg/subtract";
import {useDispatch, useSelector} from "react-redux";
import Product3Png from '../../../../assets/images/product_3.png'
import {PostCartItem} from "../../../../redux/cart/actions";
import {ChangeQuantity} from "../../../../services/quantity";
import {OrderByIndex} from "../../../../services/reorder";

const ProductViewProductComponent = () => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    const [quantity, setQuantity] = useState(1)
    const [specs, setSpecs] = useState([])
    const [images, setImages] = useState([])
    const [primaryImage, setPrimaryImage] = useState({})

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    useEffect(() => {
        setSpecs(OrderByIndex(product.data.specs))
        setImages(OrderByIndex(product.data.images))
        setPrimaryImage(product.data.images[0])
        return () => {

            setPrimaryImage({})
        }

    }, [product.success, product.data.name])


    function editQuantity(add, quantity, productQuantityLimit) {
        const newQuantity = ChangeQuantity(add, quantity, productQuantityLimit)
        setQuantity(newQuantity)
    }

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <div className={style.details}>
                    <div className={style.detailsTitle}>
                        <h1 className="font font__subtitle">{product.data.name}</h1>
                    </div>

                    <div className={style.detailsText}>
                        <p className="font__paragraph">{product.data.description_short}</p>
                    </div>
                </div>
                <div className={style.image}>
                    {
                        images.length > 0 ? <img src={api + primaryImage.path} alt=""/> :
                            <img src={Product3Png} alt=""/>
                    }

                </div>
                <div className={style.info}>
                    <div className={style.infoPrice}>
                        <p className="font__paragraph">Price: {product.data.price} {currency}</p>
                    </div>
                    <div className={style.infoActions}>
                        <div className="quantity">
                            <input type="number" min="1" max={productQuantityLimit} value={quantity}
                                   readOnly={true}/>
                            <div>
                                <div className="quantity__button"
                                     onClick={() => editQuantity(true, quantity, productQuantityLimit)}>
                                    <AddSvg/>
                                </div>
                                <div className="quantity__button"
                                     onClick={() => editQuantity(false, quantity, productQuantityLimit)}>
                                    <SubtractSvg/>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => dispatch(PostCartItem(product.data.id, quantity))}
                            className={['button', 'button--full', style.infoSubmit].join(' ')}>Add
                            to cart
                        </button>
                    </div>
                    <div>
                        <div className={style.specs}>
                            {
                                specs.map((o, i) => <p className="font__paragraph"
                                                       key={o.id}>{o.key} - {o.value}</p>)
                            }
                        </div>
                        <div className={style.gallery}>
                            {
                                images.map((o, i) => <div
                                        className={style.galleryImage}
                                        key={o.id} onMouseEnter={() => setPrimaryImage(o)}>
                                        <img src={api + o.path} alt=""/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewProductComponent