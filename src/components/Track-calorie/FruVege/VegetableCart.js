import React from "react";
import "./Vegetable.css";
import { useCart } from 'react-use-cart';

const VegetableCart = ({ id,img, title, Measurement, calories }) => {
    const { addItem } = useCart();
    const item = {
       id:id,
      img: img,
      title:title,
      Measurement: Measurement,
      price: calories
    };
  return (
    <div className="card_vegetable">
       
      <div className="vegetable_img_container">
        <img src={img} alt="" className="image_veg" />
      </div>
      <div className="vegetable_cart_bottom">
        <h3>{title}</h3>
        {/* <p>{Measurement}</p> */}
        <p>{calories} calories</p>
        <button className="button_vegetable" onClick={() => addItem(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default VegetableCart;
