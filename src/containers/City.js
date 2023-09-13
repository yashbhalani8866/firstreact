import React, { Component } from "react";

class City extends Component {

    render() {
        return (
            <div>
                <h2>City</h2>
                <h3>City Name: {this.state.CityName}</h3>
                
                <button onClick={this.ChangeCity}>Change City</button>

                <this.props City ={this.state.countryName === "India" ? "Surat" : "London"} />
            </div>
        );
    }
}

export default City;