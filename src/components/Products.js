import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <ul className='grid grid-cols-3 lg:grid-cols-4 gap-3 m-3'>
      {!isLoading ? (
        products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default Products;
