import './css/styles.css';

const DEBOUNCE_DELAY = 300;


function fetchCountryName(countryName) {
    const URL = `https://restcountries.com/v3.name/${countryName}?fields=name.official,capital,population,flag.svg,languages`;   
   }
        fetch(URL).then(response => {
            if (!response.ok) {
            throw new Error(response.status);
    }
            return response.json()
        })
        .then(data => { console.log(data) })
        .catch (error =>{ console.log(error)})

  