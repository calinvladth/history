import React from 'react'
import './index.sass'
import {Link} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import {CookiePath} from "../../pages/legal/cookie/route";

const CookiePolicy = () => (
    <div className="cookie">
        <div className="cookie__content">
            <CookieConsent
                location="bottom"
                buttonText="I agree"
                style={{background: "#2B373B", width: '100%', position: 'absolute'}}
                buttonStyle={{color: "#4e503b", fontSize: "13px"}}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
                <br/>
                <i><Link to={CookiePath}>Read more about cookies</Link></i>
            </CookieConsent>
        </div>
    </div>
)

export default CookiePolicy