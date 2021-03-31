import React from 'react'
import {Link, withRouter} from "react-router-dom";
import './index.sass'
import {CookiePath} from "../../pages/legal/cookie/route";
import {PrivacyPath} from "../../pages/legal/privacy/routes";
import {TermsPath} from "../../pages/legal/terms/route";
import {PrivatePath} from "../../pages/home/route";
import {ShowcasePath} from "../../pages/showcase/route";
import {connect} from "react-redux";

const Footer = (props) => {
    const {location: {pathname}} = props
    const {check_key: {match}} = props

    return (
        <div className="footer">
            <div className="footer__content">
                {
                    match
                        ?
                        <div className="footer__menu">
                            <Link to={PrivatePath}
                                  className={`footer__link ${pathname === PrivatePath ? 'footer__link--active' : ''}`}>Home</Link>
                            <Link to={ShowcasePath}
                                  className={`footer__link ${pathname === ShowcasePath ? 'footer__link--active' : ''}`}>Showcase</Link>
                        </div>
                        :
                        <div></div>
                }

                <div className="footer__legal">
                    <Link to={PrivacyPath}
                          className={`footer__link ${pathname === PrivacyPath ? 'footer__link--active' : ''}`}><i>Policy
                        Policy</i></Link>
                    <Link to={TermsPath}
                          className={`footer__link ${pathname === TermsPath ? 'footer__link--active' : ''}`}><i>Terms</i></Link>
                    <Link to={CookiePath}
                          className={`footer__link ${pathname === CookiePath ? 'footer__link--active' : ''}`}><i>Cookie
                        policy</i></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        check_key: state.check_key
    }
}

export default connect(mapStateToProps)(withRouter(Footer))
