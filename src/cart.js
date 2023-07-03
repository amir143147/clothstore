import { Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Cart = ({cart}) => {

 const [CART,setcart]= useState([]);

 useEffect(()=>{
  setcart(cart)
 },[cart])

  
  return (
    <div className='cart-detail'>
      {
        CART.map((va,index)=>(
            <>
            
            <div className='cart-item' key={index}>
            <img src={va.image} width={100} height={100} alt='cloth pic'/>
            <span>{va.name}</span>
            <div>
            <Button variant='contained' sx={{height:'15px'}} onClick={()=>{
              let newcartm=CART.map((v,i)=>{
                return i===index ? {...v,qty:v.qty>0?v.qty-1:0}:v
              })
              setcart(newcartm)
            }}>-</Button>
            <input type='text'  value={va.qty} style={{width:'40px',margin:'0px 15px',textAlign:'center'}}/>
            <Button variant='contained' sx={{height:'15px'}} onClick={()=> {
            let newcartp =  CART.map((v,i)=> { 
               return index===i ? {...v,qty:v.qty+1}:v
              })
              setcart(newcartp)
            }}>+</Button>
            </div>
            <span>Rs:${va.price}</span>
            <span>${va.price * va.qty}</span>
            </div>

           

            
            </>
        ))
      }
       <div className='total'>
        <Paper >
              <h4>cart Total</h4>
              <span>Rs : {
                
                CART.reduce((rate,value)=>{
                 
                  return rate += value.price*value.qty
                   
                },0)
                
                
                }</span>
              </Paper>
            </div>
    </div>
  )
}

export default Cart
