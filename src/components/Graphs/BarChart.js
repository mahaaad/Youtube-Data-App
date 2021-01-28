import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart(props){
  
  var data = props.data
  var mostWatched = ""
  var channelTitles = []
  for (let key in data){
    channelTitles.push(key)
  }
  var channelData = []
  for (let key in data){
    channelData.push(data[key]/6)
  }

  return(
      <div>
          <Bar 
              data={{
                  labels:channelTitles.splice(0,10),
                  datasets: [{
                      data:channelData.splice(0,10),
                      backgroundColor: '#ff3d5d',
                  },
              ],
              }}
              width={80}
              height={75}
              options={{
                  maintainAspectRatio: true,
                  scales: {
                    xAxes: [{
                      barPercentage: 1,
                      fontSize: 15
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
                    display: false
                  },
                }}
          />
      </div>
  )
}