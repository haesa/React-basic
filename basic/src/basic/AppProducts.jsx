import { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProduct, setShowProduct] = useState(true);
  return (
    <div>
      {showProduct && <Products />}
      <button onClick={() => setShowProduct((show) => !show)}>Toggle</button>
    </div>
  );
}
