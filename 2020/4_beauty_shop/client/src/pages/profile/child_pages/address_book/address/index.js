import React, {useState} from "react";
import style from "./index.module.sass";
import RemoveAlert from "../../../../../components/remove_alert";
import AddressBookPageAddressForm from "../address_form";
import Modal from "../../../../../components/modal";
import {useDispatch} from "react-redux";
import {DeleteAddress} from "../../../../../redux/address_book/actions";

const AddressBookAddress = (props) => {
    const {defaultAddress = false, address} = props
    const [showRemoveAlert, setShowRemoveAlert] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const dispatch = useDispatch()

    function deleteAddress() {
        dispatch(DeleteAddress(address.id))
        setShowRemoveAlert(false)
    }

    return (
        <div className={style.box}>
            <div className={style.boxTop}>
                <span className="f-16 capitalize lts-3">{`${address.first_name} ${address.last_name}`}</span>
                <span className="f-16 capitalize lts-3">{address.phone}</span>
            </div>

            <div className={style.boxBottom}>
                <span className="f-14 lts-2">{address.postcode}</span>
                <span className="f-14 lts-2">{address.street}</span>
                <span className="f-14 lts-2">{address.city}</span>
                <span className="f-14 lts-2">{address.state}</span>
            </div>

            <div className={style.boxAction}>
                <div>
                    {
                        defaultAddress &&
                        <span className={`f-14 lts-2 ${style.boxDefault}`}>Default address</span>
                    }

                </div>
                <div>
                    <span className="f-14 lts-2 pointer" onClick={() => setShowEdit(true)}>Edit</span>
                    {
                        !address.default &&
                        <span className="f-14 lts-2 pointer" onClick={() => setShowRemoveAlert(true)}>Delete</span>
                    }
                </div>
            </div>
            <RemoveAlert show={showRemoveAlert} setShow={setShowRemoveAlert} indicator="this address"
                         deleteAction={deleteAddress}/>
            <Modal show={showEdit} width={70} setShow={setShowEdit}>
                <AddressBookPageAddressForm create={false} address={address} setShow={setShowEdit}/>
            </Modal>
        </div>
    )
}

export default AddressBookAddress