import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import addIcon from '../../../assets/icons/add.png'
import subtractIcon from '../../../assets/icons/substract.png'
import {Form, Dropdown, TextArea} from "semantic-ui-react";

class FormComponent extends React.Component {

    initialState = {
        setShow: false,
        show: false,
        revenue: this.props.revenue,
        amount: 0,
        category: undefined,
        additional_info: ''
    }

    state = this.initialState

    handleChange = input => (e) => {
        this.setState({[input]: e.target.value})
    }
    handleDropdownChange = (e, data) => {
        this.setState({'category': data.value})
    }

    updateWalletOnSave() {
        const finalForm = {
            amount: parseFloat(this.state.amount),
            category: this.state.category,
            additional_info: this.state.additional_info,
            revenue: this.props.revenue
        }

        this.props.post_wallet_activity(finalForm)

        this.handleClose()
    }

      handleClose = () => {
            this.setState({setShow: false, show: false, additional_info: '', amount: 0, category: undefined})
        };
      handleShow = () => {
          this.setState({setShow: true, show: true})};


    render() {
        const button = (
          <span className="buttons__button" onClick={this.handleShow}>
            {this.props.revenue ? 'Revenue' : 'Spending'} <img className="buttons__button--icon" src={this.props.revenue ? addIcon : subtractIcon} alt=""/>
          </span>
        )

        const categoryOptions = (
            this.props.categories.map(category => ({
              key: category.id,
              text: category.name,
              value: category.id,
            }))
        )

        const header = (
          <Modal.Header closeButton>
              <Modal.Title>{this.props.revenue ? 'Revenue' : 'Spending'}</Modal.Title>
          </Modal.Header>
        )

        const body = (
            <Modal.Body>
                <Form>
                    <Form.Field required>
                      <label>Enter Amount</label>
                      <input type="number" placeholder='Eg: 100' onChange={this.handleChange('amount')}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Select Category</label>
                        <Dropdown placeholder='Search ...' search selection options={categoryOptions} onChange={this.handleDropdownChange} />
                    </Form.Field>
                    <Form.Field>
                      <label>Additional Info</label>
                      <TextArea placeholder='Eg: Transaction details' onChange={this.handleChange('additional_info')}/>
                    </Form.Field>
                  </Form>
            </Modal.Body>
        )

        return (
            <>
            {button}
              <Modal show={this.state.show} onHide={this.handleClose}>
                  {header}
                  {body}
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="success" onClick={() => this.updateWalletOnSave()}
                  disabled={!(this.state.amount && this.state.category)}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
        )
    }
}

export default FormComponent
