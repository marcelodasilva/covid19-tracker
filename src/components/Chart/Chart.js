import React, {useState} from 'react';
import {Line,Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'

export default function Chart({reports,stats:{confirmed,recovered,deaths},country}) {
  // eslint-disable-next-line no-unused-vars
  const [dailyReports,setDailyReports] = useState(reports)
  const lineChart = (
    <Line data={{
      labels:dailyReports.map((({date}) => date)),
      datasets:[{
        data: dailyReports.map(({confirmed})=>confirmed),
        label: 'Infected',
        borderColor:'#3333',
        fill:true
      },{
        data: dailyReports.map(({deaths})=>deaths),
        label: 'Deaths',
        borderColor:'red',
        backgroundColor:'rgba(255,0,0,0.5)',
        fill:true
      }]
    }} />
  );

  const barChart = (
    <Bar data={{
      labels: ['Infected','Recovered','Deaths'],
      datasets:[{
        label:'People',
        backgroundColor:['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
        data: [confirmed.value,recovered.value,deaths.value]
      }]
      
    }} options={{
      legend: {display: false },
      title:{display:true,text:`Current state in ${country}`}
    
    }} />
  )
  return (
   <div className={styles.container}>
     {country === 'global'? lineChart : barChart }
   </div>
  );
}
