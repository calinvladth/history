import React, {Component} from 'react';
import style from './index.module.sass'
import {CookiesPath, PrivacyPath} from "./path";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

class LegalPage extends Component {
    render() {
        return (
            <div className={style.box}>
                <Helmet>
                    <title>TGW | Legal</title>
                    <meta name="description" content="The good world / Legal"/>
                </Helmet>
                <h2 className={style.subtitle}>Legal urls:</h2>
                <ul className={style.list}>
                    <li>
                        <Link to={CookiesPath}>Cookie policy</Link>
                    </li>
                    <li>
                        <Link to={PrivacyPath}>Privacy policy</Link>
                    </li>
                </ul>

            </div>
        );
    }
}

export default LegalPage;