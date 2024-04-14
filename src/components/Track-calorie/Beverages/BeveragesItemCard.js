import React from 'react';
import { useCart } from 'react-use-cart';


const BeveragesItemCard = (props) => {
  const { addItem } = useCart();
  const item = {
    id: props.id,
    img: props.img,
    title: props.title,
    desc: props.desc,
    price: props.calories
  };
  
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow" style={{ width: '300px' }}> {/* Add inline style for width */}
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} style={{ height: '200px' }} /> {/* Add inline style for height */}
        <div className="card-body text-center d-flex flex-column" style={{ height: '200px' }}> {/* Add inline style for height */}
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.calories} Calories</p>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-success mt-auto" onClick={() => addItem(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default BeveragesItemCard;
