import React,{useState,useEffect} from 'react';


import Cards from '../../components/Cards/Cards'
import Chart from '../../components/Chart/Chart'
import CountryPicker from '../../components/CountryPicker/CountryPicker'
import Loading from '../../components/Loading/Loading'


import api from '../../services/api'
import styles from './Home.module.css'


export default function Home() {
  const [loading,setLoading] = useState(true)
  const [stats,setStats] = useState({});
  const [reports,setReports] = useState([]);
  const [countries,setCountries] = useState([])
  // const [selectedCountry,setSelectedCountry] = useState('')
 
  useEffect(()=>{
    
      async function loadData() {
        const [
          stats,
          reports,
          countries
        ] = await Promise.all(
          [
          await api.loadStats(),
          await api.loadDailyReports(),
          await api.loadCountries()
        ]
        ) 
        setStats(stats)
        setReports(reports)
        setCountries(countries)
      }
      loadData()
      setTimeout(()=>{
        setLoading(false)
    },2000)
  },[])


 

  return (
    loading ?  <Loading/>  : <div className={styles.container} >
    <Cards data={stats} />
    <Chart reports={reports} />
    <CountryPicker countries={countries}/>
  </div>
  );
}
