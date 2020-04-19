import axios from 'axios';


class Api {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: 'https://covid19.mathdro.id/api',
    });
  }

  async loadStats() {
    const response = await this.apiInstance.get('/')
    const {confirmed,recovered,deaths,lastUpdate} = response.data
    return {confirmed,recovered,deaths,lastUpdate} ;
  }

  async loadDailyReports() {
    const response = await this.apiInstance.get('/daily') 
      return response.data;
    }
  async loadCountries() {
    const response = await this.apiInstance.get(`/countries`)
    return response.data.countries;
  }
  async loadByCountry(country) {
    const response = await this.apiInstance.get(`/countries/${country}`)
    return response.data;
  }
  
}
const api = new Api()
export const apiInstance = api.apiInstance 

export default api;
