import React from 'react'
import './index.sass'
import {SyncLoader} from "react-spinners";
import {connect} from "react-redux";

class Loading extends React.Component {

    loading() {
        const {auth, categories, wallet, wallet_activity, top} = this.props
        if (auth.isLoading || categories.isLoading || wallet.isLoading || wallet_activity.isLoading || top.isLoading) {
            return true
        } else {
            return false
        }
    }


    render() {
        return (
            <div className="loadingBox">
                <SyncLoader
                  sizeUnit={"px"}
                  size={50}
                  color={'#f8f8f8'}
                  loading={this.loading()}
                />
           </div>
        )

    }
}

const mapStateToProps = state => {
    const {auth, categories, profile_settings, wallet, wallet_activity, top} = state
    return {
        auth,
        categories,
        profile_settings,
        wallet,
        wallet_activity,
        top
    }
}

export default connect(mapStateToProps)(Loading);
