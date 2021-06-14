import React from 'react';

import './Rating.scss';

type RatingProps = {
    rating:number
}

export const Rating: React.FC<RatingProps> = (props) => {
 return (
  <div className='rating' data-total-value={props.rating}>
      <div className='rating__item' data-item-value='10'>★</div>
      <div className='rating__item' data-item-value='9'>★</div>
      <div className='rating__item' data-item-value='8'>★</div>
      <div className='rating__item' data-item-value='7'>★</div>
      <div className='rating__item' data-item-value='6'>★</div>
      <div className='rating__item' data-item-value='5'>★</div>
      <div className='rating__item' data-item-value='4'>★</div>
      <div className='rating__item' data-item-value='3'>★</div>
      <div className='rating__item' data-item-value='2'>★</div>   
      <div className='rating__item' data-item-value='1'>★</div>
  </div>
 );
}