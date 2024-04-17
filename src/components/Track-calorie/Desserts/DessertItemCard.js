import React from 'react';
import { useCart } from 'react-use-cart';
import toast from 'react-hot-toast';

const DessertItemCard = (props) => {
  const { addItem } = useCart();
  const item = {
    id: props.id,
    img: props.img,
    title: props.title,
    desc: props.desc,
    price: props.calories
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
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow" style={{ width: '300px' }}> {/* Add inline style for width */}
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} style={{ height: '200px' }} /> {/* Add inline style for height */}
        <div className="card-body text-center d-flex flex-column" style={{ height: '200px' }}> {/* Add inline style for height */}
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.calories} Calories</p>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-success" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default DessertItemCard;
