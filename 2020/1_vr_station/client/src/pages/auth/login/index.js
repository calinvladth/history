import React from 'react'
import {Button, Form} from "semantic-ui-react"
import '../index.sass'
import {connect} from "react-redux"
import {check_key} from "../../../redux/check_key/actions";
import Layout from "../../../slots/page";
import HeaderSlot from "../../../slots/header";

class Login extends React.Component {
    initialState = {key: ''}
    state = this.initialState

    handleChange = input => (e) => {
        this.setState({[input]: e.target.value})
    }

    submit = () => {
        const data = this.state.key
        this.props.check_key(data)
    }

    render() {
        const {key} = this.state
        const {loading} = this.props.check_key
        return (
            <Layout>
                <HeaderSlot title={'Authentication'}/>
                <div className="auth">
                    <div className="auth__box">
                        <Form onSubmit={this.submit}>
                            <Form.Field required>
                                <Form.Input required label="Enter the key" type="password" value={key}
                                            onChange={this.handleChange('key')}/>
                            </Form.Field>
                            <div className="auth__submit">
                                <Button loading={loading} primary fluid>Check</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    const {check_key} = state
    return {
        check_key
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check_key: (data) => dispatch(check_key(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
