import React from 'react'
import {HomePath} from "./home/path";
import HomePage from "./home";
import {ContactPath} from "./contact/path";
import ContactPage from "./contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShopPage from "./shop";
import {ShopPath} from "./shop/path";
import {ProductPath} from "./product/path";
import ProductPage from "./product";
import TestPage from "./test";
import {TestPath} from "./test/path";
import {CartPath} from "./cart/path";
import CartPage from "./cart";
import {CheckoutPath} from "./checkout/path";
import CheckoutPage from "./checkout";
import {OrderSuccessPath} from "./order_success/path";
import HeaderComponent from "../components/header";
import OrderSuccessPage from "./order_success";
import {MessageSuccessPath} from "./message_success/path";
import MessageSuccessPage from "./message_success";
import NotFoundPage from "./not_found";


const Routes = props => {
    return (
        <BrowserRouter>
            <div>
                <HeaderComponent/>
                <Switch>
                    {/*Test page*/}
                    <Route path={TestPath} exact><TestPage/></Route>
                    {/*Home*/}
                    <Route path={HomePath} exact><HomePage/></Route>
                    {/*Contact*/}
                    <Route path={ContactPath}><ContactPage/></Route>
                    {/*Shop*/}
                    <Route path={ShopPath} exact><ShopPage/></Route>
                    {/*Product Page*/}
                    <Route path={ProductPath}><ProductPage/></Route>
                    {/*{Cart Page}*/}
                    <Route path={CartPath}><CartPage/></Route>
                    {/*Checkout Page*/}
                    <Route path={CheckoutPath}><CheckoutPage/></Route>
                    {/*Order Success Page*/}
                    <Route path={OrderSuccessPath}><OrderSuccessPage/></Route>
                    {/*Message Success*/}
                    <Route path={MessageSuccessPath}><MessageSuccessPage/></Route>
                    {/*Legal*/}
                    {/*<Route path={CookiePath} component={Cookie}/>*/}
                    {/*<Route path={PrivacyPath} component={Privacy}/>*/}
                    {/*<Route path={TermsPath} component={Terms}/>*/}


                    {/*404*/}
                    {/*<Route component={FOF}/>*/}
                    <Route path="/404"><NotFoundPage/></Route>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes