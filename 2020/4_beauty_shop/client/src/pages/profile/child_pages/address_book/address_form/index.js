import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {PostAddress, PutAddress} from "../../../../../redux/address_book/actions";

const AddressBookPageAddressForm = (props) => {
    const {create = true, setShow, address} = props
    const [country, setCountry] = useState(create ? '' : address.country)
    const [first_name, setFirstName] = useState(create ? '' : address.first_name)
    const [last_name, setLastName] = useState(create ? '' : address.last_name)
    const [phone, setPhone] = useState(create ? '' : address.phone)
    const [city, setCity] = useState(create ? '' : address.city)
    const [state, setState] = useState(create ? '' : address.state)
    const [street, setStreet] = useState(create ? '' : address.street)
    const [house, setHouse] = useState(create ? '' : address.house)
    const [postcode, setPostCode] = useState(create ? '' : address.postcode)
    const [defaultAddress, setDefaultAddress] = useState(create ? false : address.default)

    const dispatch = useDispatch()

    function submit(e) {
        e.preventDefault()

        const data = {
            id: address ? address.id : null,
            country: country,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            city: city,
            state: state,
            street: street,
            house: house,
            postcode: postcode,
            default: defaultAddress
        }

        console.log(data)

        try {
            create ? dispatch(PostAddress(data)) : dispatch(PutAddress(data))
            setShow(false)

        } catch (e) {
            console.log('ERROR CREATING THE ADDRESS: ', e)
        }
    }


    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-16 lts-3 uppercase normal">Shipping address</h1>
            </div>

            <form className={style.form} onSubmit={(e) => submit(e)}>
                <div className={style.formCountry}>
                    <div className="label">
                        <label className="f-14 lts-2">Country/Region</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={country} className="f-15 lts-2" type="text"
                               onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                </div>

                <div className={style.formFirstName}>
                    <div className="label">
                        <label className="f-14 lts-2">First Name</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={first_name} className="f-15 lts-2" type="text"
                               onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formLastName}>
                    <div className="label">
                        <label className="f-14 lts-2">Last Name</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={last_name} className="f-15 lts-2" type="text"
                               onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formPhoneNumber}>
                    <div className="label">
                        <label className="f-14 lts-2">Phone Number</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={phone} className="f-15 lts-2" type="text"
                               onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formCity}>
                    <div className="label">
                        <label className="f-14 lts-2">City/Town</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={city} className="f-15 lts-2" type="text"
                               onChange={(e) => setCity(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formState}>
                    <div className="label">
                        <label className="f-14 lts-2">State/Province</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={state} className="f-15 lts-2" type="text"
                               onChange={(e) => setState(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formStreet}>
                    <div className="label">
                        <label className="f-14 lts-2">Street</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={street} className="f-15 lts-2" type="text"
                               onChange={(e) => setStreet(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formHouseNumber}>
                    <div className="label">
                        <label className="f-14 lts-2">House NO</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={house} className="f-15 lts-2" type="text"
                               onChange={(e) => setHouse(e.target.value)}/>
                    </div>
                </div>
                <div className={style.formPostCode}>
                    <div className="label">
                        <label className="f-14 lts-2">Postcode/Zip</label>
                    </div>
                    <div className="input-box input-box-orange">
                        <input value={postcode} className="f-15 lts-2" type="text"
                               onChange={(e) => setPostCode(e.target.value)}/>
                    </div>
                </div>

                {
                    !create && !address.default && <div className={style.formMakeDefault}>
                        <div className="input-checkbox">
                            <input className="f-15 lts-2" type="checkbox" checked={defaultAddress}
                                   onChange={(e) => setDefaultAddress(e.target.checked)}/>
                            <label className="f-14 lts-2">Make default</label>
                        </div>
                    </div>
                }


                <div className={style.formAction}>
                    <button className="button buttonOrange lts-2 uppercase">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddressBookPageAddressForm