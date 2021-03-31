import React, {useEffect} from "react";
import style from './index.module.sass'
import MyProfilePageForm from "./form";
import MyProfileAvatar from "./avatar";
import {useDispatch, useSelector} from "react-redux";
import {GetPersonalInfo} from "../../../../redux/personal_info/actions";

const MyProfilePage = () => {

    const dispatch = useDispatch()
    dispatch(GetPersonalInfo())

    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="f-18 uppercase normal">information</h1>
            </div>

            <div>
                <MyProfileAvatar/>
            </div>

            <div className={style.boxForm}>
                <MyProfilePageForm/>
            </div>
        </div>
    )
}

export default MyProfilePage