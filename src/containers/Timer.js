import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        console.log("tick");
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.Timer = setInterval(() => this.tick(),1000)
    }
    
    componentDidUpdate = (prevprops,prevstate) => {
        
        if(this.state.time !== prevstate.time) {
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.time)
    }

    render() {
        return (
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Timer;