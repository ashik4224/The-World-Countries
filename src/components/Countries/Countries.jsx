import { useEffect } from "react";
import { useState } from "react";
// import Country from "../country/country";
import Countryall from "../Country/Countryall";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/* {
                countries.map(country => <Country key={country.cca3}  country={country} ></Country>)
            } */}

            <div className="country-container">
            {
                countries.map(countryall => <Countryall key={countryall.cca3}
                countryall={countryall} ></Countryall>   )
            }
            </div>
            
        </div>
    );
};

export default Countries;