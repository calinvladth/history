import React from 'react'
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DeleteIcon from "../../../assets/icons/delete.png";
import moment from 'moment'
import '../index.sass'

class DeleteComponent extends React.Component {
    state = {
        setShow: false,
        show: false
    }

    handleShow = () => {
        this.setState({show: true, setShow: true})
    }

    handleClose = () => {
        this.setState({show: false, setShow: false})
    }

    deleteWalletActivity() {
        this.props.delete_wallet_activity(this.props.activity)
        this.handleClose()
    }

    render() {
        return (
            <>
                <Button variant="link" size="sm" onClick={() => this.handleShow()}>
                    <img src={DeleteIcon} alt=""/>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Are you sure you want to delete:
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="removeStyle__title">
                            Amount: <span className="removeStyle__detail">{this.props.activity.amount}</span>
                        </h6>
                        <h6 className="removeStyle__title">
                            Transaction type:
                            <span className="removeStyle__detail">{this.props.activity.revenue ? ' Revenue' : ' Spending'}</span>
                        </h6>
                        <h6 className="removeStyle__title">
                            Created at: <span className="removeStyle__detail">{moment(this.props.activity.created_at).format('llll')}</span>
                        </h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => this.deleteWalletActivity()}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DeleteComponent
