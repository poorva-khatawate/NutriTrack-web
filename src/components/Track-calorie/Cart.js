import React from 'react';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const toastStyle = {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        padding: '16px',
        fontSize: '1.1em'
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
        toast.success('Item removed from cart', { style: toastStyle }); // Ensure style is passed here
    };

    if (isEmpty) return <h1 className="text-center">Cart is Empty</h1>;


    return (
        <><Navbar /><><section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.calories}</td>
                                        <td>Serves({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.id)}>Remove Items</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Calories: {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger" onClick={() => emptyCart()}>Clear Cart</button>
                </div>
            </div>
        </section></></>
    );
};

export default Cart;
