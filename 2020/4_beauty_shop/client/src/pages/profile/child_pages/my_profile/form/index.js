import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {UpdatePersonalInfo} from "../../../../../redux/personal_info/actions";

const MyProfilePageForm = () => {
    const dispatch = useDispatch()
    const personal_info = useSelector(state => state.personal_info)
    const [username, setUsername] = useState(personal_info.data.username)
    const [phone, setPhone] = useState(personal_info.data.phone)

    useEffect(() => {
        if (personal_info.success) {
            setUsername(personal_info.data.username)
            setPhone(personal_info.data.phone)
        }
    }, [personal_info])

    function submit(e) {
        e.preventDefault()
        dispatch(UpdatePersonalInfo({
            username, phone
        }))
    }

    return (
        <form className={style.box} onSubmit={(e) => submit(e)}>
            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">Username</label>
                </div>
                <div className="input-box">
                    <input type="text" required={true} value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>

            {/*<div>*/}
            {/*    <div className="label">*/}
            {/*        <label className="f-15 capitalize lts-2">Birthday</label>*/}
            {/*    </div>*/}
            {/*    <div className={style.birthday}>*/}
            {/*        <div className="input-box">*/}
            {/*            <input type="text"/>*/}
            {/*        </div>*/}
            {/*        <div className="input-box">*/}
            {/*            <input type="text"/>*/}
            {/*        </div>*/}

            {/*        <div className="input-box">*/}
            {/*            <input type="text"/>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}


            {/*<div>*/}
            {/*    <div className="label">*/}
            {/*        <label className="f-15 capitalize lts-2">Gender</label>*/}
            {/*    </div>*/}

            {/*    <div className={style.gender}>*/}
            {/*        <div className="input-box">*/}
            {/*            <input type="text"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">Email verification</label>
                </div>

                <div className={style.email}>
                    <div className="input-box">
                        <input type="text"/>
                    </div>
                </div>
            </div>

            <div>
                <div className="label">
                    <label className="f-15 capitalize lts-2">Phone</label>
                </div>

                <div>
                    <div className="input-box">
                        <input type="text" required={true} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div>
                <button className="button capitalize f-14 lts-2">
                    confirm edit
                </button>
            </div>

        </form>
    )
}

export default MyProfilePageForm