import React from 'react';
import Products from '../products'
import Product from '../product';
export default function Home(){
    return (
        <div>
           <div className="title">
                <h1>Our new product</h1>
           </div>
           <div className="products flex justify-center gap-10">
            
                {Products.map((product) => {
                    return(
                        <Product data={product}/>
                    )
                },)}
            
           </div>
        </div>
    )
}