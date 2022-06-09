import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import Pagination from './Pagination';
import Product from './Product';
import Spinner from './Spinner/Spinner';

const Products = ({ query, sliderValue, sortValue }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const [itemsPerPage] = useState(8);
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

  const sortProducts = (p) =>
    sortValue === 'lowToHigh'
      ? p.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      : p.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortProducts(products).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  const filterProducts = (query) => {
    if (!query) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div>
      {!isLoading ? (
        <ul className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-3'>
          {(query ? filterProducts(query) : currentItems).map((item) =>
            item.price <= sliderValue ? (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.image}
                rating={item.rating}
                price={item.price}
              />
            ) : null
          )}
        </ul>
      ) : (
        <Spinner />
      )}
      {!isLoading && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Products;
