import './css/styles.css';
import fetchCountryName  from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
 

refs = {
    inputEl: document.querySelector('#search-box'),
    listEl: document.querySelector('.country-list'),
    divEl: document.querySelector('.country-info'),
}
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
refs.inputEl.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));
// refs.inputEl.addEventListener('select', (e) => {
//     refs.listEl.innerHTML = '';
//     refs.divEl.innerHTML = '';
// })

// window.addEventListener('keydown', onKeyDown);

// function onKeyDown(e) {
//     console.log(e.key);
//     if (e.key.nodeName === "BACKSPACE" && refs.inputEl.value === '') {
//               refs.listEl.innerHTML = '';
//               refs.divEl.innerHTML = '';
//     }
//    console.log(refs.inputEl.value)  
    
// }


function onCountryInput(e) {
    let countryName = e.target.value.trim();
    console.log(countryName)
    if (countryName === '') {
        return
    }
    fetchCountryName(countryName)
      
        
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.success('Too many matches found. Please enter a more specific name.');
                
            } if (data.length >= 2 && data.length <= 10) {
                if (!refs.divEl.innerHTML) {
                    return
                }
                refs.divEl.innerHTML = '';
                refs.listEl.innerHTML = markupForSymbols(data);
            } if (data.length === 1) {
                refs.listEl.innerHTML = '';
                console.log(data)
                refs.divEl.innerHTML = markupForCountry(data); 
            } 
           
        })
        .catch(error => {
            console.log(error)
        Notiflix.Notify.warning('Oops, there is no country with that name');})
    
}

function markupForSymbols(array) {
    return array.map(({ name, flags }) => {
        return `
            
            <p><img src="${flags.svg}" alt="flag of ${name.official}" width="50" height="30"> ${ name.official }</p>`
       }).join('');
}  
   
function markupForCountry(array) {
    return array.map(({ name, capital, population, flags, languages}) => {
        return ` <p class = "title"><img src="${flags.svg}" alt="flag of ${name.official}" width="50" height="30"> ${ name.official }</p>
            <p><span> Capital:</span> ${capital}</p>
            <p><span> Population:</span> ${population} people</p>
            <p><span> Languages:</span> ${ Object.values(languages) }</p>`
    }).join('');
             
}

