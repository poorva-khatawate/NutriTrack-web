import React, { Component } from 'react';
import Itemcard from './ItemCard';
import Data from './Data';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

export default class Calories extends Component {
  render() {
    return (
      <div>
        <CartProvider>
          <h1 className='text-center mt-3'>All Items</h1>
          <section className='py-4 container'>
            <div className='row justify-content-center'>
              {Data.productData.map((item, index) => {
                return <Itemcard img={item.img} title={item.title} desc={item.desc} calories={item.calories} key={index}/>
              })}  
            </div>
          </section>
          <Cart/>
        </CartProvider>
      </div>
    )
  }
}
