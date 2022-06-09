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

  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    const prices = products.map((product) => product.price);
    setMax(Math.max(...prices));
    setMin(Math.min(...prices));
  }, [products]);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const isRadioSelected = (value) => sortValue === value;

  const handleSort = (e) => setSortValue(e.currentTarget.value);

  return (
    <div className='bg-white flex justify-center items-center gap-8 shadow-md py-4'>
      <div>
        <label>Price : </label>
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
          <label className='ml-1' htmlFor='lowToHigh'>
            Low to High
          </label>
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
          <label className='ml-1' htmlFor='highToLow'>
            High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
