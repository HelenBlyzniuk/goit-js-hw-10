function fetchCountryName(countryName) {
    const URL = `https://restcountries.com/v3.name/${countryName}?fields=name.official,capital,population,flag.svg,languages`;   
   
        fetch(URL).then(response => {
            if (!response.ok) {
                throw new Error(response.status);
    }
            return response.json()
        })
}
        
export default  (fetchCountryName) ;