import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div className='flex items-center gap-2'>
      <img className='w-10 rounded-full' src={photoURL} alt={displayName} />
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}
