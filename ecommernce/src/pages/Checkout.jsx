import React from 'react'
import {useSelector} from 'react-redux'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Checkout({setOrder}) {
  const cart=useSelector(state=>state.cart)
   const API_URL = "http://localhost:8000/assets/Images/"
  const navigate=useNavigate();
    

  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [shippingg, setShipping] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState(false);
  const [paymentValue,setPaymentValue]=useState("cod")
  const [shippingInfo,setShippingInfo]=useState({
    address:"",
    city:"",
    pincode:"",
  })
const handleSave=()=>{
  const newOrder={
    products:cart.products,
    orderNumber:"122",
    shippingInfo:shippingInfo,
    totalPrice:cart.totalPrice,
  }
  setOrder(newOrder)
  navigate('/order-place')
  
  
}
  const toggleBillingInfo = () => {
    setIsBillingOpen(!isBillingOpen);
  };
  const toggleShipingInfo = () => {
   setShipping(!shippingg);
  };
  const togglePaymentInfo = () => {
    setpaymentMethod(!paymentMethod);
   };
  return (
     
   

  
    <div className="bg-slate-200 w-full py-10 flex flex-row ">
      <div className="text-center mb-10 w-full">
        <h1 className="font-bold text-4xl">Checkout Page</h1>

        {/* Billing Information */}
        <div className="bg-white shadow-md rounded-lg p-5 m-10">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleBillingInfo}
          >
            <h3 className="text-xl font-semibold">Billing Information</h3>
            {isBillingOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {/* Collapsible Billing Information */}
          {isBillingOpen && (
            <div className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Phone #"
                />
              </div>
            </div>
          )}
        </div>

     


        <div className="bg-white shadow-md rounded-lg p-5 m-10">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleShipingInfo}
          >
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            {shippingg ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {/* Collapsible Billing Information */}
          {shippingg && (
            <div className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Address"
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
               City
                </label>
                <input
                  type="city"
                  id="city"
                  className="border border-gray-300 rounded w-full p-2"
                
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, city: e.target.value }))
                  }
                  

                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium mb-1">
                 Zip code
                </label>
                <input
                  type=""
                  id="pincode"
                  className="border border-gray-300 rounded w-full p-2"
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, pincode: e.target.value }))}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 m-10">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={togglePaymentInfo}
          >
            <h3 className="text-xl font-semibold">Payment Mehtod</h3>
            {paymentMethod ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {/* Collapsible Billing Information */}
          {paymentMethod && (
            <div className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="font-medium mb-1">
                Cash on Delivery </label>
                <input
                  type="radio"
                  id="payment"
                  checked={paymentValue==="cod"}
                  onChange={()=>setPaymentValue("cod")}
               
                
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="font-medium mb-1">
                Credit card </label>
                <input
                  type="radio"
                  id="payment"
                  checked={paymentValue==="dc"}
                  onChange={()=>setPaymentValue("dc")}
               
                
                />
              </div>
              
              {/* {paymentValue==='dc' &&(
                <div className='bg-red-700 w-full h-32'>
                  <h3>debit card</h3>
                  <div>
                    <label htmlFor="">Card Number</label>
                    <input type="" name="" id="" />
                  </div>
                  <div>
                    <label htmlFor="">Card holder Name</label>
                    <input type="" name="" id="" />
                  </div>
                  <div>
                    <label htmlFor="">Expire Date</label>
                    <input type="" name="" id="" />
                  </div>
                  <div>
                    <label htmlFor="">CVV</label>
                    <input type="" name="" id="" />
                  </div>
                </div>
              )} */}


{paymentValue === 'dc' && (
  <div className="bg-gray-500 w-full p-5 rounded-lg shadow-md">
    <h3 className="text-white text-lg font-semibold mb-4">Debit Card</h3>

    <div className="mb-4">
      <label htmlFor="cardNumber" className="block text-white font-medium mb-1">
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-red-400"
        placeholder="Enter Card Number"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="cardHolderName"
        className="block text-white font-medium mb-1"
      >
        Card Holder Name
      </label>
      <input
        type="text"
        id="cardHolderName"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-red-400"
        placeholder="Enter Card Holder Name"
      />
    </div>

    <div className="flex flex-row gap-4">
      <div className="w-1/2 mb-4">
        <label
          htmlFor="expireDate"
          className="block text-white font-medium mb-1"
        >
          Expire Date
        </label>
        <input
          type="text"
          id="expireDate"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-red-400"
          placeholder="MM/YY"
        />
      </div>

      <div className="w-1/2 mb-4">
        <label htmlFor="cvv" className="block text-white font-medium mb-1">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-red-400"
          placeholder="123"
        />
      </div>
    </div>
  </div>
)}

            </div>
          )}









          
        </div>




      </div>
      








<div>
 
</div>



     
          {/* <div className='bg-white rounded shadow-lg p-10 m-10 w-[400px]'>
            <div>
              <h3>Order Summary</h3>
              {cart.products.map((product)=>(
                <div>
                  <img src={product.image} alt="" />
                  <div><h3>{product.name}</h3>
                  <p>{product.Price} * {product.quantity}</p>
                  </div>


                </div>
              ))}
            </div>
          
           <span>{cart.totalPrice}</span>
            
          </div> */}
         
         <div className="bg-white rounded-lg shadow-lg p-6 m-10 w-[400px]">
  {/* Order Summary Title */}
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>
  </div>

  {/* Product List */}
  {cart.products.map((product) => (
    <div
      key={product.id}
      className="flex items-center border-b border-gray-200 py-3"
    >
      {/* Product Image */}
      <img
        src={`${API_URL}${product.image}`}
        alt={product.name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-md font-medium text-gray-700">{product.name}</h3>
        <p className="text-sm text-gray-600">
          {product.Price} x {product.quantity}
        </p>
      </div>
    </div>
  ))}

  {/* Total Price */}
  <div className="mt-4 text-right">
    <span className="text-lg font-bold text-gray-900">
      Total: ${cart.totalPrice}
    </span>
    <div>  <button className='bg-red-600 p-2 rounded-lg text-white'  onClick={()=>handleSave()}>Place Order</button>
    </div></div>
  
</div>


   

     
    </div>
  )
}

export default Checkout;
