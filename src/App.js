import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';
import SortFilter from './components/SortFilter';

const ratings = [
  { aboveFour: false },
  { aboveThree: false },
  { aboveTwo: false },
  { aboveOne: false },
];

function App() {
  const [query, setQuery] = useState('');
  const [sliderValue, setSliderValue] = useState(999);
  const [rating, setRating] = useState(ratings);

  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      <SortFilter
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        rating={rating}
        setRating={setRating}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Products query={query} sliderValue={sliderValue} rating={rating} />
          }
        />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
