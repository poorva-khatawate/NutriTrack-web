import React from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = (props) => {

  const { addItem } = useCart();
  const item = {
    id: props.id, // Ensure that props.id is correctly passed
    img: props.img,
    title: props.title,
    desc: props.desc,
    calories: props.calories
  };
  
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.calories}</p>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.id}</p>
          <button className="btn btn-success" onClick={() => addItem(item)}>Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
