import React, { useEffect, useState } from 'react';

function NewProduct(props) {

    const [product, setProduct] = useState([]);
    const [search,setSearch] = useState('');
    const [filterData,setFilterData] = useState('');
    const [category,setCategory] = useState([]);


    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products")

        const data = await response.json();

        

        setProduct(data.products);

    }
    console.log(category);
    useEffect(() => {
        getData();
    }, [])

    const handleSearch = (value) => {
        setSearch(value);
        let Fdata = product.filter((v) => 
            v.category.toLowerCase().includes(value.toLowerCase())
            )
        setFilterData(Fdata);


    }

    const FinalData = filterData.length > 0 ? filterData : product ;



    return (
        <>
            <button onClick={() => handleSearch('smartphones')}>smartphones</button>
            <button onClick={() => handleSearch('laptops')} >laptops</button>
            <button onClick={() => handleSearch('fragrances')} >fragrances</button>
            <button onClick={() => handleSearch('skincare')} >skincare</button>
            <button onClick={() => handleSearch('groceries')} >groceries</button>
            <button onClick={() => handleSearch('home-decoration')} >home-decoration</button>
            <button onClick={() => handleSearch('')} >All</button>
{/* 
            <div>
                
            </div> */}

            <div className='row'>
                {FinalData.map((v) => {
                    return (
                        <div className='col-md-4' style={{  border: '1px solid black', padding: '50px'}}>
                            <h3>{v.brand}</h3>
                            <img src={v.images[0]} style={{width: '200px',height:'150px'}}/> 
                            <h4>$ {v.price}</h4>
                            <p>{v.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default NewProduct;