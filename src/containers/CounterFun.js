import React, { useState } from 'react';

function CounterFun(props) {

    const [num, setNumber] = useState(0);

    const HandlePlus = () => {
        setNumber(num + 1)
    }

    const HandleMinus = () => {
        setNumber(num - 1)
    }

    return (
        <div>
            <h2>Counter function</h2>
            <button onClick={HandlePlus}>+</button>
            {num}
            <button onClick={HandleMinus}>-</button>
        </div>
    );
}

export default CounterFun;