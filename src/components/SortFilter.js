import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SortFilter = ({ sliderValue, setSliderValue, rating, setRating }) => {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  const {
    data: products,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    const prices = products.map((product) => product.price);
    setMax(Math.max(...prices));
    setMin(Math.min(...prices));
  }, [products]);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.checked);
    console.log(sliderValue);
  };

  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    console.log(e.target.id);
    const name = e.target.id;
    const isChecked = e.target.checked;
  };

  return (
    <div className='bg-white p-4 flex justify-between'>
      <div className='flex'>
        <label>Price</label>
        <input
          type='range'
          min={min}
          max={max}
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
      <div>
        <label>Ratings</label>
        <div className='flex flex-col'>
          <div>
            <input
              type='checkbox'
              id='aboveFour'
              name='aboveFour'
              onClick={handleCheckbox}
            />
            <label htmlFor='aboveFour'>4 & Above</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='aboveThree'
              name='aboveThree'
              onClick={handleCheckbox}
            />
            <label htmlFor='aboveThree'>3 & Above</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='aboveTwo'
              name='aboveTwo'
              onClick={handleCheckbox}
            />
            <label htmlFor='aboveTwo'>2 & Above</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='aboveOne'
              name='aboveOne'
              onClick={handleCheckbox}
            />
            <label htmlFor='aboveOne'>1 & Above</label>
          </div>
        </div>
      </div>
      <div>
        <div>Sort by Price</div>
        <div>
          <input type='radio' id='lowToHigh' name='sort' value='lowToHigh' />
          <label htmlFor='lowToHigh'>Low to High</label>
        </div>

        <div>
          <input type='radio' id='highToLow' name='sort' value='highToLow' />
          <label htmlFor='highToLow'>High to Low</label>
        </div>
      </div>
      <button>Clear Filters</button>
    </div>
  );
};

export default SortFilter;
