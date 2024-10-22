/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Countryall.css'
const Countryall = ({ countryall }) => {
    // console.log(countryall)
    const { name, flags, population, area, cca3 } = countryall;


    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`countryall ${visited ? 'visited' : 'non-visited'} `} >
            <h3 style={{ color: visited ? 'purple' : 'white' }} >Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handelVisited} >{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit '}

        </div>
    );
};

export default Countryall;