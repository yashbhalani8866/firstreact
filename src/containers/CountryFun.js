import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {

    const [countryName,setCountryName] = useState('India');

    const ChangeName = () => {
        setCountryName('UK')
    }

    return (
        <div>
            <h2>Country: {countryName}</h2>
            <button onClick={ChangeName}>Change Country</button>
            <CityFun cname = {countryName}/>
        </div>
    );
}

export default CountryFun;