import React, { useEffect, useState } from 'react';

function Quatos(props) {

    const [isLoading, setLoading] = useState(true);
    const [qData, setQdata] = useState([]);
    const [index, setIndex] = useState(0);

    const getData = async () => {
        const response = await fetch("https://type.fit/api/quotes");

        const data = await response.json()
        console.log(data);
        setQdata(data);
        setLoading(false);

    }

    useEffect(() => {
        getData();
    }, [])

    const handlePrev = () => {
        let newIndex = index - 1

        setIndex(newIndex);
    }

    const handlenext = () => {
        let newIndex = index + 1

        setIndex(newIndex);
    }

    return (
        <div>
            {isLoading ? <h2>Loading...</h2> :
                <>
                    <h2>{qData[index].text}</h2>
                    <h3> ---- {qData[index].author}</h3>
                    <button onClick={handlePrev} disabled = {index === 0 ? true : false}>
                        Previus
                    </button>
                    <button onClick={handlenext} disabled = {index === qData.length - 1 ? true : false}>
                        next
                    </button>
                </>
            }
        </div>
    );
}

export default Quatos;