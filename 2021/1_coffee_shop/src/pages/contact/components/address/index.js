import React from "react";
import style from './index.module.sass'

const address = [
    {
        id: 1,
        city: 'Texas',
        address: '272 Bubby Drive, Austin',
        phone: '512-444-2059',
        email: 'someemail@coffeecompany.com'
    },
    {
        id: 2,
        city: 'New York',
        address: '1142 Walz Nuzum farm roas',
        phone: '442-523-7333',
        email: 'newyork@coffeecompany.com'
    }
]

const AddressComponent = () => (
    <div className={style.box}>
        {
            address.map(o =>
                <div className={style.content} key={o.id}>
                    <div className={style.address}>
                        {/*City*/}
                        <div className={style.addressTitle}>
                            <h1 className="font__paragraph">{o.city}</h1>
                        </div>
                        {/*Street*/}
                        <div>
                            <p className="font__paragraph">{o.address}</p>
                        </div>
                        {/*Contact Phone*/}
                        <div>
                            <p className="font__paragraph">{o.phone}</p>
                        </div>
                        {/*Contact Email*/}
                        <div>
                            <p className="font__paragraph">{o.email}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
)


export default AddressComponent