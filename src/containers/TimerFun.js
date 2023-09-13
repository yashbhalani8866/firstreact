import React, { useEffect, useState } from 'react';

function TimerFun(props) {

    const [time,setTime] = useState(new Date())

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const Timer = setInterval(() => tick(),1000)
    },[time])

    return (
        <div>
             <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default TimerFun;