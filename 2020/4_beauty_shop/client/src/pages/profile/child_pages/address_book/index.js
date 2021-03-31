import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import AddressBookAddress from "./address";
import Modal from "../../../../components/modal";
import AddressBookPageAddressForm from "./address_form";
import {useDispatch, useSelector} from "react-redux";
import {GetAllAddresses} from "../../../../redux/address_book/actions";

const AddressBookPage = () => {
    const address = useSelector(state => state.address_book)
    const [success, setSuccess] = useState(address.success)
    const [showCreate, setShowCreate] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllAddresses())
        setSuccess(address.success)
    }, [success])


    return (
        <div className={style.box}>
            <div className={style.boxButton}>
                <button className="button buttonOrange f-16 lts-3 uppercase" onClick={() => setShowCreate(true)}>+ Add
                    new address
                </button>
            </div>

            <div className={style.boxAddress}>
                {
                    address.data.map(o => <AddressBookAddress defaultAddress={o.default} address={o}/>)
                }

            </div>
            <Modal show={showCreate} width={70} setShow={setShowCreate}>
                <AddressBookPageAddressForm setShow={setShowCreate}/>
            </Modal>
        </div>
    )
}

export default AddressBookPage