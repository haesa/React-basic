import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  const handleClick = (event) =>
    event.target.className === 'button' && setTotal((prev) => prev + 1);

  return (
    <div className='container' onClick={handleClick}>
      <div className='total'>
        Total Count: {total} {total >= 10 ? '🔥' : '❄'}
      </div>
      <Counter total={total} />
      <Counter total={total} />
    </div>
  );
}
