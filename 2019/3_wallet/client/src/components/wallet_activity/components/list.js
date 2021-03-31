import React from "react";
import moment from 'moment'
import EditComponent from "./edit";
import DeleteComponent from "./delete";
class ListComponent extends React.Component {

    render() {
        return (
        this.props.wallet_activity.data.map(activity =>
        <tr key={activity.id}>
            <td>{activity.id}</td>
            <td>{activity.amount.toFixed(2)} {this.props.currency}</td>
            <td>{activity.revenue ? 'Revenue' : 'Spending'}</td>
            <td>{activity.category.name}</td>
            <td>{moment(activity.created_at).fromNow()}</td>
            <td className="tableText">{activity.additional_info ? activity.additional_info : 'N/A'}</td>
            <td>
                <div>
                    <EditComponent
                        activity={activity}
                        categories={this.props.categories}
                        put_wallet_activity={this.props.put_wallet_activity}/>

                    <DeleteComponent
                        activity={activity}
                        delete_wallet_activity={this.props.delete_wallet_activity}
                    />
            </div>
            </td>
        </tr>)
        )
    }

}

export default ListComponent
