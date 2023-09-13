import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            num: 0
        }
    }

    HandlePlus = () => {
        if(this.state.num < 5) {
            this.setState({
                num : this.state.num + 1
            })
        }
           
    }

    HandleMinus = () => {
        if(this.state.num > 0) {
            this.setState({
                num : this.state.num - 1
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <button onClick={this.HandlePlus}>+</button>
                {this.state.num}
                <button onClick={this.HandleMinus}>-</button>
            </div>
        );
    }
}

export default Counter;