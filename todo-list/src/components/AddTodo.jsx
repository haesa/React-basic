import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../css/AddTodo.module.css';

export default function AddTodo({ todo, onChange, addTodo }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <form className={styles.form} onSubmit={addTodo}>
      <input
        className={styles.add}
        type='text'
        value={todo}
        onChange={onChange}
        placeholder='Add todo...'
      />
      <button
        className={`${styles.button} ${darkMode && styles.dark}`}
        type='submit'
      >
        Add
      </button>
    </form>
  );
}
