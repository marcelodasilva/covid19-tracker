import React,{useState,useEffect} from 'react';


import Cards from '../../components/Cards/Cards'
import Chart from '../../components/Chart/Chart'
import CountryPicker from '../../components/CountryPicker/CountryPicker'
import Loading from '../../components/Loading/Loading'

import imageLogo from '../../assets/image.png'


import api from '../../services/api'
import styles from './Home.module.css'


export default function Home() {
  const [loading,setLoading] = useState(true)
  const [stats,setStats] = useState({});
  const [reports,setReports] = useState([]);
  const [countries,setCountries] = useState([])
  const [selectedCountry,setSelectedCountry] = useState('global')
 
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
    },1000)
  },[])

  const handleCountryChange = async (country) => {
    setSelectedCountry(country)
  }

  useEffect(()=>{
    async function loadData(country) {
      if (selectedCountry === 'global') {
        setStats(await api.loadStats())
      } else {
        setStats(await api.loadStats(selectedCountry))
      }

    }
    loadData()
  },[selectedCountry])


 

  return (
    loading ?  <Loading/>  : <div className={styles.container} >
    <img className={styles.imgLogo} src={imageLogo} alt="COVID-19" ></img>
    <Cards data={stats} />
    <CountryPicker countries={countries} handleCountryChange={handleCountryChange} />
    <Chart reports={reports} country={selectedCountry} stats={stats} />
  </div>
  );
}
