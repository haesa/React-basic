import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id: productId, image, title, option, price, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(productId);

  return (
    <li className='flex justify-between items-center my-2'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
          <p className='text-xl text-brand font-bold'>{option}</p>
          <p>₩{price}</p>
        </div>
        <div className='flex items-center text-2xl'>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span className='text-xl'>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <BsFillTrashFill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
