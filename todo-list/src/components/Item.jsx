import { useContext } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../css/Item.module.css';

export default function Item({ id, todo, isChecked, onCheck, deleteTodo }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li className={styles.item}>
      <div className={styles.todo}>
        <input type='checkbox' id={id} checked={isChecked} onChange={onCheck} />
        <label htmlFor={id}>{todo}</label>
      </div>
      <button
        className={`${styles.button} ${darkMode && styles.dark}`}
        onClick={deleteTodo}
      >
        <IoTrashBin />
      </button>
    </li>
  );
}
