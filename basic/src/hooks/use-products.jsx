import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`) //
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProduct(data);
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
    return () => console.log('🐣 깨끗이 정리하는 일을 합니다.');
  }, [salesOnly]);

  return [loading, error, products];
}
