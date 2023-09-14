import React, { useEffect, useState } from 'react';

function Product(props) {

    const [product, setProduct] = useState([])


    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProduct(data)
        console.log(data);
    }


    useEffect(() => {
        getData();
    }, [])

    return (


        <div className='wrap'>



            {product.map((v, i) => {
                return (
                    <div class="box">
                        <div class="box-top">
                            <h4>{v.category}</h4><br></br>
                            <img class="box-image" src={v.image}></img>
                            <div class="title-flex">
                                <h4 class="box-title">{v.title}</h4>
                                <p class="user-follow-info">Rating {v.rating.rate}</p>
                            </div>
                            <p class="description">{v.description}</p>
                        </div>
                        <a href="#" class="button">$ {v.price}</a>
                    </div>

                );
            })}
        </div>
    );
}

export default Product;