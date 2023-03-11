import React, { useState } from 'react'
import {  ProductStyles } from './styles'
import pt1 from "../../images/pt1.jpg"
import pt3 from "../../images/pt3.jpg"
import p1 from "../../images/p1.jpg"
import p2 from "../../images/p2.jpg"
import p3 from "../../images/p3.jpg"
import { Image ,Button} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons"
import { useDispatch } from 'react-redux'
export default function Product() {
  const dispatch = useDispatch();
  const [img,setImg] = useState(p1);
  const [num,setnum] = useState(0);
  const handleImg = (pic)=>{
     if(pic == 1)
     {
        setImg(p1);
     }
     else if(pic == 2)
     {
        setImg(p2);
     }
     else if(pic == 3)
     {
        setImg(p3);
     }
     else
     {
        setImg(p1);
     }
  }
  const handlenum = (op)=>{
    if (op === '-')
    {
      if (num != 0)
      {
        setnum(num - 1)
      }    
    }
    if (op == '+')
    {
        setnum(num + 1)
    }
  }
  // ()=> setnum(0)
  const handleAdd = ()=>{
    setnum(0);
    dispatch({type : "ADD", pyload : num});
  }
  return (
    <ProductStyles className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'> 
                <div id='slideContainer'>
                <Image
                    id='full_img'
                    width={344}
                    src = {img}
                />
                <div className='row-of-imgs mt-5'>
                    <img onClick={()=>handleImg(1)} src = {pt1} alt = "img"/>
                    <img onClick={()=>handleImg(2)} src = {pt3} alt = "img"/>
                    <img onClick={()=>handleImg(3)} src = {pt1} alt = "img"/>
                </div>
                </div>
            </div>
            <div className='col-md-5 mt-4' id='pay'>
              <h5>
              SNEAKER COMPANY
              </h5>
              <h2 className='h1'>Fall Limited Edition Sneakers</h2>
              <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
              <div id='price'>
                     <h1>$125.00</h1>
                        <div className='Badgepercent'>
                                50%
                        </div>
              </div>
                        <div id='canceledPrice'>  
                           <h1>$255.00</h1> 
                        </div>
              <div id='quant'>
                <h3 className='op1' onClick={()=>handlenum('-')}>-</h3>
                <h3 className='op2'>{num}</h3>
                <h3 className='op3' onClick={()=>handlenum('+')}>+</h3>
              </div>
              <div className='bttn'>
                  <Button id='bttn' type="primary" size = "large" onClick={handleAdd}>
                  <ShoppingCartOutlined id='crt' />
                    Add to cart
                  </Button>
              </div>
            </div>
        </div>
    </ProductStyles>
  )
}
