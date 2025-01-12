import React from 'react'
import { FaShippingFast,FaHeadset,FaMoneyBillWave,FaLock,FaTag} from 'react-icons/fa'

function InfoSection() {
    const Infoitems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description:"Get your order with no extra dilivery charge"
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Support 24/7',
            description:"We are here to assist you anytime"
        },
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
            title:'100 % Money Back',
            description:"Get full refunded"
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description:"Payment is save end to end"
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:"Enjoy the best price of products"
        },
    ]
  return (
    <div className='bg-white pd-8 pt-12'>
      
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
        {Infoitems.map((data,index)=>(
            <div key={index} className='bg-white shadow-lg flex flex-col items-center text-center border rounded p-4 transform transition-transform duration-300
            hover:scale-105 cursor-pointer'>{data.icon}
            <h2 className='text-xl font-semibold mt-2'>{data.title}</h2>
            <p className='text-gray-500 '>{data.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
