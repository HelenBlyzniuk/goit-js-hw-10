import './css/styles.css';
import fetchCountryName  from './fetchCountries.js';
import debounce from 'lodash.debounce';

refs = {
    inputEl: document.querySelector('#search-box'),
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
    .then(data => { console.log(data) })
    .catch (error =>{ console.log(error)})
    
}

      

  