import React, {Component} from 'react';
import style from '../index.module.sass'
import PrivacyComponent from "./privacy";
import {Helmet} from "react-helmet";

class PrivacyPage extends Component {
    render() {
        return (
            <div className={style.box}>
                <Helmet>
                    <title>TGW | Privacy Policy</title>
                    <meta name="description" content="The good world / Privacy Policy"/>
                </Helmet>
                <PrivacyComponent/>
            </div>
        );
    }
}

export default PrivacyPage;