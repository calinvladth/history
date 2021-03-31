import React, {Component} from 'react';
import style from '../index.module.sass'
import CookieComponent from "./cookie";
import {Helmet} from "react-helmet";

class CookiesPage extends Component {
    render() {
        return (
            <div className={style.box}>
                <Helmet>
                    <title>TGW | Cookie Policy</title>
                    <meta name="description" content="The good world / Cookie Policy"/>
                </Helmet>
                <CookieComponent/>
            </div>
        );
    }
}

export default CookiesPage;