import React, { useEffect, useState } from 'react';

function Product(props) {

    const [product, setProduct] = useState([])
    const [search,setSearch] = useState('');
    const [filterData,setFilterData] = useState('');


    const getData = async () => {
        const response = await fetch("https://type.fit/api/quotes");

        const data = await response.json();
        setProduct(data)
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [])

    const handleSearch = (value) => {
        setSearch(value);
        let Fdata = product.filter((v) => 
        v.text.toLowerCase().includes(value.toLowerCase()) ||
        v.author.toLowerCase().includes(value.toLowerCase())   
        ) 
        setFilterData(Fdata)
    }

    const FinalData = setFilterData.length > 0 ? filterData : product ;

    return (
        <>
        <input placeholder='search' style={{width: "500px",height: "50px"}} onChange={(event) => handleSearch(event.target.value)}/>
        <div className='row'>
            
            {FinalData.map((v, i) => {
                return (
                        <div className="col-md-4" style={{width: "300px",height: "150px"}}>
                            <h4>{v.text}</h4>
                            <p>{v.author}</p>
                        </div>
                );
            })}
        </div>

        </>
    );
}

export default Product;