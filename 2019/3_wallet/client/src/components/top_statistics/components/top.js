import React from 'react'
import {Bar} from 'react-chartjs-2';


const Top = ({chart_data, revenue}) => {

    let topSpendingData = []
    let labels = []
    let backgroundColor = []

    chart_data.forEach(o => {
        labels.push(o.category_name)
        backgroundColor.push(o.color)
        topSpendingData.push(o.total)
    })


    const data = {
        labels: labels,
        datasets: [{
            data: topSpendingData,
            backgroundColor: backgroundColor,
            hoverBackgroundColor: '#941400',
            barThickness: 30
        }]
    };


    return (
        <div className="chartBox">
            <h4 className="chartBox__title">Top {revenue ? 'Revenue' : 'Spending'}</h4>
            <div className="chartBox__chart">
                <Bar
                    height={275}
                    data={data}
                    legend={{display: false}}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Top
