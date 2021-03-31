import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditIcon from "../../../assets/icons/edit.png";
import {Checkbox, Dropdown, Form, TextArea} from "semantic-ui-react";

class EditComponent extends React.Component{
    initialState = {
        show: false,
        setShow: false,
        id: null,
        amount: 0,
        category: undefined,
        revenue: null,
        additional_info: ''
    }
    state = {
        show: false,
        setShow: false
    }

    submit() {
        const finalForm = {
            id: this.state.id,
            amount: parseFloat(this.state.amount),
            category: parseInt(this.state.category),
            additional_info: this.state.additional_info,
            revenue: this.state.revenue
        }
        this.props.put_wallet_activity(finalForm)
        this.handleClose()
    }

    handleChange = input => (e) => {
        if (input === 'revenue') {
            this.setState({revenue: !this.state.revenue})
        } else {
            this.setState({[input]: e.target.value})
        }
    }

    handleDropdownChange = (e, data) => {
        this.setState({'category': data.value})
    }

    handleClose = () => this.setState(this.initialState);
    handleShow = () => this.setState({
        show: true,
        setShow: true,
        id: this.props.activity.id,
        amount: this.props.activity.amount,
        category: this.props.activity.category.id,
        revenue: this.props.activity.revenue,
        additional_info: this.props.activity.additional_info,
    });

    categoryOptions = (
        this.props.categories.full_data.map(category => ({
          key: category.id,
          text: category.name,
          value: category.id,
        }))
    )

    body = (
            <Form>
                <Form.Field>
                    <Checkbox label={{ children: 'Revenue' }} defaultChecked={this.state.revenue} onChange={this.handleChange('revenue')}/>
                </Form.Field>
                <Form.Field>
                    <label>Enter Amount</label>
                    <input type="number" placeholder="0" defaultValue={this.state.amount} onChange={this.handleChange('amount')}/>
                </Form.Field>

                <Form.Field>
                    <label>Select Category</label>
                    <Dropdown placeholder='Search ...' search selection options={this.categoryOptions} defaultValue={this.state.category} onChange={this.handleDropdownChange} />
                </Form.Field>

                <Form.Field>
                  <label>Additional Info</label>
                  <TextArea placeholder='Eg: Transaction details' defaultValue={this.state.additional_info} onChange={this.handleChange('additional_info')}/>
                </Form.Field>

            </Form>
        )

    render() {
        const {show, revenue, amount, category, additional_info} = this.state
        return (
            <>
                <Button variant="link" size="sm" onClick={() => this.handleShow()}>
                    <img src={EditIcon} alt=""/>
                </Button>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit activity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Field>
                                <Checkbox label={{ children: 'Revenue' }} defaultChecked={revenue} onChange={this.handleChange('revenue')}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Enter Amount</label>
                                <input type="number" placeholder="0" defaultValue={amount} onChange={this.handleChange('amount')}/>
                            </Form.Field>

                            <Form.Field>
                                <label>Select Category</label>
                                <Dropdown placeholder='Search ...' search selection options={this.categoryOptions} defaultValue={category} onChange={this.handleDropdownChange} />
                            </Form.Field>

                            <Form.Field>
                              <label>Additional Info</label>
                              <TextArea placeholder='Eg: Transaction details' defaultValue={additional_info} onChange={this.handleChange('additional_info')}/>
                            </Form.Field>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={() => this.submit()}
                        disabled={!(amount && category)}
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )

    }
}

export default EditComponent
