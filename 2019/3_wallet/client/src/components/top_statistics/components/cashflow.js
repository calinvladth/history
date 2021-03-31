import React from 'react'

const CashFlow = ({total, currency}) => {
    return (
        <div className="cashFlowBox">
            <h4 className="cashFlowBox__title">Cash Flow</h4>
            <div className="cashFlowBox__total">
                <h1>{total} {currency}</h1>
            </div>
        </div>
    )
}

export default CashFlow
