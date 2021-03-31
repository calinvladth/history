import React from 'react'

const Total = ({revenue, total, currency}) => {
    return (
        <div className="totalByTypeBox">
            <h4 className="totalByTypeBox__title">Total {revenue ? 'Revenue' : 'Spending'}</h4>
            <div className="totalByTypeBox__total">
                <h1>{total} {currency}</h1>
            </div>
        </div>
    )
}

export default Total
