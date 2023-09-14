import React, { useEffect, useState } from 'react';

function ProductFun(props) {

    const [searchVal, setSearchVal] = useState('');
    const [product, setProduct] = useState([])

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProduct(data)
        console.log(data);
    }

    function handleSearchClick() {
        // if (searchVal === "") { setProduct(product); return; }
        const filterBySearch = product.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) 

                 return(item); 
        })
        setProduct(filterBySearch);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
        <div>
            <input onChange={e => setSearchVal(e.target.value)}>
            </input>
            <button onClick={handleSearchClick}> </button>
        </div>
        <div>

            {product.map((p) => {
                return (
                    <div>{p}</div>
                )
            })
            }

        </div>
    </div>
    );
}

export default ProductFun;