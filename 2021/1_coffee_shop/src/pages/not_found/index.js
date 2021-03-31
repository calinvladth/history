import React from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import {ShopPath} from "../shop/path";
import NotFoundSvg from "../../assets/icons/not_found";

const NotFoundPage = () => (
    <ConfirmationComponent icon={<NotFoundSvg/>}>
        <div className={style.box}>
            <h1 className="font font__subtitle font__subtitle--big">This page does not exist</h1>
            <p className="font__paragraph"><Link to={ShopPath}>Go back shopping</Link></p>
        </div>
    </ConfirmationComponent>
)

export default NotFoundPage