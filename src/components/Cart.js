import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const totalPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!cartItems.length) {
    return <h2 className='text-center mt-4'>Add some items in cart</h2>;
  }

  return (
    <div>
      <div className='m-6 text-center text-lg font-bold'>
        Total : ${totalPrice}
      </div>

      <ul className='mx-6 p-3 rounded-xl bg-white'>
        {cartItems.map((item) => (
          <li className='my-2 flex justify-between items-center' key={item.id}>
            <p className=' font-bold'>{item.title}</p>
            <p className=''>${item.price}</p>
            <p>Quantity :{item.quantity}</p>
            <button
              className='text-slate-50 font-semibold bg-red-400 px-3 py-1 rounded-lg'
              onClick={() => removeFromCartHandler(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
