import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function BarChart(props){
    var genres = props.genres


    var genreTime = []
    for (let key in props.genreTime){
        genreTime.push(props.genreTime[key]/60)
    }
    return(
        <div >
            <Doughnut
                data={{
                    labels: genres,
                    datasets: [{
                        data:genreTime,
                        backgroundColor: [
                            '#ff3d5d',
                            '#ff3d5d70',
                            '#ff3d5d',
                            '#ff3d5d90',
                            '#ff3d5d60',
                            '#ff3d5d',
                            '#ff3d5d50',
                            '#ff3d5d',
                            '#ff3d5d80',
                        ]
                    }
                ]
                }
                }
                width={350}
                height={350}
                options={{
                    maintainAspectRatio: true,
                    legend:{
                        fontSize: 20,
                        width:200,
                        height:200,
                    }
                }}
            />
        </div>
    )
}