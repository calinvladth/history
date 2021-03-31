import React from 'react'
import LoginForm from "./components/login";
import Dropdown from "react-bootstrap/Dropdown";
import './index.sass'
import RegisterForm from "./components/register";
import {login, logout, register} from "../../redux/actions/auth";
import {connect} from "react-redux";
import ProfileIconSvg from '../../assets/svg/man-user.svg'


class Auth extends React.Component {

    logout = (
        <Dropdown.Item onClick={() => this.props.logout()}>Logout</Dropdown.Item>
    )

    render() {
        return (
            <div className="navbarComponent">
                <span className="navbarComponent__options">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-custom-components" variant="link">
                            <img className="profileIcon" src={ProfileIconSvg} alt=""/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {/*<Test/>*/}
                            {this.props.auth.isAuthenticated ? null : <LoginForm login={this.props.login} /> }
                            {this.props.auth.isAuthenticated ? null : <RegisterForm register={this.props.register} currencies={this.props.profile_settings.data}/>}
                            {this.props.auth.isAuthenticated ? this.logout : null}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {auth, profile_settings} = state
    return {
        auth,
        profile_settings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // AUTHENTICATE
        register: (data) => dispatch(register(data)),
        login: (data) => dispatch(login(data)),
        logout: () => dispatch(logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)
