import React from 'react';

function CityFun(props) {
    return (
        <div>
            <h3>City Name: {props.cname === 'India' ? 'Surat' : 'London'}</h3>
        </div>
    );
}

export default CityFun;