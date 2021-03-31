import React, {Fragment} from 'react'
import { withAlert } from 'react-alert'
import {connect} from "react-redux";

export class Alerts extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {

        const {alert} = this.props
        const {show, success, message} = this.props.alerts
        if (show) {
            if (success) {
                alert.success(message)
            } else if (success === false) {
                alert.error(message)
            }
        }
    }

    render() {
        return <Fragment/>
    }
}

const mapStateToProps = state => {
    const {errors, alerts} = state
    return {
        errors,
        alerts
    }
}

export default connect(mapStateToProps)(withAlert()(Alerts))
