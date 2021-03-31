import React from 'react'
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Form} from "semantic-ui-react";
import AddIcon from '../../../assets/icons/add_min.png'

export default class CreateCategory extends React.Component {
    state = {
        show: false,
        setShow: false,
        name: ''
    }

    handleClose = () => {
        this.setState({setShow: false, show: false, name: ''})
    }
    handleShow = () => {
        this.setState({setShow: true, show: true})
    }

    handleChange = input => (e) => {
        this.setState({[input]: e.target.value})
    }

    submit() {
        const finalCreateForm = {name: this.state.name}
        this.props.post_category(finalCreateForm)
        this.handleClose()
    }

    title = 'Create Category'

    body = (
        <Form>
            <Form.Field>
                <label>Category Name</label>
                <input type="text" onChange={this.handleChange('name')}/>
            </Form.Field>
        </Form>
    )



    render() {
        return (
            <>
            <Button className="categoryAddButton" variant="link" onClick={() => this.handleShow()}><img src={AddIcon} alt=""/></Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>{this.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => this.submit()}
                    disabled={!(this.state.name)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }

}
