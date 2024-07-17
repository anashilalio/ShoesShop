import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { useState } from 'react';
const topSelling = () => {
const [currentShoes , setCurrentShoes] = useState(0) ; 
    const Shoes =[
        {
            name : 'Nike Dunk' , 
            image : '../../public/nikeDunk.jpg',
            price : 39 
        },
        {
            name : 'Nike Revolution 7' , 
            image : '../../public/nikeRevolution7.jpg',
            price : 49 
        },
        {
            name : 'Nike Impact' , 
            image : '../../public/nikeImpact.jpg',
            price : 29 
        },{
            name : 'Nike Air Zoom' , 
            image : '../../public/nikeAirZoom.webp',
            price : 69 
        },{
            name : 'Nike Air' , 
            image : '../../public/nikeAir.webp',
            price : 39 
        },{
            name : 'Nike Blazer' , 
            image : '../../public/nikeBlaze.webp',
            price : 59 
        }
]
console.log(currentShoes)
  return (
    <div className='h-screen '>
        <div className="text-5xl font-bold text-center ">A top-selling product</div>
        <div className='flex justify-center items-center gap-12 mt-24'>
        <FaAngleLeft className='bg-red-600 w-12 text-white h-10 rounded-xl cursor-pointer' onClick={() => currentShoes != 0 && setCurrentShoes(e => e - 1)}/>
            {Shoes.map((shoe , index)=>{
                return (<div className={`${(currentShoes +3 > index && currentShoes<=index) ? '' :  'hidden'}`}>
                    <img src={shoe.image} alt="" className='h-64 w-56 rounded-xl select-none'/>
                    <div className='flex justify-around text-xl font-bold select-none'>
                    {shoe.name}
                    <p>{shoe.price} $</p>
                    </div>
                    
                    
                </div>)
                
            })}
            <FaAngleRight className='bg-red-600 w-12 text-white h-10 rounded-xl cursor-pointer' onClick={()=>currentShoes < Shoes.length -3 && setCurrentShoes(e=>e+1)}/>

        </div>
        <div className='flex justify-center gap-4 mt-4'>
            {Shoes.map((shoe , index)=>{
                return (
                    <div className=''>
                    <div className={`bg-red-600  size-4 rounded-full ${currentShoes !== index && 'opacity-50'}`}></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default topSelling