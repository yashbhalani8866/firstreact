import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName: 'India'
        }
    }

    ChangeName = () => {
        this.setState ({
            countryName: 'UK'
        })
    }
    

    render() {
        return (
            <div>
                <h1>Country</h1>
                <h2>Our Country: {this.state.countryName}</h2>
                
                <button onClick={this.ChangeName}>Change Country</button>

                <City countryName = {this.countryName}/>

            </div>
        );
    }
}

export default Country;