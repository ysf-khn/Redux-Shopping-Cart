import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ query, setQuery }) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <nav className='p-3 flex gap-3 sm:px-12 sm:py-4 bg-emerald-300 sm:flex sm:justify-between sm:items-center shadow-lg'>
      <Link to='/' className=' text-xl font-bold'>
        React Shopper
      </Link>
      <input
        type='text'
        className='p-1 bg-white rounded-md'
        value={query}
        placeholder='Search items...'
        onChange={(e) => setQuery(e.target.value)}
      />
      <NavLink
        to='/cart'
        className={({ isActive }) =>
          isActive
            ? 'border-2 px-4 py-2 rounded-2xl  bg-emerald-400 font-bold'
            : 'border-2 px-4 py-2 rounded-2xl hover:bg-emerald-400 font-bold'
        }
      >
        Cart ({items.length})
      </NavLink>
    </nav>
  );
};

export default Header;
