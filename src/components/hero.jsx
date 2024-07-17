import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-between items-center h-screen px-12 -my-12 '>
        <div className='' >
            <div className=' text-5xl font-bold'>Buy The Best <span className='bg-red-600 text-white'>Shoes</span> out there</div>
            <p>take on anything spring throws your way in these functional styles</p>
            <div className='bg-red-600 text-white px-6 py-3 text-center w-44 cursor-pointer hover:opacity-70 font-bold mt-8 mx-auto ml-44 rounded-3xl'>SHOP NOW</div>
        </div>
        <div  className=' z-10 overflow-hidden  ' style={{height:'600px' } } >
          
        
        </div>
        
        <img src="../../public/shoes.png" className='' alt="" />

    </div>
  )
}

export default Hero