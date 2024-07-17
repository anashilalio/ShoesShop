import React from 'react'
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

const whyUs = () => {
  return (
    <div className='flex justify-around my-14  text-2xl font-bold '>
        <div className='flex items-center gap-8'>
            <RiSecurePaymentFill className='text-8xl '/>
            <div>
            Secure Payment
            <p className='text-sm'>Secure on order</p>
            </div>
            
        </div>
        <div className='flex items-center gap-8'>
            <Ri24HoursFill className='text-8xl'/>
            <div>
            Secure Payment
            <p className='text-sm'>Secure on order</p>
            </div>
            
        </div>
        <div className='flex items-center gap-8'>
            <FaShippingFast className='text-8xl'/>
            <div>
            Secure Payment
            <p className='text-sm'>Secure on order</p>
            </div> 
            
        </div>
    </div>
  )
}

export default whyUs