import React from 'react';

export default function Input({ type, text, name, value }) {
  return (
    <input
      className='p-4 border border-gray-200 outline-none'
      type={type}
      name={name}
      defaultValue={value}
      placeholder={text}
      required
    />
  );
}
