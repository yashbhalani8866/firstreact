import React, { useEffect, useState } from 'react';

function Product(props) {

    const [product, setProduct] = useState([])
    const [search,setSearch] = useState('');
    const [sort,setSort] = useState('');
    const [category,setCategory] = useState([]);


    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products");

        let data = await response.json();

        setProduct(data.products)

        let unique = [];

        data.products.map(v => {
            if(!unique.includes(v.category)) {
                unique.push(v.category)
            }
        })
        setCategory(unique)
        console.log(unique);
    }

    useEffect(() => {
        getData();
    }, [])

    const handleSearchSort = () => {
        
        let Fdata = product.filter((v) =>  {
            return(
                v.category.toLowerCase().includes(search.toLowerCase()) ||
                v.description.toLowerCase().includes(search.toLowerCase()) ||
                v.price.toString().includes(search.toString()) ||
                v.title.toLowerCase().includes(search.toLowerCase())
            )
        }) 

        Fdata = Fdata.sort((a,b) => {
            if(sort === "lh") {
                return a.price - b.price
            } else if (sort === "hl") {
                return b.price - a.price
            }
            else if (sort === "az") {
                return a.category.localeCompare(b.category)
            }
            else if (sort === "za") {
                return b.category.localeCompare(a.category)
            }
        })
        console.log(Fdata);        return Fdata  
    }

    const FinalData = handleSearchSort();

    return (
        <>
        <input placeholder='search' style={{width: "500px",height: "50px"}} onChange={(event) => setSearch(event.target.value)}/>
        
        <select onChange={(event) => setSort(event.target.value)}>
            <option value={"0"}>--select--</option>
            <option value={"lh"}>Price (Low to High)</option>
            <option value={"hl"}>Price (High to Low)</option>
            <option value={"az"}>title (A-Z)</option>
            <option value={"za"}>Title (Z-A)</option>
        </select>

        <div>
            {category.map((c) => {
                return(<button>{c}</button>)
                
            })}
        </div>

        <div className='row'>
            
            {FinalData.map((v, i) => {
                return (
                        <div className="col-md-4" style={{  border: '1px solid black', padding: '50px'}}>
                            <h3>{v.brand}</h3>
                            <img src={v.images[0]} style={{width: '200px',height:'150px'}}/> 
                            <h4>$ {v.price}</h4>
                            <p>{v.description}</p>
                        </div>
                );
            })}
        </div>
        
        </>
    );
}

export default Product;