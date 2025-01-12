import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa'

function Footer() {
  return (
 <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 flex'>
  <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8' >
    <div >
      <h2 className='text-lg font-bold'>e-shop</h2>
      <p className='mt-4'>your one stop shop now for all your needs shop with us  and experirence the best online shoppin experience </p>
    </div>


    <div className='flex flex-col md:items-center'> 
      <h2 className='text-lg font-bold'>Quick links</h2>
      <ul className=' mt-4 space-y-2'>
        <li ><Link to='/' className='hover:underline'>Home</Link> </li>
        <li><Link to='/shop' className='hover:underline'>Shop</Link> </li>
        <li><Link to='/' className='hover:underline'>About</Link> </li>
        <li><Link to='/' className='hover:underline'>Contact</Link> </li>
      </ul>
    </div>
    <div className='flex mt-6 space-x-4 justify-center'>
      <h4 className='text-lg font-bold mb-4'>Follow us</h4>
      <a href="" className='hover:text-gray-400'><FaFacebook></FaFacebook></a>
      <a href="" className='hover:text-gray-400'><FaTwitter></FaTwitter></a>
      <a href="" className='hover:text-gray-400'><FaLinkedin></FaLinkedin></a>
      <a href=""  className='hover:text-gray-400'><FaGithub></FaGithub></a>
    </div>
    <form className='flex items-center justify-center'>
      <input type="email" name="" id="" placeholder='type your email ' className='bg-gray-800 border border-gray-600 w-full rounded-l-lg p-3'/>
      <button className='bg-red-600 px-4 py-4 rounded-r-lg'>Subscribe</button>
    </form>
    <div className='border-t mt-8 pt-8 border-red-700'>
      <div className='container mx-auto flex justify-center items-centre flex-col md:flex-row'>
        <p>&copy; 2023 e-shop ALl right reserved</p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
        <a href="" className='hover:underline'>Privacy Policy</a><a href="" className='hover:underline'> Terms & Conditions</a></div>
      </div>
    </div>
  </div>
 </footer>
  )
}

export default Footer
