import './css/styles.css';
import fetchCountryName  from './fetchCountries.js';
import debounce from 'lodash.debounce';
 

refs = {
    inputEl: document.querySelector('#search-box'),
    listEl: document.querySelector('.country-list'),
    divEl: document.querySelector('.country-info'),
}
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
refs.inputEl.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput(e) {
    let countryName = e.target.value;
    if (countryName === '') {
        return
    }
    fetchCountryName(countryName)
        // .then(data => {console.log(data)})
        .then(data => {
            if (data.length > 10) {
                alert ("Too many matches found. Please enter a more specific name.")
            } if(data.length >=2 && data.length <=10) {
                refs.listEl.innerHTML = markupForSymbols(data);
            } if (data.length === 1) {
                refs.listEl.innerHTML = '';
                console.log(data)
                refs.divEl.innerHTML = markupForCountry(data); 
            } 
           
        })
    .catch (error =>{ console.log(error)})
    
}

function markupForSymbols(array) {
    return array.map(({ capital, name }) => {
        return `
            <p>${capital}</p>
            <p>${ name }</p>`
       }).join('');
}  
   
function markupForCountry(array) {
    return array.flatMap(({name, capital, population, flag, languages}) => {
        return `<p>${name}</p>
            <p>${capital}</p>
            <p>${population}</p>
            <img src="${flag}" alt="flag of ${name}">
            <p>${ languages }</p>`
    }).join('');
             
}

//   const markup = dataFromLS.map(({ task, id }) => {
//     return `<li><p> ${task}</p> <button type ="button" data-id ="${id}"> Delete </button> </li> `
//   }).join('');