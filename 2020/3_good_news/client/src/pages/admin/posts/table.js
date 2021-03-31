import React, {Component} from 'react';

const moment = require('moment')
const moment_tz = require('moment-timezone')

class LogsTableComponent extends Component {

    formatTime = (time) => {
        const timezone = moment_tz.tz.guess()
        const date = moment.unix(time)
        return moment_tz(date).tz(timezone).fromNow()
    }

    render() {
        const {logs} = this.props
        return (
            <div className="overflow-auto">
                <table className="f4 w-100 center" cellSpacing="0">
                    <thead>
                    <tr className="stripe-dark">
                        <th className="fw6 tl pa3 bg-white">Date</th>
                        <th className="fw6 tl pa3 bg-white">Created</th>
                        <th className="fw6 tl pa3 bg-white">Failed</th>
                        <th className="fw6 tl pa3 bg-white">Total</th>
                        <th className="fw6 tl pa3 bg-white">Last Days *n</th>
                        <th className="fw6 tl pa3 bg-white">Status</th>
                    </tr>
                    </thead>
                    <tbody className="lh-copy">
                    {
                        logs.map(log =>
                            <tr className="stripe-dark" key={log.id}>
                                <td className="pa3">{this.formatTime(log.created)}</td>
                                <td className="pa3">{log.created_posts}</td>
                                <td className="pa3">{log.failed_posts}</td>
                                <td className="pa3">{log.total_posts}</td>
                                <td className="pa3">{log.days}</td>
                                <td className="pa3">{log.status}</td>
                            </tr>)
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default LogsTableComponent;