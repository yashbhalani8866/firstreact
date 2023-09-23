import React from 'react';
import { MainDiv } from './AllProduct.style';



function AllProduct({children , ...rest}) {
    return (

        <MainDiv {...rest}>
            {children}
        </MainDiv>
    );
}

export default AllProduct;