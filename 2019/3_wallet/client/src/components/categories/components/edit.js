import React from 'react'
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Form} from "semantic-ui-react";
import EditIcon from '../../../assets/icons/edit.png'

export default class EditCategory extends React.Component {
    state = {
        show: false,
        setShow: false,
        name: this.props.category.name,
        id: this.props.category.id
    }

    handleShow = () => {
        this.setState({
            setShow: true,
            show: true,
            name: this.props.category.name,
            id: this.props.category.id
        })
    }

    handleClose = () => {
        this.setState({setShow: false, show: false, name: '', id: undefined})
    }

    handleChange = input => (e) => {
        this.setState({[input]: e.target.value})
    }

    submit() {
        const finalEditForm = {name: this.state.name, id: this.state.id}
        this.props.put_category(finalEditForm)
        this.handleClose()
    }

    render() {
        const {show, name} = this.state
        return (
            <>
            <Button className="categoryAddButton" variant="link" onClick={() => this.handleShow()}><img src={EditIcon} alt=""/></Button>
            <Modal show={show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Field>
                            <label>Category Name</label>
                            <input type="text" defaultValue={name}  onChange={this.handleChange('name')} />
                        </Form.Field>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => this.submit()}
                    disabled={!(name)}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }

}
