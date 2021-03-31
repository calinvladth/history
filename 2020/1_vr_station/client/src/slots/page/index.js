import React from 'react'
import './index.sass'
import Notify from "../../components/notify";
import {connect} from "react-redux";

class Layout extends React.Component {
    render() {
        const {children, notify} = this.props
        return (
            <div className="layout">
                <div className="layout__error">
                    <div className="layout__boxerror">
                        <Notify/>
                    </div>
                </div>
                <div className={`layout__boxcontent ${notify.show ? 'layout__boxcontent--erroractive' : ''}`}>
                    {children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {notify} = state
    return {
        notify
    }
}

export default connect(mapStateToProps)(Layout)
