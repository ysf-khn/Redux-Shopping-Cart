import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SortFilter = ({
  sliderValue,
  setSliderValue,
  sortValue,
  setSortValue,
}) => {
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
    setSliderValue(e.target.value);
    console.log(sliderValue);
  };

  const isRadioSelected = (value) => sortValue === value;

  const handleSort = (e) => setSortValue(e.currentTarget.value);

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
        <div>Sort by Price</div>
        <div>
          <input
            type='radio'
            id='lowToHigh'
            name='sort'
            value='lowToHigh'
            checked={isRadioSelected('lowToHigh')}
            onChange={handleSort}
          />
          <label htmlFor='lowToHigh'>Low to High</label>
        </div>

        <div>
          <input
            type='radio'
            id='highToLow'
            name='sort'
            value='highToLow'
            checked={isRadioSelected('highToLow')}
            onChange={handleSort}
          />
          <label htmlFor='highToLow'>High to Low</label>
        </div>
      </div>
      <button className='bg-emerald-300 px-3 py-1 rounded-md'>
        Clear Filters
      </button>
    </div>
  );
};

export default SortFilter;
