import React,{useState} from 'react';
import { NativeSelect,FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

export default function CountryPicker({countries, handleCountryChange}) {
  // eslint-disable-next-line no-unused-vars
  const [fetchedCountries,setFetchedCountries] = useState(countries)



  return (
    <FormControl className={styles.formControl} >
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} >
        <option value="global"> Global</option>
        {fetchedCountries.map((country,i) => <option key={i} value={country}> {country} </option>)}
      </NativeSelect>
    </FormControl>
  );
}
