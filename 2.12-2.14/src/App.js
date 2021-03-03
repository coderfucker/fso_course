import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])

  const hook = (keyword = '') => {
    console.log('effect')
    if (keyword) {
      axios
        .get('https://restcountries.eu/rest/v2/name/' + keyword)
        .then(response => {
          console.log(response)
          setCountries(response.data)
        })
    }
  }

  useEffect(hook, [])

  const handleFilterBlur = event => {
    const filter = event.target.value
    hook(filter)
  }
  return (
    <div>
      <div>
        find countries <input onBlur={handleFilterBlur} />
      </div>
      <Country countries={countries} />
    </div>
  )
}

export default App
