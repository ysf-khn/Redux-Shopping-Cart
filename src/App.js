import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
