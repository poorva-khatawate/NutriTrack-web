import React from "react";
import "./Fruit.css";
import { useCart } from 'react-use-cart';
import toast from "react-hot-toast";
const FruitCart = ({ id, img, title, Measurement, calories }) => {
    const { addItem } = useCart();
    const item = {
       id: id,
      img: img,
      title: title,
      Measurement: Measurement,
      price: calories
    };
    const handleAddToCart = () => {
      addItem(item);
      toast.success('Item added to cart!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          padding: '16px',
          fontSize: '1.2em' // Increase the font size
        }
      });
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
        <button className="btn btn-success mt-auto" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default FruitCart;
