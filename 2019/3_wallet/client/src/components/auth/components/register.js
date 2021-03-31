import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownItem from "react-bootstrap/Dropdown";
import {Form, Label} from "semantic-ui-react";

class RegisterForm extends React.Component {

    initalState = {
        setShow: false,
        show: false,
        email: '',
        currency: {},
        password1: '',
        password2: '',
        account: 0,
        emailError: null,
        passwordError: null,
        accountError: null,
        currencyError: null
    }

    state = this.initalState

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

    handleDropdownChange = (e, data) => {
        this.setState({'currency': data.value})
    }

    submitForm = () => {
        let validForm = true

        this.setState({
            emailError: null,
            accountError: null,
            currencyError: null,
            passwordError: null
        })
        const {email, account, currency, password1, password2} = this.state
        // eslint-disable-next-line
        const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

        if (!checkEmail.test(email)) {
            this.setState({emailError: 'Your email is invalid'})
            validForm = false
        }

        if (isNaN(parseFloat(account)) || !account) {
            this.setState({accountError: 'Your account must contain a valid number'})
            validForm = false
        }

        if (currency === {}) {
            this.setState({currencyError: 'You didn\'t select a currency type for your account'})
            validForm = false
        }

        if(password1 !== password2) {
            this.setState({passwordError: 'Your passwords does not match'})
            validForm = false
        } else {
            if (!checkPassword.test(password1) || !checkPassword.test(password2)) {
                this.setState({passwordError: 'Your password doesn\'t meet the requirements'})
                validForm = false
            }
        }

        if (validForm) {
            const finalRegisterForm = {
                email: this.state.email,
                password1: this.state.password1,
                password2: this.state.password2,
                account: parseFloat(this.state.account),
                currency: this.state.currency
            }

            this.props.register(finalRegisterForm)

            this.handleClose()
            }
    }

    currencyOptions = this.props.currencies.map(currency =>({
              key: currency.id,
              text: currency.code,
              value: currency.id,
            }))

    render() {
        const {emailError, accountError, currencyError, passwordError} = this.state
        return (
            <>
                <DropdownItem.Item onClick={() => this.handleShow()}>Register</DropdownItem.Item>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    label="Enter your email"
                                    error={emailError}
                                    type="email" onChange={this.handleChange('email')}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Enter your current account status"
                                    error={accountError}
                                    type="number" placeholder={this.initalState.account} onChange={this.handleChange('account')}/>
                            </Form.Field>
                             <Form.Field>
                                {/*<label>Select your preferred currency</label>*/}
                                <Form.Dropdown
                                    label="Select your preferred currency"
                                    error={currencyError}
                                    type="dropdown"
                                    placeholder='Search ...' search selection options={this.currencyOptions} onChange={this.handleDropdownChange} />
                            </Form.Field>
                            <Form.Field>
                                <Label pointing="below">At least 8 characters long with an Uppercase and a Number</Label>
                                <Form.Input
                                    label="Enter your password"
                                    error={passwordError}
                                    type="password" onChange={this.handleChange('password1')}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="Reenter your password"
                                    error={passwordError}
                                    type="password" onChange={this.handleChange('password2')}/>
                            </Form.Field>
                        </Form>

                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button variant="success" onClick={() => this.submitForm()}>
                        Submit
                      </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default RegisterForm
