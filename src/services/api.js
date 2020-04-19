import axios from 'axios';


class Api {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: 'https://covid19.mathdro.id/api',
    });
  }

  async loadStats(country) {
    let endpointUrl = '/';

    if(country) {
      endpointUrl = `/countries/${country}`
    }

    const response = await this.apiInstance.get(endpointUrl)
    const {confirmed,recovered,deaths,lastUpdate} = response.data
    return {confirmed,recovered,deaths,lastUpdate} ;
  }

  async loadDailyReports() {
    const response = await this.apiInstance.get('/daily')
    const modifiedData = response.data.map(dailyReport => ({
      confirmed:dailyReport.confirmed.total,
      deaths:dailyReport.deaths.total,
      date:dailyReport.reportDate
    }))  
      return modifiedData;
    }
  async loadCountries() {
    const {data:{countries}} = await this.apiInstance.get(`/countries`)
    const namesCountries = countries.map(country => country.name)
    return namesCountries;
  }
  
}
const api = new Api()
export const apiInstance = api.apiInstance 

export default api;
