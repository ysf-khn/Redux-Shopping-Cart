import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Product = ({ id, title, img, rating, price }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  const addToCartHandler = (e, id, title, price, quantity) => {
    e.preventDefault();
    dispatch(addToCart({ id, title, price, quantity }));
  };

  return (
    <li
      key={id}
      className='bg-white px-6 py-4 rounded-md shadow-md flex flex-col justify-between'
    >
      <div>
        <img src={img} alt='Item' className='max-h-40 mx-auto' />
        <h2 className='font-bold my-3'>{title}</h2>
        <h3 className='text-green-500 font-bold'>${price}</h3>
      </div>
      <form
        onSubmit={(e) =>
          addToCartHandler(e, id, title, price, parseInt(quantity))
        }
        className='flex flex-col items-center'
      >
        <div>
          <label htmlFor='quantity'>Quantity :</label>
          <input
            type='number'
            value={quantity}
            onChange={quantityHandler}
            className='bg-slate-200 rounded-md w-20 ml-2 p-1'
          />
        </div>
        <button
          className='bg-emerald-300 px-3 py-1 mt-2 rounded-md ml-5 hover:bg-emerald-400'
          type='submit'
        >
          Add to Cart
        </button>
      </form>
    </li>
  );
};

export default Product;
