import React from 'react';
import './assets/style/index.sass'
import Routes from "./pages/routes";
import {connect} from "react-redux";
import {check_key} from "./redux/check_key/actions";
import HeaderSlot from "./slots/header";

class App extends React.Component {
    componentDidMount() {
        this.props.check_key()
    }

    render() {
        const {check_key_state: {match, key}} = this.props
        console.log('Does key match? ', match)
        console.log('Key is: ', key)
        return (
            <div>
                <HeaderSlot title={'Vr Station'}/>
                <Routes/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        check_key_state: state.check_key
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check_key: () => dispatch(check_key()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)