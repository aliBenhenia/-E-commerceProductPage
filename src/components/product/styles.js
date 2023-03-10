import styled from "styled-components";

export const ProductStyles = styled.div `
    user-select: none;
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
            margin-right: 19px;
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
        #canceledPrice h1
        {
            font-size: 16px;
            color: grey;
            text-decoration: line-through;
        }
        #quant
        {
            background-color: #F6F9FD;
            display: flex;
            width: 250px;
            margin-top: 10rem;
            /* padding: 10px; */
            margin: 0;
            align-items: center;
            justify-content: center;  
            margin-bottom: 2rem;
            border-radius: 15px;
            h3
            {
                font-weight: 700;
                font-size: 2rem;
            }
            .op1
            {
                margin-right: 4rem;
            }
            .op1,.op3
            {
                color: #FF7D18;
                margin-left: 4rem;
            }
            .op3
            {
                margin-right: 4rem;
            }
        }
        .bttn
        {
            #bttn
            {
                background-color: #FF7D18;
                width: 250px;
                height: 47px;
                font-weight: 500;
                font-size: 19px;
                #crt
                {
                    font-size: 1.4rem;
                    margin-bottom: 10px;
                }
            }
        }
    }
`