import React from 'react'
import './index.sass'
import {connect} from "react-redux";
import {logout} from "../../redux/check_key/actions";
import Layout from "../../slots/page";
import ScanMany from "../../components/scans/scan_many";
import HeaderSlot from "../../slots/header";

class Private extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderSlot title={'Presentation'}/>
                <ScanMany/>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    const {auth} = state
    return {
        auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: (data) => dispatch(logout(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Private)


