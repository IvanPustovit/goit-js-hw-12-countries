
import country from './fetchCountries';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import info from './countryInfo.hbs'

const input = document.querySelector('#search-form')

input.addEventListener('input', inputSearch)

function inputSearch(e){
    e.preventDefault()
    const value = input.value;
    if(value.length >= 3){
       country(value)
    .then(data => {
        if(data.length == 1){
            renderInfoCoutry(data)
        }else{
        data.forEach(element => {
            let name = element
            render(element)
        }
    )}})
    .catch(PNotify.alert('Уточніть Ваш пошук')
    )
}}

//Розмітка списку країн
function renderList(countryName){
    return `<li>${countryName}</li> `
}

function render (obj){
    const listCountry = document.querySelector('.list-country')
    listCountry.insertAdjacentHTML('beforeend', renderList(obj.name))
}

//Розмітка опису однієї країни
function renderInfoCoutry(obj){
    const countryInfo = document.querySelector('.country-info')
    countryInfo.insertAdjacentHTML('beforeend', info(obj))
}

