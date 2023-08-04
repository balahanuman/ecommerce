import React from 'react'

const Cart = (props) => {
  return (
    <div className='border border-4 border-warning '>
      cart
      {
        props.cart.map((p)=>{
            return <li className='d-flex flex-wrap jutify-content-between'>
            <div className='w-50'>{p.title}</div>
            <div className='w-25 text-end'>{p.count}</div>
            <div className='w-25 text-end'>{p.count*p.price}</div>
            
            </li>
        })
      }
    </div>
  )
}

export default Cart
