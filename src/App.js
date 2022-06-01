import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      <Routes>
        <Route path='/' element={<Products query={query} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
