import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {PrivatePath} from "./home/route";
import {connect} from "react-redux";
import Footer from "../components/footer";
import {CookiePath} from "./legal/cookie/route";
import {PrivacyPath} from "./legal/privacy/routes";
import {TermsPath} from "./legal/terms/route";
import Cookie from "./legal/cookie";
import Privacy from "./legal/privacy";
import Terms from "./legal/terms";
import Login from "./auth/login";
import Private from "./home";
import {LoginPath} from "./auth/login/route";
import {ScanPath} from "./scan/route";
import Scan from "./scan";
import {ShowcasePath} from "./showcase/route";
import Showcase from "./showcase";


const Routes = props => {
    const {check_key} = props

    return (
        <Router>
            <div>
                <Switch>
                    {/*Legal*/}
                    <Route path={CookiePath} component={Cookie}/>
                    <Route path={PrivacyPath} component={Privacy}/>
                    <Route path={TermsPath} component={Terms}/>

                    {/*Authentication*/}
                    <Route path={LoginPath} exact>{check_key.match ? <Redirect to={PrivatePath}/> : <Login/>}</Route>

                    {/*Private*/}
                    <Route path={PrivatePath} exact>{check_key.match ? <Private/> :
                        <Redirect to={LoginPath}/>}</Route>

                    {/*Scan*/}
                    <Route path={ScanPath} exact>{check_key.match ? <Scan/> :
                        <Redirect to={LoginPath}/>}</Route>

                    {/*Showcase*/}
                    <Route path={ShowcasePath} exact>{check_key.match ? <Showcase/> :
                        <Redirect to={LoginPath}/>}</Route>

                    {/*404*/}
                    <Redirect to={check_key.match ? LoginPath : PrivatePath}/>
                </Switch>
                <Footer/>
                {/*<CookiePolicy/>*/}
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    const {check_key} = state
    return {
        check_key
    }
}


export default connect(mapStateToProps)(Routes)
