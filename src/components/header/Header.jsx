import { Menu } from 'antd'
import React, { useState,useEffect } from 'react'
import logo from "../../images/logo.svg"
import userProfile from "../../images/image-avatar.png"
import bar from "../../images/icon-menu.svg"
import {ShoppingCartOutlined,BarsOutlined,ArrowLeftOutlined,DeleteOutlined} from "@ant-design/icons"
import { Head } from './styles'
import { Avatar,Popover,Button,Badge} from 'antd'
import pt1 from "../../images/pt1.jpg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type'
export default function Header() {
    const data = useSelector(item=>item)
    const [open,setopen] = useState(false);
    const handlOpen = ()=>{
        setopen(!open);
    }
  return (
    <div className='container mt-3'>
     <Head>
     <BarsOutlined 
        onClick={handlOpen}
        className = "bar"/>
        <div className='logo'>
            <img src = {logo} alt = "logo for sneakers"/>
        </div>
        <Menu 
             mode='horizontal'
             className='nav'
             items={
                [
                    {
                        label : "Collections",
                        key : 1,
                    },
                    {
                        label : "Men",
                        key : 2,
                    },
                    {
                        label : "Women",
                        key : 3,
                    },
                    {
                        label : "About",
                        key : 4,
                    },
                    {
                        label : "Contact",
                        key : 5,
                    },
                ]
             }
             />
               <div className='menu' id = {open  ? "show" : "hide"}>
               <ArrowLeftOutlined onClick={handlOpen} id='back' /> 
                    <Menu 
                    mode='vertical'
                    items={
                        [
                            {
                                label : "Collections",
                                key : 1,
                            },
                            {
                                label : "Men",
                                key : 2,
                            },
                            {
                                label : "Women",
                                key : 3,
                            },
                            {
                                label : "About",
                                key : 4,
                            },
                            {
                                label : "Contact",
                                key : 5,
                            },
                        ]
                    }
                    />
               </div> 
                <section>
                        <Popover placement="bottom" title={<h3>cart</h3>} 
                                content={
                                    <CartPopUp data = {data}/>
                                } 
                                trigger="click">
                            <ShoppingCartOutlined className = 'cart'/>
                        </Popover>
                           <div id = "bdg">{data}</div>
                </section>
                <Avatar className='avatar' size={50} icon={<Avat />} />
     </Head>
    </div>
  )
}

function Avat()
{
    return(
        <div>
            <img style={{width : "100%"}} src = {userProfile} alt='avatar'/>
        </div>
    );
}

function CartPopUp(props) 
{
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState(props.data);
 
    return(
        <div className='container'>
        <hr />
         {
         props.data ? 
            <div className='row'>
            <img src = {pt1} style={{
                width : "77px"
            }}
            className ="col-5"
            />
            <p className ="col-6"style={{color : "#707783"}}>
                    Fall Limited Edition Sneakers $125.00 × {cartData} ${125 * cartData}
            </p>
            <DeleteOutlined className ="col-1" style={{
                fontSize : "1.4rem"
            }}
            onClick = {()=>dispatch({type : "RM",payload : 0})}
            />
            <Button 
            style={{
                background : "#FF7D18",
                fontWeight : "bold"
            }} 
            className='mt-3' 
            type="primary" 
            size = "large" 
            id='btn'>Checkout</Button>
       </div>
         : <h1 className='h6' style={{color : "#707783"}}>Your cart is empty</h1>
        }
    </div>
    );
}