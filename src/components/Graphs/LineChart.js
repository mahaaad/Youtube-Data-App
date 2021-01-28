import React from 'react'
import {  Line } from 'react-chartjs-2'

export default function LineChart(){
    return(
        <div>
            <Line 
                data={{
                    labels:['a','b','c','d','e','f','g','h','i','j'],
                    datasets: [{
                        data:[2,2,3,4,6,7,8,8,9,7],
                        backgroundColor: '#ff3d5d75',
                    },
                ],
                }}
                width={25}
                height={12.5}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                      xAxes: [{
                        ticks:{
                          fontSize: 15
                        }
                      }],
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                            fontSize: 15
                          },
                        },
                      ],
                    },
                    legend: {
                      display: false,
                    },
                  }}
            
            />
        </div>
    )
}