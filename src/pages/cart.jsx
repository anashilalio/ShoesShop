import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/item-context";
import Products from '../products'
import CartItems from '../CartItems'
export default function Cart(){
    const {cartItem} = useContext(ShopContext);
    return (
        <div>
            {Products.map((pro)=>{
                if(cartItem[pro.id]!==0){
                    return(
                        <CartItems data={pro}/>
                       )
                }
              
                
            })}
            
        </div>
    )
}
