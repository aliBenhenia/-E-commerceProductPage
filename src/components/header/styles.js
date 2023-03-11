import styled from "styled-components";

export const Head = styled.div `
    display: flex;
    overflow-x: hidden;
    .bar
    {
        display: none;
    }
    .menu
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
    #btn
    {
                 background-color: #FF7D18;
                width: 250px;
                height: 47px;
                font-weight: 500;
                font-size: 19px;
    }
    @media only screen and (max-width: 790px) 
    {
        .bar
        {
            display: block;
            font-size: 1.6rem;
            margin-right : 10px;
            margin-top: 3px;
        }
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
        .menu
        {
             display: block;
             width: 200px;
             height: 100vh;
             position: absolute;
             background-color: #fff;
             top: 0;
             /* left: -200%; */
             border: 1px solid #444;
             z-index: 122211;
             transition: .5s all;
             #back
             {
                font-size: 2rem;
                margin: 20px;
             }
        }
        #hide{
            left: -200%;
        }
        #show{
            left: 0;
        }
    }
`