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
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      <SortFilter
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Products
              query={query}
              sliderValue={sliderValue}
              sortValue={sortValue}
            />
          }
        />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
