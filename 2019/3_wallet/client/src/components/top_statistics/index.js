import React from 'react'
import './index.sass'
import {top_statistics} from "../../redux/actions/top_statistics";
import {connect} from "react-redux";
import Top from "./components/top";
import Total from "./components/total";
import CashFlow from "./components/cashflow";

class TopStatistics extends React.Component {
    componentDidMount() {
        this.props.top_statistics()
    }

    render() {

        const top_total = (
            <div>
                <div className="topByType">
                    {this.props.top.top_spending.length > 0?
                        <Top chart_data={this.props.top.top_spending} revenue={false}/> :
                        null}

                    {this.props.top.top_revenue.length > 0 ?
                    <Top chart_data={this.props.top.top_revenue} revenue={true}/> :
                    null}
                </div>

                 <div className="topByType">
                    <Total revenue={false} total={this.props.top.total_spending} currency={this.props.auth.currency.mark}/>
                    <Total revenue={true} total={this.props.top.total_revenue} currency={this.props.auth.currency.mark}/>
                </div>

                <div className="cashFlowBox">
                    <CashFlow total={this.props.top.cash_flow} currency={this.props.auth.currency.mark} />
                </div>
            </div>

        )

        return (
            <div>
                {this.props.top.top_spending.length === 0 && this.props.top.top_revenue.length === 0?
                null :
                top_total}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {auth, top} = state
    return {
        auth,
        top
    }
}

const mapDispatchToProps = dispatch => {
    return {
        top_statistics: () => dispatch(top_statistics())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopStatistics)
