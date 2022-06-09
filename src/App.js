import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';
import SortFilter from './components/SortFilter';

function App() {
  const [query, setQuery] = useState('');
  const [sliderValue, setSliderValue] = useState(999);
  const [sortValue, setSortValue] = useState('lowToHigh');

  return (
    <>
      <Header query={query} setQuery={setQuery} />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <SortFilter
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                sortValue={sortValue}
                setSortValue={setSortValue}
              />
              <Products
                query={query}
                sliderValue={sliderValue}
                sortValue={sortValue}
              />
            </>
          }
        />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
