import { Menu } from 'antd'
import React, { useState } from 'react'
import logo from "../../images/logo.svg"
import userProfile from "../../images/image-avatar.png"
import bar from "../../images/icon-menu.svg"
import {ShoppingCartOutlined,BarsOutlined,ArrowLeftOutlined} from "@ant-design/icons"
import { Head } from './styles'
import { Avatar } from 'antd'
export default function Header() {
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
                <ShoppingCartOutlined className = 'cart'/>
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