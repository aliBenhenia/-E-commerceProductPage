import styled from "styled-components";

export const ProductStyles = styled.div `

    #full_img
    {
        border-radius : 17px;
        background-color: red;
    }
    .row-of-imgs
    {
        display: flex;
        img
        {
            margin-left : 10px;
            border-radius: 15px;
            transition: .4s all;
            width: 100px;
            &:hover
            {
                opacity: 0.4;
            }
        }
    }
    #pay
    {
        h5
        {
            color: #FF7D18;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;

        }
        h2
        {
            font-weight: 700;
        }
        margin-left: 44px;
        p
        {
            margin-top : 55px;
            line-height: 2;
            color: #767C88;
        }
        #price
        {
            display: flex;
            h1
            {
                font-weight: 700;
            }
            .Badgepercent
            {
                margin: 10px;
                background-color: #fd7e1436;
                color: #FF7D18;
                padding: 4px;
                border-radius: 5px;
                font-weight: bold;
            }
        }
        #quant
        {
            background-color: #F6F9FD;
            display: flex;
            padding: 15px;
            margin: 0;
            p
            {
                margin-left: 10px;
                font-weight: 700;
                font-size: 3rem;
            }
        }
    }
`