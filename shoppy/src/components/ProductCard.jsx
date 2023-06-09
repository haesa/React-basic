import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg '>
        <h3 className='truncate'>{title}</h3>
        <p className='text-md'>{`₩${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-sm text-gray-500'>{category}</p>
    </li>
  );
}
