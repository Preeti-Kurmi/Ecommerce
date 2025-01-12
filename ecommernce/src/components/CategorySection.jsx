    import React from 'react'
    import women from '../assets/Images/women1.jpg'
    import men from '../assets/Images/men.jpg'
    import kid from '../assets/Images/kid.jpg'
    
    function CategorySection() {
        const category=[{
            title:"Men",
            image:women
        },
        {
            title:"Women",
            image:men
        },
        {
            title:"Kid",
            image:kid
        }]
      return (
        <div className='container mx-auto grid  grid-cols-1 sm:grid-cols-3 gap-6'>

          {
            category.map((category,index)=>(
                <div key={index} className='relative h-64 transform transition-transform duration-300
            hover:scale-105'>
                    <img src={category.image} alt="" className='w-full h-full  rounded-lg shadow-md mt-10 m-8'/>
                    <div className='absolute top-12 left-12'>
                    <div className='font-bold text-xl'>{category.title}</div>
                    <p  className='text-gray-600'>View All</p>
                    </div>
                </div>
            ))
          }
        </div>
      )
    }
    
    export default CategorySection
    