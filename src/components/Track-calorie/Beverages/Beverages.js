import React, { Component } from 'react';
import Itemcard from './BeveragesItemCard';
import Data from './Beveragesdata';
import { CartProvider } from 'react-use-cart';
import Cart from '../Cart';
import Tracknavbar from '../Tracknavbar';
export default class Beverages extends Component {
  render() {
    return (
      <><div>
        <Tracknavbar />
      </div><div>
          <CartProvider>
            <h1 className='text-center mt-3'>Beverage Items</h1>
            <section className='py-4 container'>
              <div className='row justify-content-center'>
                {Data.productData.map((item) => {
                  return <Itemcard img={item.img} title={item.title} calories={item.calories} id={item.id} key={item.id} />;
                })}
              </div>
            </section>

            <Cart />
          </CartProvider>
        </div></>
    )
  }
}
