const Country = ({countries}) => {
  if (countries.length > 1 && countries.length < 10) {
    return (<ul>
      {countries.map(country =>
        <li key={country.name}>{country.name}</li>
      )}
    </ul>)
  } else if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <ul>
          {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img alt="flag" src={country.flag} style={{width: 100, height: 100}} />
      </div>
    )
  } else {
    return <p>Too many matches, specify another fiilter</p>
  }
}

export default Country
