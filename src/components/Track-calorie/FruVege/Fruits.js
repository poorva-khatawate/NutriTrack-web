import React from "react";
import "./Fruit.css";
import { fruitItems } from "./config";
import FruitCart from "./FruitCart";
import { CartProvider } from "react-use-cart";
import Tracknavbar from "../Tracknavbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../CommonCalorie.css';
const Fruits = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <><div>
      <Tracknavbar />
    </div>
    <CartProvider>
        <div className="fruit_container_heading">
          <h1 className="cal-h1-track">Fruits</h1>
        </div>
        <div className="fruit_container">
          {fruitItems.map((item) => {
            return <FruitCart {...item} key={item.id} />;
          })}
        </div>
      </CartProvider>
      <div className='common-cal'>
      <Link className='view-cart-link' to="/cart">View Cart<span>&#8594;</span></Link></div></>
  );
};

export default Fruits;
