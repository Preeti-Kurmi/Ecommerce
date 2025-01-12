import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order({orders}) {
    const navigate=useNavigate();
  return (
    <div>
      <div>
        <h1 className='font-semibold m-10 text-3xl'>Thank you for placing order your order has been successfully place</h1>
        <p className='text-2xl ml-10 p-3'>Order has been Placed Succesfully</p>
      </div>
      <div className='bg-gray-100 w-[800px]  h-96 flex flex-col m-6 p-10 rounded-lg'>
        <h3 className='text-xl font-semibold mb-3'>Order Summary{}</h3>
        <p className='mb-3'>Order Number {orders.orderNumber}</p>
        <h3 className='text-xl font-semibold mb-3'>Shipping Information</h3>
    <p className='mb-3'>Address- {orders.shippingInfo.address}</p>
    <p className='mb-3'> City- {orders.shippingInfo.city    }</p>
        {console.log("prder",orders)}
        <h3 className='text-xl font-semibold mb-3'>Item Ordered</h3>
        <p>Total Price{orders.totalPrice}</p>
        <p>{orders.products[0].name} X {orders.products[0].quantity}</p>
      

       
      </div>
      <div className='m-3 p-2'>
      <button className='bg-green-500 text-white p-4 m-2 font-semibold'>Track Order </button>
      <button className='bg-red-500 text-white p-4 m-2 font-semibold' onClick={()=>navigate('/')}>Continue Shopping </button></div>
    </div>
  )
}

export default Order
