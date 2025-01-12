import React, { useState } from 'react'

function ChangeAddress({setAddresses,setIsModalOpen}) {
    const [newAddress,setNewAddress]=useState();
const handleSave=()=>{
    setAddresses(newAddress)
    setIsModalOpen(false)
}




  return (
    <div className='bg-zinc-200 shadow-md w-[450px] h-44 p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        
        <input type="text" placeholder='Enter Your Address' className='rounded-lg p-4' value= {newAddress} onChange={(e)=>setNewAddress(e.target.value)} />
        <button className='bg-blue-700 text-white m-3 p-2 rounded-lg' onClick={()=>{setIsModalOpen(false)}}>Close</button>
        <button  className='bg-blue-700 text-white m-3 p-2 rounded-lg' onClick={handleSave} >Change</button>
      
    </div>
  )
}

export default ChangeAddress
