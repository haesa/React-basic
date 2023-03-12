export default function Avatar({ image, isNew }) {
  return (
    <div className='avatar'>
      {isNew && <span className='new'>New</span>}
      <img className='photo' src={image} alt='avatar' />
    </div>
  );
}
