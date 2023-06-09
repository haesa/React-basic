import { useState } from 'react';

export default function Counter({ total }) {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div className='counter'>
      <p className='number'>
        {count}
        <span>/ {total}</span>
      </p>
      <button className='button' onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
