import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5)
  return (
      <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
          <p className='absolute top-2 right-2 text-xs text-gray-400'>{category}</p>

          <Image src={image} height={200} width={200} objectFit="contain" />
          <h4>{title}</h4>

          <div className='flex'>
              {Array(rating).fill().map((_, i) => (
                <StarIcon className='h-5 text-yellow-500' />    
              ))}
        </div>
          <p className='text-xs my-2 line-clamp-2'>{description}</p>
          <div className='mb-5'>
              <Currency quantity={price} currency='INR'/>
          </div>

          {hasPrime && (
              <div className='flex items-centerspace-x-2 -mt-5'>
                  {/* <img src='https://m.media-amazon.com/images/S/sash/ZpbG74laklgnz-i.png' alt="" /> */}
                  <p className='text-xs '>PRIME</p>
                  <p className='text-xs'>FREE Next-Day Delivery</p>
              </div>
          )}
      </div>
  )
}

export default Product