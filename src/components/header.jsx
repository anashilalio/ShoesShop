import { Link } from "react-router-dom"
import { AiOutlineShopping } from "react-icons/ai";
import Hero from './hero'
import { IoBagHandleOutline } from "react-icons/io5";

export default function Header(){
    return (
        <>
        
        <div className="flex  items-center justify-between    px-4 py-2  ">
            
                <div className=" text-3xl font-bold">
                ShoesShop
                </div>
                
                <ul className="flex gap-8 items-center font-bold text-xl">
                <li className=" cursor-pointer hover:opacity-65 rounded-3xl">New & Featured</li>

                <li className=" px-4 py-2 cursor-pointer hover:opacity-65">Men</li>
                <li className=" cursor-pointer hover:opacity-65 rounded-3xl">Women</li>
                <li className=" cursor-pointer hover:opacity-65 rounded-3xl">Kids</li>


            </ul>
            <ul className="flex gap-8 items-center font-bold text-xl">
            <IoBagHandleOutline className="text-3xl cursor-pointer "/>
                <li className=" px-4 py-2 cursor-pointer hover:opacity-65">Login</li>
                <li className="text-white bg-red-600 px-4 py-2 cursor-pointer hover:opacity-65 rounded-3xl">signUp</li>

            </ul>
            
        </div>
        
        </>
    )
}