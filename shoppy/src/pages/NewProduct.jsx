import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import uploadImage from '../api/uploader';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const { title, price, category, description, options } = product;
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('성공적으로 등록이 완료되었습니다!');
              setTimeout(() => setSuccess(null), 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold  my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form
        className='flex flex-col gap-2 px-96'
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <input type='file' accept='image/*' name='file' required />
        <Input type='text' text='제품명' name='title' value={title ?? ''} />
        <Input type='number' text='가격' name='price' value={price ?? ''} />
        <Input
          type='text'
          text='카테고리'
          name='category'
          value={category ?? ''}
        />
        <Input
          type='text'
          text='제품 설명'
          name='description'
          value={description ?? ''}
        />
        <Input
          type='text'
          text='옵션들(콤마(,)로 구분)'
          name='options'
          value={options ?? ''}
        />
        <Button
          text={isUploading ? '업로드중...' : '제품 등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
