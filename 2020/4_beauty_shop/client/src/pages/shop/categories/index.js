import React from 'react'
import style from './index.module.sass'

const ShopPageCategories = () => {
    const options = [
        {id: 1, name: 'Applicators'},
        {id: 2, name: 'Body oil'},
        {id: 3, name: 'Cosmetic'},
        {id: 4, name: 'Face masks'},
        {id: 5, name: 'Foundation'},
        {id: 6, name: 'Skin solutions'},
    ]

    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-18 uppercase lts-3 normal">Product Categories</h1>
            </div>
            <div className={style.boxOption}>
                {
                    options.map(option => <p key={option.id} className="f-16 lts-3">{option.name}</p>)
                }
            </div>
        </div>
    )
}

export default ShopPageCategories