import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import axios from 'axios'
const Products = () => {
  const[products,setProducts]=useState([])
  const[cart,setCart]=useState([])
 useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then(
   (res)=>{setProducts(res.data)} 
  )
 },[])
 function addToCart(product){
  setCart([...cart,{...product,count:1}])

 }
 function isProductIncart(product){
  var x=cart.find(function(cp){
    if(cp.title===product.title){
    return true
  }
  else{
    return false
  }

 
 })
 return x
}
  return (
    <div className='d-flex flex-wrap border border-4 border-danger w-100 p-2'>
      
      <div className='w-50'>
        {
          products.length>0 && (
            products.map((product)=>{
              return<li className='d-flex'>
                <img src={product.image} alt=''width='100px'/>
              <div> <h4>{product.title}</h4>
                <h3>{product.price}</h3>
                {
isProductIncart(product) && (<button onClick={()=>{}}>go to Cart</button>)
                }
                {
     !isProductIncart(product) &&  (<button onClick={()=>{addToCart(product)}}>Add to Cart</button> )          
                }
                
                
                </div> 
                </li>

              
            })
          )
        }
      </div>
      <div className='w-50'>
      <Cart cart={cart}></Cart>
      </div>
      
    </div>
  )
}

export default Products
