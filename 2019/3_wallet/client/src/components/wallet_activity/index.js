import React from "react"
import Table from "react-bootstrap/Table";
import './index.sass'
import {delete_wallet_activity, get_wallet_activity, put_wallet_activity} from "../../redux/actions/wallet_activity";
import {connect} from "react-redux";
import ListComponent from "./components/list";
import TablePagination from "../pagination";

class WalletActivity extends React.Component {

    componentDidMount() {
        this.props.get_wallet_activity()
    }

    table () {
        if (this.props.wallet_activity.data.length > 0) {
            return (
            <div className="fullWidth">
                <h1 className="activity__title">Activity History</h1>
                <Table striped bordered hover>
                      <thead>
                            <tr>
                                <th>#id</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Created at</th>
                                <th>Details</th>
                                <th>Actions</th>
                            </tr>
                      </thead>
                      <tbody>
                        {this.tableData()}
                      </tbody>
                </Table>
                <div className="paginationBox">
                    <TablePagination
                    page={this.props.wallet_activity.page}
                    pages={this.props.wallet_activity.pages}
                    action={this.props.get_wallet_activity}
                />
                </div>
            </div>
        )
        } else {
            return (
                <div className="noTransaction">
                    <h1 className="noTransaction__title">No transaction has been tracked</h1>
                    {/*<p className="noTransaction__subtitle"></p>*/}
                </div>
            )
        }
    }

    tableData() {
        return <ListComponent wallet_activity={this.props.wallet_activity}
                               categories={this.props.categories}
                               currency={this.props.auth.currency.mark}
                               put_wallet_activity={this.props.put_wallet_activity}
                               delete_wallet_activity={this.props.delete_wallet_activity}/>
    }

    render() {
        return (
            <div className="activity">

                {this.table()}

            </div>
        )
    }
}

const mapStateToProps = state => {
    const {auth, wallet_activity, categories} = state
    return {
        auth,
        wallet_activity,
        categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get_wallet_activity: (query) => dispatch(get_wallet_activity(query)),
        put_wallet_activity: (data) => dispatch(put_wallet_activity(data)),
        delete_wallet_activity: (data) => dispatch(delete_wallet_activity(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletActivity)
