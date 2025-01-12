import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch,FaShoppingCart,FaUser} from 'react-icons/fa'
import { useDispatch, useSelector} from 'react-redux'
import Login from './Login'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'
import { setSearchTerm } from '../redux/productSlice'

function Navbar() {
  const[isModalOpen,setIsModalOpen]=useState(false);
  const [search,setSearch]=useState('')
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault();
    dispatch(setSearchTerm(search))
    navigate('/filterdata')
  }

  const products=useSelector(state=>state.cart.products)
  return (
  <nav  className='bg-white shadow-md'>
   
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between'>
<div className='text-lg font-bold m-4'>
        <Link to='/'>e-shop</Link>
        </div>

 
    <div className='relative flex-1'>
        <form  onSubmit={handleSearch}>
        <input type="text" placeholder='search product'  className='w-full border py-4  px-2' value={search}  onChange={(e)=>setSearch(e.target.value)}/>
        <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
        </form>

    </div>
    <div className='flex items-center space-x-4'>
        <Link to='/cart'>
        <span className='bg-red-600 text-white w-8 h-5 rounded-full mt-3 ml-5 p-1'>  {products.length}</span>
        <FaShoppingCart className='text-lg'/>
     
      
        </Link>
    </div>
    <button className='hidden md:block'><Link to="/login">Login </Link>| <Link to="/signup">Register</Link> </button>
    <button className='block md:hidden'><FaUser/></button>
    
    </div>
  
    <div className='flex items-center justify-center space-x-10 py-8 text-lg font-bold '>
    <Link to='/' className='hover:underline'>Home</Link>
    <Link to='/shop'  className='hover:underline'>Shop</Link>
    <Link  className='hover:underline'>About</Link>
    <Link  className='hover:underline'>Contact</Link>
    <Link to='/addproduct' className='hover:underline'>Add Product</Link>

    
    </div>
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ><Login></Login></Modal>
  </nav>
  )
}

export default Navbar
