import React from 'react'
import ProductCart from '../components/ProductCart'
import { useSelector } from 'react-redux'

function Filterdata() {
    const filteredProducts=useSelector(state=>state.products.filteredData)
    console.log("filter",filteredProducts)
  return (
    <div className='container mx-12 py-12 my-19 px-4 md:px-16 lg:px-24   '>
        {filteredProducts.length>0?<>
            <h2 className='font-bold text-center  my-6 text-2xl ml-12'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-auto '>
            {
                products.products.map((product)=>(
                    <ProductCart product={product}></ProductCart>
                ))
            }
          
        </div>
        </>:
        <div>No product found</div>}
    </div>
  )
}

export default Filterdata
