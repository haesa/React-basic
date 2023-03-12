import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState('');
  const handleChange = (event) => setTodo(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === '') return;
    addTodo({ id: uuidv4(), todo, isChecked: false });
    setTodo('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        value={todo}
        onChange={handleChange}
        placeholder='Add todo...'
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
