export default function fetchCountryName(countryName) {
    const URL = `https://restcountries.com/v3.1/name/${countryName}?fields=name.official,capital,population,flags.svg,languages`;   
   
       return fetch(URL).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
    }
            return response.json()
        })
};
        
