import { useAuthContext } from '../context/AuthContext';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getCart, addOrUpdateToCart, removeFromCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    staleTime: 1000 * 60,
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
    }
  );

  const removeItem = useMutation(
    (productId) => removeFromCart(uid, productId),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
    }
  );

  return { cartQuery, addOrUpdateItem, removeItem };
}
