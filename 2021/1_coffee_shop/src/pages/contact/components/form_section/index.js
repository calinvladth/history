import React from "react";
import style from "./index.module.sass";
import FormTitleContactComponent from "../form_title";
import FormComponent from "../form";

const FormSectionComponent = () => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <div className={style.boxTitle}>
                    <FormTitleContactComponent/>
                </div>
                <div className={style.boxBox}>
                    <FormComponent/>
                </div>
            </div>
        </div>
    )
}

export default FormSectionComponent