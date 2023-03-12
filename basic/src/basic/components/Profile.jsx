import Avatar from './Avatar';

export default function Profile({ name, image, job, isNew }) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
