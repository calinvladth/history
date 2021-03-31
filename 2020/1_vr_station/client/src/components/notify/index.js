import React from 'react'
import {Message} from "semantic-ui-react";
import {connect} from "react-redux";
import './index.sass'

class Notify extends React.Component {
    render() {
        const {show, success, message} = this.props.notify
        const success_message = (
            <Message
                success
                header={message}
            />
        )

        const error_message = (
            <Message
                warning
                header={message}
            />
        )
        return show ?
            <div className="notify">
                {success ? success_message : error_message}
            </div> :
            null


    }
}

const mapStateToProps = state => {
    const {notify} = state
    return {
        notify
    }
}


export default connect(mapStateToProps)(Notify)
