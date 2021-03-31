import React from "react";
import FormComponent from "./components/form";
import './index.sass'
import {post_wallet_activity} from "../../redux/actions/wallet_activity";
import {connect} from "react-redux";

class Transaction extends React.Component {

    render() {
        return(
            <div className="buttons">
                <FormComponent revenue={true} categories={this.props.categories.full_data} post_wallet_activity={this.props.post_wallet_activity}/>
                <FormComponent revenue={false} categories={this.props.categories.full_data}  post_wallet_activity={this.props.post_wallet_activity}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {categories} = state
    return {
        categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post_wallet_activity: (data) => dispatch(post_wallet_activity(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
