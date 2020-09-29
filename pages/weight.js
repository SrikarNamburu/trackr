import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Line } from 'react-chartjs-2';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"]
const graphLabel = "Weight"

const Year = {
  labels: months,
  datasets: [
    {
      label: graphLabel,
      data: [33, 53, 85, 41, 44, 65, 65, 76, 94, 38, 28, 37],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const Week = {
  labels: days,
  datasets: [
    {
      label: graphLabel,
      data: [13, 53, 85, 91, 84, 65, 25],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

function fn1()
{
  var wt = document.getElementById("todayWeight").value;
  var d = new Date();
  var date = d.getDate();
  var hr = d.getHours();
  var min = d.getMinutes();  
  console.log(d, date, hr, min)  
  console.log(wt)
}

export default function weight() {

    const [graphData, setGraphData] = useState(Year)

  return (
    <div className={styles.container}>
        <Head>
          <title>Track your Weight</title>
          <link rel="icon" href="/weight-scale-icon.svg" />
        </Head>
        
        <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="/main-icon.svg" alt="Trackr Logo" className={styles.logo} />
          </a>
        </Link>
        </header>
        <div className={styles.chart}>
        <Line data={graphData}/>
        </div>  
        
        <div className={styles.buttongrid}>
          <button className={styles.button} onClick={() => setGraphData(Week)}>
            <h3>Last Week</h3>
          </button>
          <button className={styles.button}>
            <h3>Last Month</h3>
          </button>
          <button className={styles.button} onClick={() => setGraphData(Year)}>
            <h3>Last Year</h3>
          </button>
          <button className={styles.button}>
            <h3>All Time</h3>
          </button>
          
        </div>
        <br></br><br></br><input id = "todayWeight" type="number" placeholder = "Enter today's weight"></input><br></br>
        <button className={styles.button} onClick ={()=>fn1()} > <h3>Update</h3> </button>
        
        
    </div>
    ) 
  }