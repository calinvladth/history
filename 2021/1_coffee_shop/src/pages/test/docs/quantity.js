import React from 'react'
import AddSVG from "../../../assets/icons/add.svg";
import SubstractSVG from "../../../assets/icons/substract.svg";

const quantity = 1
const quantity_limit = 0

export const QuantityDocs = () => (
    <div>
        <span style={{textDecoration: 'underline', fontSize: "20px"}}>Quantity Input Component</span>
        <ul>
            <li>
                <div className="quantity">
                    <input type="number" min="1" max={quantity_limit} value={quantity} readOnly={true}/>
                    <div>
                        <div className="quantity__button"
                             onClick={() => this.editQuantity(true, quantity, quantity_limit)}>
                            <img src={AddSVG} alt=""/>
                        </div>
                        <div className="quantity__button"
                             onClick={() => this.editQuantity(false, quantity, quantity_limit)}>
                            <img src={SubstractSVG} alt=""/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default QuantityDocs