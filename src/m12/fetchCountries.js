'use strict'

// let coutries = 'swa'

export default function fetchCountries(name) {
  const country = document.querySelector('.list-country')
  const countryInfo = document.querySelector('.country-info')
  country.innerHTML = ''
  countryInfo.innerHTML = ''
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())

}
