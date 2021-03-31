import React from "react";
import Auth from './auth'
import Wallet from './wallet'
import {checkUser} from "../redux/actions/auth";
import {connect} from "react-redux";
import NoUser from "./no_user";
import Transaction from "./transaction";
import Categories from "./categories";
import WalletActivity from "./wallet_activity";
import store from '../store'
import TopStatistics from "./top_statistics";
import {currencies} from "../redux/actions/profile_settings";
import Loading from "./loading";
import FreshStart from "./new_user/fresh_start";
import Footer from "./footer";


class AppComponent extends React.Component {

    componentDidMount() {
        if (this.props.auth.token) {
            store.dispatch(checkUser())
        }
        store.dispatch(currencies())
    }

    body () {
        const {auth} = this.props
        if (auth.isAuthenticated && !auth.isLoading) {
           if (this.props.categories.full_data.length > 2) {
                return (
                    <div>
                        <Wallet/>
                        <Transaction/>
                        <Categories/>
                        <WalletActivity/>
                        <TopStatistics/>
                    </div>
                    )
            } else {
                return (
                    <div>
                        {this.props.categories.isLoading ? null : <FreshStart/>}
                        <Categories/>
                    </div>

                )
            }
        } else if (!auth.isAuthenticated && !auth.isLoading) {
            return <NoUser/>
        }


    }

    render() {
        return (
            <div>
                <Auth/>
                <Loading />
                {this.body()}
                {!this.props.auth.isAuthenticated && !this.props.auth.isLoading ? <Footer/> : null}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {auth, categories, wallet_activity} = state
    return {
        auth,
        categories,
        wallet_activity
    }
}

export default connect(mapStateToProps)(AppComponent);
