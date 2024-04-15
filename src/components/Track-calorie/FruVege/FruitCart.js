import React from "react";
import "./Fruit.css";
import { useCart } from 'react-use-cart';

const FruitCart = ({ id, img, title, Measurement, calories }) => {
    const { addItem } = useCart();
    const item = {
       id: id,
      img: img,
      title: title,
      Measurement: Measurement,
      price: calories
    };
  return (
    <div className="card_fruit">
      <div className="fruit_img_container">
        <img src={img} alt="" className="image_fruit" />
      </div>
      <div className="fruit_cart_bottom">
        <h3>{title}</h3>
        {/* <p>{Measurement}</p> */}
        <p>{calories} calories</p>
        <button className="button_fruit" onClick={() => addItem(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default FruitCart;
