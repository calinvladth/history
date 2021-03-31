import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {HomeRoute} from "./pages/home/router";
import {ShopRoute} from "./pages/shop/router";
import {TestRoute} from "./pages/test/router";
import {ProductRoute} from "./pages/product/router";
import {CartRoute} from "./pages/cart/router";
import {AccountRoute} from "./pages/account/router";
import {SearchProductsRoute} from "./pages/search_products/router";
import NavigationBar from "./components/navigation_bar";
import {useSelector} from "react-redux";
import {NoPageFoundRoute} from "./pages/no_page_found/router";
import {ProfileRoute} from "./pages/profile/router";
import Loading from "./components/loading";
import {useHistory} from 'react-router'


const RouterSystem = () => {
    const account = useSelector(state => state.account)
    const history = useHistory()

    const RenderProfile = () => {
        if (account.loaded) {
            if (account.data.is_authenticated) return <Route path={ProfileRoute.path}>{ProfileRoute.component}</Route>
            else return <Redirect to={ShopRoute.path}/>
        } else return <Loading/>
    }

    const RenderAccount = () => {
        if (account.loaded && !account.data.is_authenticated) {
            return <Route path={AccountRoute.path}>{AccountRoute.component}</Route>
        } else {
            return <Redirect to={history.location.pathname}/>
        }
    }

    return (
        <div>
            <header className="boxContent">
                <NavigationBar/>
            </header>
            <React.Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path={HomeRoute.path} exact={true}>{HomeRoute.component}</Route>
                    <Route path={ShopRoute.path}>{ShopRoute.component}</Route>
                    <Route path={TestRoute.path}>{TestRoute.component}</Route>
                    <Route path={ProductRoute.path}>{ProductRoute.component}</Route>
                    <Route path={CartRoute.path}>{CartRoute.component}</Route>
                    <RenderProfile/>

                </Switch>
                {/*Modal pages*/}
                <RenderAccount/>
                <Route path={SearchProductsRoute.path}>{SearchProductsRoute.component}</Route>
                {/* 404PAGE */}
                <Route path={NoPageFoundRoute.path} exact={true}>{NoPageFoundRoute.component}</Route>
                {/*<Redirect from="*" to={NoPageFoundRoute.path}/>*/}
            </React.Suspense>
        </div>
    )
}

export default RouterSystem
