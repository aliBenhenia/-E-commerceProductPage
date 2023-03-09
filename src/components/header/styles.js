import styled from "styled-components";

export const Head = styled.div `
    display: flex;
    overflow-x: hidden;
    .bar
    {
        display: none;
    }
    .nav
    {
        width: 50%;
    }
    .cart
    {
        font-size: 2rem;
        margin-right: 3rem;
    }
    .avatar:hover
    {
            border: 2px solid  red;
    }
    @media only screen and (max-width: 600px) 
    {
        /* .bar
        {
            display: block;
            font-size: 1.6rem;
            margin-right : 10px;
            margin-top: 3px;
        } */
        .nav
        {
            display: none;
        }
        .cart
        {
            margin-left: auto;
            order: 2;
        }
        .avatar
        {
            order: 2;
        }
    }
`