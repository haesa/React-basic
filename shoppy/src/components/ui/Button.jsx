import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='px-4 py-2 rounded-sm bg-brand text-white hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
