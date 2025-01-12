import React from 'react'
import { FaStar } from 'react-icons/fa'
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cart'

function ProductCart({product}) {
   const API_URL = "http://localhost:8000/assets/Images/"
  const dispatch=useDispatch();
  const handleAddToCart=(e,product)=>{
 e.preventDefault()

   dispatch(addToCart(product))
   alert("product added")

  }

  return (
    <div className='bg-white shadow hover:scale-105 relative border rounded p-4 transform transition-transform duration-300' >
      {console.log("image",`${API_URL}${product.image}`)}
      <img src={`${API_URL}${product.image}`} alt=""  className=' h-48 object-cover mb-4'/>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>{product.price}</p>
      <p className='text-gray-500'>{product.description}</p>
      <div className='flex items-center mt-2'><FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      </div>
      <div className='absolute bottom-4 right-2 flex justify-center items-center w-8 h-8 bg-red-600  group text-white text-sm rounded-full hover:w-32 hover:bg-red-900 transition'><span className='group-hover:hidden'>+</span>
      <span className='hidden group-hover:block' onClick={(e)=>handleAddToCart(e,product)}>Add to Cart</span></div>
    </div>
    
  )
}

export default ProductCart