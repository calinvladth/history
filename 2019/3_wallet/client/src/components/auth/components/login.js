import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import {Form} from "semantic-ui-react";

class LoginForm extends React.Component {

    state = {}

    initalState = {
        setShow: false,
        show: false,
        email: '',
        password: '',
    }

    handleShow = () => {
        this.setState({
            setShow: true,
            show: true
        })
    }

    handleClose = () => {
        this.setState(this.initalState)
    }

    handleChange = input => (e) => {
        this.setState({[input]: e.target.value})
    }

    submitForm () {
        const finalLoginForm = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(finalLoginForm)

        this.handleClose()
    }

    bodyLogin = (
        <Form>
            <Form.Field required>
                <label>Enter your email</label>
                <input type="email" onChange={this.handleChange('email')}/>
            </Form.Field>
            <Form.Field required>
                <label>Enter your password</label>
                <input type="password" onChange={this.handleChange('password')}/>
            </Form.Field>
        </Form>
    )

    render() {
        return (
            <>
                <Dropdown.Item onClick={() => this.handleShow()}>Login</Dropdown.Item>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{ this.bodyLogin }</Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button variant="success" onClick={() => this.submitForm()}
                              disabled={!(this.state.email && this.state.password)}>
                        Submit
                      </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default LoginForm
