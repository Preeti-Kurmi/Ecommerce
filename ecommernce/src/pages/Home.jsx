
import React, { useEffect } from 'react'
import { Categories,mockData } from '../assets/Categories'
import banner from '../assets/Images/banner.jpg'

import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { useSelector,useDispatch } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import ProductCart from '../components/ProductCart'
import Shop from './Shop'
import Footer from '../components/Footer'
import axios from 'axios'

function Home() {
    const dispatch=useDispatch();
    const products=useSelector(state=>state.product)
    console.log(products,"p")
    const fetchData=async()=>{
      try{ const response=await axios.get('http://localhost:8000/api/products')
          if(response){
              console.log("data",response.data)
              dispatch(setProducts(response.data))
          }}
     
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
      fetchData()
  },[])


    
  return (
    <div>
    <div className='bg-white mt-2  px-4 md:px-16 lg:px-24 '>
      
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
           
           
            <div className='bg-red-600 text-white text-xs px-2 py-2.5 font-bold'>Shop by Categories</div>

           
            <ul className='bg-gray-100 space-y-4  border'>
              {
                Categories.map((category,index)=>(

                    
                    <li key={index} className='flex items-center  text-sm font-medium '>
                        <div className='w-2 h-2 rounded border border-red-600 m-2'></div>{category}</li>
                ))
              }
            </ul>
            </div>
            <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative '>
                <img src={banner} alt=""  className='w-full h-full'/>
        <div className='absolute top-4 right-4 left-16  '>
            <p className='text-gray-600 font-semibold mb-2'> My Shop</p>
            <h2 className='font-extrabold text-3xl'>Welcome to E-Shop</h2>
            <p className='font-bold text-xl mt-2.5 text-gray-800'>MILLIONS + PRODUCTS</p>
            <button className='bg-red-600 border px-8 py-2 text-white mt-4 hover:bg-red-800 transform transition-transform duration-300
            hover:scale-125'>ShopNow</button>
            </div>
            </div>
        </div>
        <InfoSection></InfoSection>
        <CategorySection></CategorySection>
        <div className='container mx-auto py-12 my-19'>
            <h2 className='font-bold text-center  my-6 text-xl'>Top Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-auto relative left-24 '>
            {
                products.products.slice(0,5).map((product)=>(
                    <ProductCart product={product} key={product._id}></ProductCart>
                ))
            }
            </div>
        </div>
      </div>
      <Shop/>
     
   
      </div>


  )
}

export default Home
