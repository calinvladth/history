import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from "react-router-dom";
import layout from './layout.module.sass'
import {PostsPath} from "./posts/path";
import PostsPage from "./posts";
import HeaderComponent from "../components/header";
import CookiesPage from "./legal/cookies";
import {CookiesPath, LegalPath, PrivacyPath} from "./legal/path";
import PrivacyPage from "./legal/privacy";
import LegalPage from "./legal";
import {AdminPosts} from "./admin/posts/path";
import {AdminLogin} from "./admin/login/path";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class Routes extends Component {
    render() {
        return (
            <div className={layout.box}>
                <div className={layout.boxContent}>
                    <HeaderComponent/>

                    <Switch>
                        <Route path={PostsPath} exact><PostsPage/></Route>
                        <Route path={LegalPath} exact><LegalPage/></Route>
                        <Route path={CookiesPath} exact><CookiesPage/></Route>
                        <Route path={PrivacyPath} exact><PrivacyPage/></Route>
                        <Route path={AdminLogin.path} exact>{AdminLogin.component}</Route>
                        <Route path={AdminPosts.path} exact>{AdminPosts.component}</Route>
                        <Route path="*"><Redirect to={PostsPath}/></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);