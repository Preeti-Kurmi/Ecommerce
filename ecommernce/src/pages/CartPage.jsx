import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../assets/Images/carti.jpg';
import { FaTrashAlt } from 'react-icons/fa';
import ChangeAddress from '../components/ChangeAddress';
import Modal from '../components/Modal';
import { removeToCart } from '../redux/cart';
import { increaseQuantity } from '../redux/cart';
import { decreaseQuantity } from '../redux/cart';
import { useNavigate } from 'react-router-dom';


function CartPage() {
  const API_BASE_URL = import.meta.env.VITE_APP_URL
  const carts = useSelector((state) => state.cart);
  const API_URL = `${API_BASE_URL}/assets/Images/`
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [address,setAddress]=useState("main road")
  const [openModal,setOpenModal]=useState(false)

  const handleAddressChange=(address)=>{
    setAddress(address);
    setOpenModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {carts.products.length > 0 ? (
        <div className="bg-slate-200 w-full py-10 flex flex-row">
          <div className="text-center mb-10">
            <h1 className="font-bold text-4xl">SHOPPING CART</h1>
          </div>
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-6 gap-4 font-semibold border-b border-gray-400 pb-4">
              
              <p className="col-span-2">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              
              <p>Subtotal</p>
              <p>Remove</p>
             
            </div>

            {carts.products.map((product) => (
              <div key={product.id} className="grid grid-cols-6 gap-4 items-center py-6 border-b border-gray-300">
                <div className="col-span-2 flex items-center space-x-4">
                  <img src={`${API_URL}${product.image}`} alt={product.name} className="h-20 w-20 object-cover rounded" />
                  <p className="font-medium text-lg">{product.name}</p>
                </div>
                <p className="text-lg">${product.Price}</p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border bg-white rounded" onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                  <p className="text-lg font-medium">{product.quantity}</p>
                  <button className="px-3 py-1 border bg-white rounded" onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                
                </div>
                <p className="text-lg font-medium">${(product.quantity*product.Price).toFixed(2)}</p>
               <button className='text-red-700 text-lg ml-8'  onClick={()=>dispatch(removeToCart(product.id))}> <FaTrashAlt ></FaTrashAlt></button>
              </div>
            ))}
          </div>
          <div className='bg-white rounded shadow-lg p-10 m-10 w-[400px]'>
            <div className='mb-7 font-bold border-b-2 border-gray-500'>
            <h2 className=''>Cart Total </h2>
           
             <span className=''>Total Items</span>
             <span className='ml-20 '>{carts.totalQuantity}</span>
            </div>
            <div className='text-slate-800'>
              <p>Shipping:</p>
              <span>Shipping to:</span>
              <span className='text-sm font-bold'> {address}</span>
              <button className='text-blue-900 p-2 rounded-lg font-semibold' onClick={()=>{setOpenModal(true)}} >Change Address</button>
            </div>
            <div><span>Total Price</span>
            <span>{carts.totalPrice}</span></div>
            <div><button className='bg-red-600 p-2 rounded-lg font-semibold' onClick={()=>navigate('/checkout')}>Proceed to checkout</button></div>
            
          </div>
          <Modal isModalOpen={openModal} setIsModalOpen={setOpenModal} ><ChangeAddress setAddresses={setAddress}  setIsModalOpen={setOpenModal} /></Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-xl font-medium text-gray-700 mb-4">Your cart is empty!</p>
          <img src={cart} alt="Empty Cart" className="h-96 object-cover" />
        </div>
      )}

    {/* {openModal && (<ChangeAddress  currentAddress={address} onClose={()=>setOpenModal(false)}   onChangeAddress={handleAddressChange} />)} */}

     
    </div>
  );
}

export default CartPage;
