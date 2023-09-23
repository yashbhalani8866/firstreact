import styled from "styled-components";



export const MainDiv = styled.div `    
    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
    position: relative;
    margin: 25px auto;
    width: 450px;
    padding: 20px;
    box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    border: 0;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const Title = styled.h2`
    font-size: 2rem;
    color: purple;
`

export const Desc = styled.h6`
    font-size: 1.1rem;
    color: darkorchid;
    font-style: italic;
`

export const LinkTag = styled.a`
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
    text-decoration: underline;
    text-align: center;
`
export const Heading4 = styled.h4`
    font-size: 1.5rem;
    color:darkslategrey;
`


